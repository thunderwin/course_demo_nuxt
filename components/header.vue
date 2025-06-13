<template>
  <header class="header">
    <div class="container">
      <!-- Logo区域 -->
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <div class="logo-icon">
            <span class="code-bracket">&lt;</span>
            <span class="logo-text">程序导师007</span>
            <span class="code-bracket">/&gt;</span>
          </div>
        </NuxtLink>
      </div>
      
      <!-- 桌面端导航 -->
      <nav class="desktop-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              <span class="nav-icon">🏠</span>
              <span class="nav-text">首页</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about-us" class="nav-link">
              <span class="nav-icon">👨‍💻</span>
              <span class="nav-text">关于我</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/blog" class="nav-link">
              <span class="nav-icon">📝</span>
              <span class="nav-text">技术博客</span>
            </NuxtLink>
          </li>
         
          <li class="nav-item">
            <NuxtLink to="/contact-us" class="nav-link">
              <span class="nav-icon">📞</span>
              <span class="nav-text">联系我</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- CTA按钮 -->
      <div class="header-cta">
        <button class="cta-button">
          <span class="cta-icon">🚀</span>
          开始学习
        </button>
      </div>

      <!-- 移动端菜单按钮 -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- 移动端导航菜单 -->
    <div class="mobile-nav" :class="{ active: isMobileMenuOpen }">
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-icon">🏠</span>
            <span class="nav-text">首页</span>
          </NuxtLink>
        </li>
        <li class="mobile-nav-item">
          <NuxtLink to="/about-us" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-icon">👨‍💻</span>
            <span class="nav-text">关于我</span>
          </NuxtLink>
        </li>
        <li class="mobile-nav-item">
          <NuxtLink to="/blog" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-icon">📝</span>
            <span class="nav-text">技术博客</span>
          </NuxtLink>
        </li>
       
        <li class="mobile-nav-item">
          <NuxtLink to="/contact-us" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="nav-icon">📞</span>
            <span class="nav-text">联系我</span>
          </NuxtLink>
        </li>
        <li class="mobile-nav-item">
          <button class="mobile-cta-button" @click="closeMobileMenu">
            <span class="cta-icon">🚀</span>
            开始学习
          </button>
        </li>
      </ul>
    </div>

    <!-- 移动端菜单背景遮罩 -->
    <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
}

/* Logo样式 */
.logo {
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  display: flex;
  align-items: center;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.logo-icon:hover {
  transform: scale(1.05);
}

.code-bracket {
  color: #667eea;
  font-size: 1.6rem;
  font-weight: 800;
}

.logo-text {
  margin: 0 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 桌面端导航 */
.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.95rem;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  border-radius: 12px;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before {
  opacity: 0.1;
}

.nav-link:hover {
  transform: translateY(-2px);
  color: #667eea;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-link.router-link-active::before {
  opacity: 0;
}

.nav-icon {
  font-size: 1.1rem;
  line-height: 1;
}

.nav-text {
  font-size: 0.95rem;
}

/* CTA按钮 */
.header-cta {
  display: flex;
  align-items: center;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 107, 0.4);
}

.cta-icon {
  font-size: 1rem;
}

/* 移动端菜单按钮 */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: #667eea;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: 1px;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg);
}

/* 移动端导航 */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 999;
  padding-top: 100px;
}

.mobile-nav.active {
  right: 0;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2c3e50;
  text-decoration: none;
  padding: 20px 30px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: #f8f9fa;
  color: #667eea;
}

.mobile-nav-link.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% - 60px);
  margin: 20px 30px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
}

/* 移动端遮罩 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .desktop-nav,
  .header-cta {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .container {
    padding: 0 15px;
    min-height: 70px;
  }
  
  .logo-icon {
    font-size: 1.2rem;
  }
  
  .code-bracket {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100%;
    right: -100%;
  }
  
  .mobile-nav.active {
    right: 0;
  }
}

/* 滚动时的样式变化 */
.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}
</style>