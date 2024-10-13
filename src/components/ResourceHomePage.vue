<script setup>
import { ref, computed } from 'vue'

const resources = ref([
  { name: 'Bilibili', url: 'https://www.bilibili.com', icon: 'https://www.bilibili.com/favicon.ico' },
  { name: '微博', url: 'https://weibo.com', icon: 'https://weibo.com/favicon.ico' },
  { name: '小红书', url: 'https://www.xiaohongshu.com', icon: 'https://www.xiaohongshu.com/favicon.ico' },
])

const footerLinks = ref([
  { name: '网站简介', url: '#about' },
  { name: '联系投稿', url: '#submit' },
  { name: '支持我们', url: '#support' },
])

// branch-2: 添加搜索相关的响应式变量
const searchQuery = ref('')

// 新增: 导航栏链接
const navLinks = ref([
  { name: '首页', url: '/' },
  { name: '分类', url: '/categories' },
  { name: '热门', url: '/trending' },
  { name: '关于', url: '/about' },
])
</script>

<template>
  <div class="page-container">
    <header class="top-nav">
      <nav class="nav-links">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.url"
          class="nav-link"
        >
          {{ link.name }}
        </a>
      </nav>
      <div class="search-box">
        <input v-model="searchQuery" placeholder="搜索资源...">
      </div>
    </header>
    <main class="main-content">
      <div class="resources">
        <a 
          v-for="resource in resources" 
          :key="resource.name"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource"
        >
          <img :src="resource.icon" :alt="resource.name" class="resource-icon">
          <span class="resource-name">{{ resource.name }}</span>
        </a>
      </div>
    </main>
    <footer>
      <nav class="footer-nav">
        <a 
          v-for="link in footerLinks" 
          :key="link.name"
          :href="link.url"
          class="footer-link"
        >
          {{ link.name }}
        </a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
  color: #24292f;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.nav-links {
  display: flex;
}

.nav-link {
  color: #24292f;
  text-decoration: none;
  font-size: 14px;
  margin-right: 16px;
  font-weight: 500;
}

.nav-link:hover {
  color: #0969da;
}

.search-box {
  width: 300px;
}

.search-box input {
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  color: #24292f;
  background-color: #ffffff; 
}

.search-box input::placeholder {
  color: #6e7781; 
}

.search-box input:focus {
  outline: none;
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9,105,218,0.3); 
}

.main-content {
  flex-grow: 1;
  padding: 24px;
}

.resources {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.resource {
  display: flex;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  color: #24292f;
  transition: background-color 0.2s;
}

.resource:hover {
  background-color: #f6f8fa;
}

.resource-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  object-fit: contain;
}

.resource-name {
  font-size: 14px;
}

footer {
  padding: 24px 0;
  text-align: center;
}

.footer-link {
  color: #24292f;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
}

.footer-link:hover {
  color: #0969da;
  text-decoration: underline;
}
</style>
