<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">程序员导师</span>
            <br />
            让编程变得简单易懂
          </h1>
          <p class="hero-description">
            你好！我是一名资深程序员，专注于帮助初学者和有经验的开发者提升编程技能。
            我相信每个人都可以学会编程，让我们一起开启这段精彩的学习之旅！
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">开始学习</button>
            <button class="btn btn-secondary">了解更多</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="code-animation">
            <div class="code-line">
              <span class="code-keyword">function</span>
              <span class="code-function">teachProgramming</span>
              <span class="code-punctuation">() {</span>
            </div>
            <div class="code-line">
              <span class="code-indent">  </span>
              <span class="code-keyword">return</span>
              <span class="code-string">"让每个人都能掌握编程"</span>
              <span class="code-punctuation">;</span>
            </div>
            <div class="code-line">
              <span class="code-punctuation">}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务介绍 -->
    <section class="services">
      <div class="container">
        <h2 class="section-title">我能为你提供什么</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3>一对一编程指导</h3>
            <p>根据你的学习进度和目标，制定个性化的学习计划，提供专业的编程指导。</p>
          </div>
          <div class="service-card">
            <div class="service-icon">📚</div>
            <h3>编程课程设计</h3>
            <p>从零基础到高级应用，系统性的课程体系，让你循序渐进地掌握编程技能。</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3>项目实战指导</h3>
            <p>通过实际项目练习，帮助你将理论知识转化为实践能力，积累宝贵经验。</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎯</div>
            <h3>职业规划咨询</h3>
            <p>分享行业经验，帮助你规划程序员职业发展路径，提升求职竞争力。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能展示 -->
    <section class="skills">
      <div class="container">
        <h2 class="section-title">技术栈</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>前端开发</h3>
            <div class="skill-tags">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">HTML5</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>后端开发</h3>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">Go</span>
              <span class="skill-tag">PHP</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>数据库</h3>
            <div class="skill-tags">
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Redis</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>其他技能</h3>
            <div class="skill-tags">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">微服务</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习路径 -->
    <section class="learning-path">
      <div class="container">
        <h2 class="section-title">学习路径</h2>
        <div class="path-timeline">
          <div class="path-item">
            <div class="path-number">1</div>
            <h3>基础知识</h3>
            <p>学习编程基础概念、语法和逻辑思维</p>
          </div>
          <div class="path-item">
            <div class="path-number">2</div>
            <h3>实战练习</h3>
            <p>通过小项目巩固所学知识，培养解决问题的能力</p>
          </div>
          <div class="path-item">
            <div class="path-number">3</div>
            <h3>进阶提升</h3>
            <p>学习高级特性、设计模式和最佳实践</p>
          </div>
          <div class="path-item">
            <div class="path-number">4</div>
            <h3>项目实战</h3>
            <p>参与真实项目，积累实际开发经验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="contact">
      <div class="container">
        <h2 class="section-title">开始你的编程之旅</h2>
        <p class="contact-description">
          准备好学习编程了吗？联系我，让我们一起制定你的学习计划！
        </p>
        <div class="contact-buttons">
          <button class="btn btn-primary btn-large">联系我</button>
          <button class="btn btn-secondary btn-large">查看作品集</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 全局样式 */
.home-page {
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

/* 英雄区域 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.hero-content {
  max-width: 800px;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
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

.btn-large {
  padding: 16px 32px;
  font-size: 1.1rem;
}

/* 代码动画 */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.code-animation {
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
}

.code-line {
  margin: 0.5rem 0;
}

.code-keyword {
  color: #569cd6;
}

.code-function {
  color: #dcdcaa;
}

.code-string {
  color: #ce9178;
}

.code-punctuation {
  color: #d4d4d4;
}

.code-indent {
  display: inline-block;
  width: 2ch;
}

/* 服务介绍 */
.services {
  padding: 100px 0;
  background: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

/* 技能展示 */
.skills {
  padding: 100px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.skill-category h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* 学习路径 */
.learning-path {
  padding: 100px 0;
  background: #f8f9fa;
}

.path-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.path-item {
  text-align: center;
  position: relative;
}

.path-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff6b6b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.path-item h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

/* 联系方式 */
.contact {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.contact .container {
  max-width: 800px;
}

.contact .section-title {
  color: white;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
    min-height: 90vh;
  }
  
  .hero-container {
    gap: 2rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .code-animation {
    font-size: 0.9rem;
    padding: 1.5rem;
    max-width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  .services,
  .skills,
  .learning-path,
  .contact {
    padding: 60px 0;
  }
  
  .services-grid,
  .skills-grid,
  .path-timeline {
    gap: 1.5rem;
  }
}
</style>

