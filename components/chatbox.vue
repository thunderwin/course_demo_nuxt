<template>
  <!-- 聊天窗口容器 - 固定在右下角 -->
  <div class="chatbox-container" :class="{ 'expanded': isExpanded }">
    
    <!-- 聊天图标按钮 - 始终显示 -->
    <div 
      class="chat-toggle-btn"
      @click="toggleChat"
      :class="{ 'expanded': isExpanded }"
    >
      <!-- 聊天图标 -->
      <div class="chat-icon" v-if="!isExpanded">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V18L6 14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
        </svg>
      </div>
      
      <!-- 关闭图标 -->
      <div class="close-icon" v-else>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
      
      <!-- 未读消息提示点 -->
      <div v-if="unreadCount > 0 && !isExpanded" class="unread-badge">
        {{ unreadCount > 99 ? '99+' : unreadCount }}
      </div>
    </div>

    <!-- 聊天窗口主体 -->
    <transition name="chat-window">
      <div v-if="isExpanded" class="chat-window">
        
        <!-- 窗口头部 -->
        <div class="chat-header">
          <div class="header-info">
            <div class="avatar">🤖</div>
            <div class="chat-title">
              <h3>智能助手</h3>
              <span class="status" :class="{ 'online': isOnline }">
                {{ isOnline ? '在线' : '离线' }}
              </span>
            </div>
          </div>
        </div>

        <!-- 消息列表区域 -->
        <div class="messages-container" ref="messagesContainer">
          <div class="messages-list">
            
            <!-- 欢迎消息 -->
            <div v-if="messages.length === 0" class="welcome-message">
              <div class="message-bubble bot">
                <div class="message-content">
                  👋 你好！我是你的智能助手，有什么可以帮助你的吗？
                </div>
                <div class="message-time">{{ getCurrentTime() }}</div>
              </div>
            </div>

            <!-- 消息列表 -->
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="message-item"
              :class="{ 'user': message.type === 'user', 'bot': message.type === 'bot' }"
            >
              <div class="message-bubble" :class="message.type">
                <div class="message-content" v-html="formatMessage(message.content)"></div>
                <div class="message-time">{{ message.time }}</div>
              </div>
            </div>

            <!-- 加载状态指示器 -->
            <div v-if="isLoading" class="message-item bot">
              <div class="message-bubble bot loading">
                <div class="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 输入区域 -->
        <div class="input-area">
          <div class="input-container">
            <textarea
              v-model="inputMessage"
              @keydown="handleKeyDown"
              @input="handleInput"
              placeholder="输入您的问题..."
              class="message-input"
              rows="1"
              :disabled="isLoading"
              ref="messageInput"
            ></textarea>
            
            <button
              @click="sendMessage"
              class="send-btn"
              :disabled="!canSend"
              :class="{ 'active': canSend }"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <!-- 快捷操作按钮 -->
          <div class="quick-actions">
            <button @click="clearChat" class="action-btn" title="清空聊天">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6H19Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, watch } from 'vue'

// 响应式数据定义
const isExpanded = ref(false) // 聊天窗口是否展开
const inputMessage = ref('') // 输入框内容
const messages = ref([]) // 消息列表
const isLoading = ref(false) // 加载状态
const unreadCount = ref(0) // 未读消息数量
const isOnline = ref(true) // 在线状态
const messagesContainer = ref(null) // 消息容器引用
const messageInput = ref(null) // 输入框引用

// 计算属性 - 是否可以发送消息
const canSend = computed(() => {
  return inputMessage.value.trim().length > 0 && !isLoading.value
})

// 切换聊天窗口显示状态
const toggleChat = () => {
  isExpanded.value = !isExpanded.value
  
  // 如果展开聊天窗口，清零未读数量并聚焦输入框
  if (isExpanded.value) {
    unreadCount.value = 0
    nextTick(() => {
      if (messageInput.value) {
        messageInput.value.focus()
      }
    })
  }
}

// 发送消息的主要函数
const sendMessage = async () => {
  if (!canSend.value) return

  const message = inputMessage.value.trim()
  if (!message) return

  // 添加用户消息到消息列表
  const userMessage = {
    type: 'user',
    content: message,
    time: getCurrentTime()
  }
  messages.value.push(userMessage)

  // 清空输入框并设置加载状态
  inputMessage.value = ''
  isLoading.value = true

  // 自动滚动到底部
  scrollToBottom()

  try {
    // 向后端发送请求 - 使用 $fetch 方法
    const response = await $fetch('http://localhost:7000/chat', {
      method: 'POST',
      body: {
        message: message,
        conversation_id: getConversationId(),
        timestamp: Date.now()
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('后端响应数据:', response)

    // 处理成功响应 - 根据后端实际返回的数据结构进行处理
    if (response && response.success && response.data && response.data.response) {
      const botMessage = {
        type: 'bot',
        content: response.data.response,
        time: getCurrentTime()
      }
      messages.value.push(botMessage)

      // 如果窗口未展开，增加未读数量
      if (!isExpanded.value) {
        unreadCount.value++
      }
      
      console.log('AI回复已添加到消息列表:', botMessage)
    } else {
      console.error('响应格式错误:', response)
      throw new Error('Invalid response format')
    }

  } catch (error) {
    console.error('发送消息失败:', error)
    
    // 添加错误消息
    const errorMessage = {
      type: 'bot',
      content: '抱歉，我暂时无法回复您的消息。请稍后再试。',
      time: getCurrentTime()
    }
    messages.value.push(errorMessage)
  } finally {
    // 结束加载状态并滚动到底部
    isLoading.value = false
    scrollToBottom()
    
    // 重新聚焦输入框
    nextTick(() => {
      if (messageInput.value) {
        messageInput.value.focus()
      }
    })
  }
}

// 处理键盘事件
const handleKeyDown = (event) => {
  // 按 Enter 发送，Shift+Enter 换行
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}

// 处理输入框内容变化，自动调整高度
const handleInput = () => {
  if (messageInput.value) {
    messageInput.value.style.height = 'auto'
    messageInput.value.style.height = Math.min(messageInput.value.scrollHeight, 100) + 'px'
  }
}

// 滚动到消息底部
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

// 获取当前时间字符串
const getCurrentTime = () => {
  return new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 格式化消息内容（支持简单的Markdown）
const formatMessage = (content) => {
  return content
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
}

// 清空聊天记录
const clearChat = () => {
  if (confirm('确定要清空所有聊天记录吗？')) {
    messages.value = []
    unreadCount.value = 0
  }
}

// 获取会话ID（用于后端识别用户会话）
const getConversationId = () => {
  let conversationId = localStorage.getItem('chat_conversation_id')
  if (!conversationId) {
    conversationId = 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('chat_conversation_id', conversationId)
  }
  return conversationId
}

// 监听窗口展开状态变化
watch(isExpanded, (newValue) => {
  if (newValue) {
    // 展开时滚动到底部
    scrollToBottom()
  }
})

// 组件挂载时的初始化
onMounted(() => {
  // 可以在这里添加初始化逻辑，比如恢复聊天记录等
  console.log('聊天组件已初始化')
})
</script>

<style scoped>
/* 主容器样式 - 固定在右下角 */
.chatbox-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 聊天切换按钮 - 液体玻璃风格 */
.chat-toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #3b82f6;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-left: auto;
}

.chat-toggle-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.3);
}

.chat-toggle-btn.expanded {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.chat-toggle-btn.expanded:hover {
  background: rgba(239, 68, 68, 0.2);
  box-shadow: 0 12px 40px rgba(239, 68, 68, 0.3);
}

/* 未读消息提示badge */
.unread-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
}

/* 聊天窗口主体 */
.chat-window {
  width: 380px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
}

/* 窗口头部 */
.chat-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-title h3 {
  margin: 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
}

.status {
  font-size: 12px;
  color: #6b7280;
}

.status.online {
  color: #10b981;
}

/* 消息容器 */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
  scroll-behavior: smooth;
}

.messages-container::-webkit-scrollbar {
  width: 4px;
}

.messages-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.messages-container::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 2px;
}

/* 欢迎消息 */
.welcome-message {
  padding: 20px 0;
}

/* 消息项 */
.message-item {
  margin: 12px 0;
  display: flex;
}

.message-item.user {
  justify-content: flex-end;
}

.message-item.bot {
  justify-content: flex-start;
}

/* 消息气泡 */
.message-bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  position: relative;
  backdrop-filter: blur(10px);
}

.message-bubble.user {
  background: rgba(59, 130, 246, 0.9);
  color: white;
  border-bottom-right-radius: 6px;
}

.message-bubble.bot {
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
}

.message-content {
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}

.message-time {
  font-size: 11px;
  opacity: 0.7;
  margin-top: 4px;
}

/* 加载状态的消息气泡 */
.message-bubble.loading {
  padding: 16px;
}

/* 打字指示器动画 */
.typing-indicator {
  display: flex;
  gap: 4px;
  align-items: center;
}

.typing-indicator span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6b7280;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 输入区域 */
.input-area {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.input-container {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

/* 消息输入框 */
.message-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 14px;
  resize: none;
  outline: none;
  max-height: 100px;
  transition: all 0.2s ease;
}

.message-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.message-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 发送按钮 */
.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: none;
  background: rgba(156, 163, 175, 0.3);
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-btn.active {
  background: #3b82f6;
  color: white;
  transform: scale(1.05);
}

.send-btn:hover.active {
  background: #2563eb;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.send-btn:disabled {
  cursor: not-allowed;
}

/* 快捷操作按钮 */
.quick-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
}

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

/* 聊天窗口展开/收起动画 */
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom right;
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 40px);
    height: 70vh;
    max-height: 500px;
  }
  
  .chatbox-container {
    bottom: 10px;
    right: 10px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .chat-window {
    background: rgba(17, 24, 39, 0.9);
  }
  
  .chat-header {
    background: rgba(31, 41, 55, 0.5);
  }
  
  .chat-title h3 {
    color: #f9fafb;
  }
  
  .message-bubble.bot {
    background: rgba(31, 41, 55, 0.9);
    color: #f9fafb;
  }
  
  .message-input {
    background: rgba(31, 41, 55, 0.9);
    color: #f9fafb;
  }
}
</style>
