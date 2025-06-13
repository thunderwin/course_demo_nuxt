<template>
  <div class="article-container">
    <!-- 返回按钮 -->
    <div class="navigation-bar">
      <button @click="goBack" class="glass-card back-btn">
        <span class="back-arrow">←</span>
        <span>返回列表</span>
      </button>
    </div>

    <!-- 加载状态 -->
    <div v-if="pending" class="loading-section">
      <div class="glass-card loading-card">
        <div class="loading-spinner"></div>
        <p>正在加载文章内容...</p>
      </div>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="error-section">
      <div class="glass-card error-card">
        <div class="error-icon">❌</div>
        <h3>加载失败</h3>
        <p>{{ error.message || '获取文章内容时出现问题' }}</p>
        <button @click="refresh()" class="retry-btn">
          🔄 重试
        </button>
      </div>
    </div>

    <!-- 文章内容 -->
    <article v-else-if="article" class="article-section">
      <!-- 文章头部 -->
      <header class="glass-card article-header">
        <h1 class="article-title">{{ article.title }}</h1>
        
        <!-- 文章元信息 -->
        <div class="article-meta">
          <div class="meta-row">
            <div class="meta-item">
              <span class="meta-icon">👤</span>
              <span class="meta-label">作者:</span>
              <span class="meta-value">{{ article.author }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📅</span>
              <span class="meta-label">发布:</span>
              <span class="meta-value">{{ formatDate(article.publishedAt) }}</span>
            </div>
          </div>
          <div class="meta-row">
            <div class="meta-item">
              <span class="meta-icon">🕐</span>
              <span class="meta-label">创建:</span>
              <span class="meta-value">{{ formatDate(article.createdAt) }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📊</span>
              <span class="meta-label">字数:</span>
              <span class="meta-value">{{ getWordCount(article.content) }} 字</span>
            </div>
          </div>
        </div>
      </header>

      <!-- 文章正文 -->
      <div class="glass-card article-content">
        <div class="content-wrapper" v-html="formatContent(article.content)"></div>
      </div>

      <!-- 文章底部操作 -->
      <footer class="glass-card article-footer">
        <div class="footer-actions">
          <button @click="goBack" class="action-btn primary">
            <span class="btn-icon">📝</span>
            <span>返回列表</span>
          </button>
          <button @click="shareArticle" class="action-btn secondary">
            <span class="btn-icon">📤</span>
            <span>分享文章</span>
          </button>
        </div>
        
        <div class="article-info">
          <p class="info-text">
            感谢您的阅读！如果觉得文章不错，欢迎分享给朋友。
          </p>
        </div>
      </footer>
    </article>

    <!-- 文章不存在 -->
    <div v-else class="not-found-section">
      <div class="glass-card not-found-card">
        <div class="not-found-icon">📄</div>
        <h3>文章不存在</h3>
        <p>抱歉，您要查看的文章可能已被删除或不存在。</p>
        <button @click="goBack" class="back-home-btn">
          🏠 返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 获取路由参数
const route = useRoute()
const articleId = route.params.url

// 页面元信息设置（动态）
const { data: article, pending, error, refresh } = await useLazyFetch(`/articles/${articleId}`, {
  server: false, // 在客户端获取数据
  baseURL: 'http://localhost:7000', // 后端服务器地址
  transform: (data) => {
    // 数据转换：提取文章数据
    return data.success ? data.data : null
  }
})

// 动态设置页面标题和描述
watch(article, (newArticle) => {
  if (newArticle) {
    useHead({
      title: `${newArticle.title} - 我的博客`,
      meta: [
        { 
          name: 'description', 
          content: getExcerpt(newArticle.content, 160) 
        },
        { 
          property: 'og:title', 
          content: newArticle.title 
        },
        { 
          property: 'og:description', 
          content: getExcerpt(newArticle.content, 160) 
        }
      ]
    })
  }
}, { immediate: true })

/**
 * 返回上一页或文章列表
 */
const goBack = () => {
  // 如果有历史记录，返回上一页；否则跳转到博客列表
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/blog')
  }
}

/**
 * 分享文章功能
 */
const shareArticle = async () => {
  if (navigator.share && article.value) {
    try {
      await navigator.share({
        title: article.value.title,
        text: getExcerpt(article.value.content, 100),
        url: window.location.href
      })
    } catch (error) {
      // 分享取消或失败，复制链接到剪贴板
      copyToClipboard()
    }
  } else {
    // 不支持原生分享，复制链接到剪贴板
    copyToClipboard()
  }
}

/**
 * 复制链接到剪贴板
 */
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert('✅ 文章链接已复制到剪贴板！')
  } catch (error) {
    console.error('复制失败:', error)
    alert('❌ 复制失败，请手动复制链接')
  }
}

/**
 * 获取文章摘要
 * @param {string} content - 文章内容
 * @param {number} limit - 字符限制
 * @return {string} 文章摘要
 */
const getExcerpt = (content, limit = 150) => {
  if (!content) return '暂无内容...'
  // 移除HTML标签并截取指定长度
  const plainText = content.replace(/<[^>]*>/g, '')
  return plainText.length > limit ? plainText.substring(0, limit) + '...' : plainText
}

/**
 * 格式化文章内容，支持简单的HTML渲染
 * @param {string} content - 原始内容
 * @return {string} 格式化后的内容
 */
const formatContent = (content) => {
  if (!content) return '暂无内容'
  
  // 将换行符转换为HTML换行
  let formattedContent = content.replace(/\n/g, '<br>')
  
  // 简单的Markdown样式支持
  formattedContent = formattedContent
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // 粗体
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // 斜体
    .replace(/`(.*?)`/g, '<code>$1</code>') // 行内代码
  
  return formattedContent
}

/**
 * 计算文章字数
 * @param {string} content - 文章内容
 * @return {number} 字数
 */
const getWordCount = (content) => {
  if (!content) return 0
  // 移除HTML标签后计算字符数
  const plainText = content.replace(/<[^>]*>/g, '')
  return plainText.length
}

/**
 * 格式化日期显示
 * @param {string} dateString - 日期字符串
 * @return {string} 格式化后的日期
 */
const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  // 如果是今天
  if (diffDays === 1) {
    return `今天 ${date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`
  }
  // 如果是一周内
  else if (diffDays <= 7) {
    return `${diffDays - 1}天前`
  }
  // 显示完整日期和时间
  else {
    return date.toLocaleString('zh-CN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
}
</script>

<style scoped>
/* 容器样式 */
.article-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

/* 液体玻璃效果基础样式 */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* 导航栏 */
.navigation-bar {
  margin-bottom: 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-5px);
}

.back-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.back-btn:hover .back-arrow {
  transform: translateX(-3px);
}

/* 加载状态 */
.loading-section {
  text-align: center;
  margin: 3rem 0;
}

.loading-card {
  padding: 3rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误状态 */
.error-section {
  text-align: center;
  margin: 3rem 0;
}

.error-card {
  padding: 3rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.retry-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 文章区域 */
.article-section {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 文章头部 */
.article-header {
  padding: 2.5rem;
  text-align: center;
  color: white;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 文章元信息 */
.article-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.meta-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.meta-icon {
  font-size: 1.1rem;
}

.meta-label {
  font-weight: 500;
}

.meta-value {
  color: rgba(255, 255, 255, 0.9);
}

/* 文章内容 */
.article-content {
  padding: 3rem;
  color: white;
}

.content-wrapper {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

/* 内容样式 */
.content-wrapper :deep(strong) {
  color: white;
  font-weight: 600;
}

.content-wrapper :deep(em) {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

.content-wrapper :deep(code) {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
}

/* 文章底部 */
.article-footer {
  padding: 2.5rem;
  text-align: center;
  color: white;
}

.footer-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.action-btn.primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-btn.primary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-icon {
  font-size: 1.1rem;
}

.article-info {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
}

.info-text {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.95rem;
}

/* 404状态 */
.not-found-section {
  text-align: center;
  margin: 3rem 0;
}

.not-found-card {
  padding: 4rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
}

.not-found-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.back-home-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  font-size: 1rem;
}

.back-home-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-container {
    padding: 1rem 0.5rem;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-header {
    padding: 2rem 1.5rem;
  }
  
  .article-content {
    padding: 2rem 1.5rem;
  }
  
  .article-footer {
    padding: 2rem 1.5rem;
  }
  
  .meta-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
  
  .content-wrapper {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .article-title {
    font-size: 1.75rem;
  }
  
  .back-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
