<template>
  <div class="blog-container">
    <!-- 页面标题区域 -->
    <div class="hero-section">
      <div class="glass-card title-card">
        <h1 class="main-title">
          <span class="title-gradient">📝 我的博客</span>
        </h1>
        <p class="subtitle">分享技术心得，记录成长足迹</p>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="pending" class="loading-section">
      <div class="glass-card loading-card">
        <div class="loading-spinner"></div>
        <p>正在加载精彩内容...</p>
      </div>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="error-section">
      <div class="glass-card error-card">
        <div class="error-icon">❌</div>
        <h3>加载失败</h3>
        <p>{{ error.message || '获取文章列表时出现问题' }}</p>
        <button @click="refresh()" class="retry-btn">
          🔄 重试
        </button>
      </div>
    </div>

    <!-- 文章列表 -->
    <div v-else class="articles-section">
      <!-- 文章统计 -->
      <div class="stats-bar">
        <div class="glass-card stats-card">
          <span class="stats-text">
            📊 共 {{ articles?.length || 0 }} 篇文章
          </span>
        </div>
      </div>

      <!-- 文章列表 -->
      <div v-if="articles && articles.length > 0" class="articles-list">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="glass-card article-item"
          @click="navigateToArticle(article.id)"
        >
          <!-- 文章标题 -->
          <div class="article-main">
            <h2 class="article-title">{{ article.title }}</h2>
          </div>
          
          <!-- 文章元信息 -->
          <div class="article-meta">
            <div class="meta-item">
              <span class="meta-icon">👤</span>
              <span class="meta-text">{{ article.author }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📅</span>
              <span class="meta-text">{{ formatDate(article.publishedAt) }}</span>
            </div>
          </div>
          
          <!-- 阅读更多按钮 -->
          <div class="read-more">
            <span class="read-more-arrow">→</span>
          </div>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="empty-section">
        <div class="glass-card empty-card">
          <div class="empty-icon">📝</div>
          <h3>暂无文章</h3>
          <p>还没有发布任何文章，敬请期待！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元信息设置
useHead({
  title: '博客列表 - 我的博客',
  meta: [
    { name: 'description', content: '浏览我的所有博客文章，分享技术心得和成长经历' }
  ]
})

// 使用$fetch从后端获取文章数据
const { data: articles, pending, error, refresh } = await useLazyFetch('/articles', {
  server: false, // 在客户端获取数据
  baseURL: 'http://localhost:7000', // 后端服务器地址
  transform: (data) => {
    // 数据转换：确保返回文章数组
    return data.success ? data.data : []
  }
})

/**
 * 导航到文章详情页
 * @param {number} articleId - 文章ID
 */
const navigateToArticle = (articleId) => {
  navigateTo(`/blog/${articleId}`)
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
  
  // 如果是今天，显示具体时间
  if (diffDays === 1) {
    return `今天 ${date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`
  }
  // 如果是一周内，显示几天前
  else if (diffDays <= 7) {
    return `${diffDays - 1}天前`
  }
  // 否则显示具体日期
  else {
    return date.toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
}
</script>

<style scoped>
/* 容器样式 */
.blog-container {
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

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 标题区域 */
.hero-section {
  text-align: center;
  margin-bottom: 3rem;
}

.title-card {
  padding: 3rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.main-title {
  margin: 0 0 1rem 0;
  font-size: 3rem;
  font-weight: 700;
}

.title-gradient {
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin: 0;
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

/* 统计栏 */
.stats-bar {
  margin-bottom: 2rem;
  text-align: center;
}

.stats-card {
  display: inline-block;
  padding: 1rem 2rem;
}

.stats-text {
  color: white;
  font-weight: 500;
}

/* 文章列表 - 横向布局 */
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* 文章条目 - 横向布局 */
.article-item {
  padding: 1.5rem 2rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  min-height: 80px;
}

.article-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-item:hover::before {
  opacity: 1;
}

/* 文章主要内容区域 */
.article-main {
  flex: 1;
  display: flex;
  align-items: center;
}

.article-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  color: white;
}

/* 文章元信息 - 横向排列 */
.article-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.9rem;
  margin-left: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}

.meta-icon {
  font-size: 1rem;
}

.meta-text {
  font-weight: 400;
}

/* 阅读更多箭头 */
.read-more {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 1rem;
}

.read-more-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.article-item:hover .read-more-arrow {
  transform: translateX(5px);
}

/* 空状态 */
.empty-section {
  text-align: center;
  margin: 3rem 0;
}

.empty-card {
  padding: 4rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blog-container {
    padding: 1rem 0.5rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .title-card {
    padding: 2rem 1rem;
  }
  
  .article-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .article-main {
    width: 100%;
  }
  
  .article-meta {
    margin-left: 0;
    gap: 1rem;
  }
  
  .read-more {
    margin-left: 0;
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .article-title {
    font-size: 1.1rem;
  }
}
</style>