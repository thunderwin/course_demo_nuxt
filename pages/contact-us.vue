<template>
  <div class="contact-page">
    <!-- 页面头部 -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">联系我</h1>
          <p class="page-subtitle">
            准备开始您的编程学习之旅？我很乐意与您交流，为您提供专业的编程指导和建议。
          </p>
        </div>
      </div>
    </section>

   
    <!-- FAQ 部分 -->
    <section class="faq-section" id="contact">
      <div class="container">
        <h2 class="section-title">常见问题</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>🤔 我完全没有编程基础，可以学会吗？</h3>
            <p>当然可以！我专门为零基础学员设计了学习路径，从最基本的概念开始，循序渐进。每个人都可以学会编程，关键是找到合适的方法和坚持练习。</p>
          </div>

          <div class="faq-item">
            <h3>⏰ 学习编程需要多长时间？</h3>
            <p>这取决于您的目标和投入时间。一般来说，掌握基础语法需要1-2个月，能够独立开发小项目需要3-6个月，成为合格的开发者需要6-12个月的持续学习。</p>
          </div>

          <div class="faq-item">
            <h3>💰 费用是怎么计算的？</h3>
            <p>我提供多种服务方式：一对一指导（按小时收费）、课程包（按阶段收费）、项目指导（按项目收费）。具体费用会根据您的需求定制，首次咨询免费。</p>
          </div>

          <div class="faq-item">
            <h3>📚 需要准备什么设备或软件？</h3>
            <p>只需要一台能上网的电脑即可开始学习。我会指导您安装必要的开发环境和工具，并推荐适合的学习资源。</p>
          </div>

          <div class="faq-item">
            <h3>🎯 如何选择适合的编程语言？</h3>
            <p>选择编程语言要考虑您的目标：网页开发推荐JavaScript、移动应用推荐Flutter/React Native、数据分析推荐Python、游戏开发推荐C#等。我会根据您的兴趣和目标提供建议。</p>
          </div>

          <div class="faq-item">
            <h3>🕐 什么时候可以开始？</h3>
            <p>随时都可以开始！我的时间比较灵活，可以根据您的日程安排课程时间。建议先通过邮件或微信联系，我们可以安排一次免费的咨询，了解您的需求。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动召唤 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开始您的编程之旅了吗？</h2>
          <p>不要犹豫，迈出第一步！我将竭诚为您提供专业的指导和支持。</p>
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="scrollToForm">立即联系</button>
            <NuxtLink to="/" class="btn btn-secondary">返回首页</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 设置页面元数据
useHead({
  title: '联系我 - 程序员导师',
  meta: [
    { name: 'description', content: '联系专业的程序员导师，获取个性化的编程学习指导和职业规划建议。' }
  ]
})

// 表单数据
const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  experience: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

// 提交表单
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // 这里可以添加实际的表单提交逻辑
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    submitMessage.value = '消息发送成功！我会在24小时内回复您。'
    submitMessageType.value = 'success'
    
    // 重置表单
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    
  } catch (error) {
    submitMessage.value = '发送失败，请稍后重试或直接发送邮件联系我。'
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // 3秒后清除消息
    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
  }
}

// 滚动到表单
const scrollToForm = () => {
  document.querySelector('.contact-form-wrapper').scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* 全局样式 */
.contact-page {
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #2c3e50;
}

/* 页面头部 */
.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px 0 60px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 主要联系区域 */
.contact-main {
  padding: 80px 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* 联系信息 */
.contact-info {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-icon {
  font-size: 2rem;
  min-width: 50px;
}

.contact-details h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.contact-details p {
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  color: #667eea;
}

.contact-note {
  font-size: 0.85rem;
  color: #666;
  font-style: italic;
}

/* 社交媒体 */
.social-media h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  transition: transform 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

/* 联系表单 */
.contact-form-wrapper {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 400 !important;
}

.checkbox-label input[type="checkbox"] {
  margin: 0;
  width: auto;
}

.submit-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 107, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 500;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* FAQ 部分 */
.faq-section {
  padding: 80px 0;
  background: white;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
}

.faq-item h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 1.1rem;
}

.faq-item p {
  color: #666;
  line-height: 1.6;
}

/* CTA 部分 */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info,
  .contact-form-wrapper {
    padding: 2rem;
  }
  
  .social-links {
    grid-template-columns: 1fr;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 80px 0 60px;
  }
  
  .contact-main,
  .faq-section,
  .cta-section {
    padding: 60px 0;
  }
  
  .contact-info,
  .contact-form-wrapper {
    padding: 1.5rem;
  }
  
  .contact-item {
    padding: 1rem;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
}
</style>