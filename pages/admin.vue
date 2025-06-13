<template>
  <div class="admin-container">
    <!-- 页面标题 -->
    <div class="page-header glass-card">
      <h1 class="title">文章发布管理</h1>
      <p class="subtitle">创建和发布您的博客文章</p>
    </div>

    <!-- 发布文章表单 -->
    <div class="form-container glass-card">
      <form @submit.prevent="publishArticle" class="article-form">
        <!-- 文章标题输入框 -->
        <div class="form-group">
          <label for="title" class="form-label">文章标题</label>
          <input
            id="title"
            v-model="article.title"
            type="text"
            class="form-input glass-input"
            placeholder="请输入文章标题..."
            required
          />
        </div>

        <!-- 作者输入框 -->
        <div class="form-group">
          <label for="author" class="form-label">作者</label>
          <input
            id="author"
            v-model="article.author"
            type="text"
            class="form-input glass-input"
            placeholder="请输入作者姓名..."
            required
          />
        </div>

        <!-- 文章内容输入框 -->
        <div class="form-group">
          <label for="content" class="form-label">文章内容</label>
          <textarea
            id="content"
            v-model="article.content"
            class="form-textarea glass-input"
            placeholder="请输入文章内容..."
            rows="12"
            required
          ></textarea>
        </div>

        <!-- 创建时间显示 -->
        <div class="form-group">
          <label class="form-label">创建时间</label>
          <div class="time-display glass-input">
            {{ formatTime(currentTime) }}
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="form-actions">
          <button
            type="submit"
            class="submit-btn glass-btn"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">发布文章</span>
            <span v-else>发布中...</span>
          </button>
          
          <button
            type="button"
            @click="resetForm"
            class="reset-btn glass-btn-secondary"
          >
            重置表单
          </button>
        </div>
      </form>
    </div>

    <!-- 发布状态提示 -->
    <div v-if="publishStatus" class="status-message" :class="publishStatus.type">
      {{ publishStatus.message }}
    </div>
  </div>
</template>

<script setup>
// 页面标题设置
useHead({
  title: '文章发布管理 - 博客后台',
  meta: [
    { name: 'description', content: '博客文章发布和管理页面' }
  ]
})

// 响应式数据定义
const article = ref({
  title: '',      // 文章标题
  content: '',    // 文章内容
  author: '',     // 作者姓名
})

// 当前时间，每秒更新
const currentTime = ref(new Date())

// 提交状态
const isSubmitting = ref(false)

// 发布状态消息
const publishStatus = ref(null)

// 定时更新当前时间
let timeInterval = null

// 组件挂载时启动时间更新
onMounted(() => {
  // 每秒更新一次时间
  timeInterval = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})

/**
 * 格式化时间显示
 * @param {Date} date - 要格式化的日期对象
 * @returns {string} 格式化后的时间字符串
 */
const formatTime = (date) => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

/**
 * 发布文章函数
 * 收集表单数据并发送到服务器
 */
const publishArticle = async () => {
  try {
    // 设置提交状态
    isSubmitting.value = true
    publishStatus.value = null

    // 构建文章数据，包含自动生成的时间戳
    const articleData = {
      title: article.value.title,
      content: article.value.content,
      author: article.value.author,
      createdAt: currentTime.value.toISOString(), // ISO格式的时间戳
      publishedAt: new Date().toISOString(),      // 发布时间
    }

    // 使用 $fetch 发送文章数据到服务器
    // 这里假设有一个API端点来处理文章发布
    const response = await $fetch('http://localhost:7000/upload', {
      method: 'POST',
      body: articleData,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // 发布成功
    publishStatus.value = {
      type: 'success',
      message: '文章发布成功！'
    }

    // 重置表单
    resetForm()

    // 3秒后清除状态消息
    setTimeout(() => {
      publishStatus.value = null
    }, 3000)

  } catch (error) {
    // 发布失败处理
    console.error('文章发布失败:', error)
    publishStatus.value = {
      type: 'error',
      message: '文章发布失败，请重试。'
    }

    // 5秒后清除错误消息
    setTimeout(() => {
      publishStatus.value = null
    }, 5000)
  } finally {
    // 恢复提交状态
    isSubmitting.value = false
  }
}

/**
 * 重置表单数据
 */
const resetForm = () => {
  article.value = {
    title: '',
    content: '',
    author: '',
  }
  publishStatus.value = null
}
</script>

<style scoped>
/* 管理页面容器样式 */
.admin-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 页面标题区域 */
.page-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* 液体玻璃卡片效果 */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* 表单容器 */
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
}

/* 表单样式 */
.article-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

/* 液体玻璃输入框样式 */
.glass-input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.glass-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-input {
  height: 3rem;
}

.form-textarea {
  min-height: 12rem;
  resize: vertical;
  font-family: inherit;
  line-height: 1.6;
}

/* 时间显示样式 */
.time-display {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 1rem;
  cursor: default;
  user-select: none;
}

/* 表单操作按钮区域 */
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

/* 液体玻璃按钮样式 */
.glass-btn {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.glass-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.glass-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.glass-btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.glass-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transform: translateY(-1px);
}

/* 状态消息样式 */
.status-message {
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideIn 0.3s ease;
  z-index: 1000;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #ffffff;
  border-color: rgba(34, 197, 94, 0.3);
}

.status-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ffffff;
  border-color: rgba(239, 68, 68, 0.3);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .admin-container {
    padding: 1rem;
  }
  
  .form-container {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .status-message {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
}
</style>
