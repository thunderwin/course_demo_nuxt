<template>
  <div class="about-container">
    <div class="hero-section">
      <h1 class="main-title">关于我们</h1>
      <p class="subtitle">致力于创造卓越的数字体验</p>
    </div>

    <div class="content-section">
      <div class="intro-card">
        <h2>我们的故事</h2>
        <p>
          我们是一支充满激情的技术团队，专注于为客户提供创新的数字解决方案。
          从网站开发到移动应用，从用户体验设计到技术咨询，我们始终坚持用技术改变世界的信念。
        </p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="icon">🚀</div>
          <h3>创新驱动</h3>
          <p>持续探索前沿技术，为客户带来突破性的解决方案</p>
        </div>
        
        <div class="value-card">
          <div class="icon">🎯</div>
          <h3>专业精神</h3>
          <p>严谨的工作态度，精湛的技术能力，确保项目质量</p>
        </div>
        
        <div class="value-card">
          <div class="icon">🤝</div>
          <h3>客户至上</h3>
          <p>深入理解客户需求，提供贴心的技术支持和服务</p>
        </div>
      </div>

      <div class="team-section">
        <h2>我们的团队</h2>
        <p>
          汇聚了前端开发、后端架构、UI/UX设计、产品管理等多领域的专业人才。
          我们相信团队的力量，通过协作创造更大的价值。
        </p>
        
        <div class="stats">
          <div class="stat-item">
            <span class="number">50+</span>
            <span class="label">成功项目</span>
          </div>
          <div class="stat-item">
            <span class="number">3年+</span>
            <span class="label">行业经验</span>
          </div>
          <div class="stat-item">
            <span class="number">99%</span>
            <span class="label">客户满意度</span>
          </div>
        </div>
      </div>

      <div class="contact-cta">
        <h2>让我们一起创造未来</h2>
        <p>有项目需求或技术咨询？我们随时准备为您提供专业服务。</p>
        <button class="cta-button">联系我们</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 3rem;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  font-weight: 300;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.intro-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
}

.intro-card h2 {
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.intro-card p {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.8;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #2d3748;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: #4a5568;
  line-height: 1.6;
}

.team-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
}

.team-section h2 {
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.team-section > p {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.label {
  color: #4a5568;
  font-size: 1rem;
  font-weight: 500;
}

.contact-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.contact-cta p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .number {
    font-size: 2rem;
  }
}
</style>