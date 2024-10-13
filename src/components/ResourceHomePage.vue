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
</script>

<template>
  <div class="page-container">
    <header>
      <h1 class="title">资源导航网</h1>
    </header>
    <main class="resource-nav">
      <!-- branch-2: 添加搜索框 -->
      <div class="search-box">
        <input v-model="searchQuery" placeholder="搜索资源...">
      </div>
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

header {
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
}

.title {
  font-size: 28px;
  color: #333;
  margin: 0;
}

.resource-nav {
  flex-grow: 1;
  max-width: 400px;
  margin: 20px auto;
  padding: 0 20px;
}

/* branch-2: 添加搜索框样式 */
.search-box {
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff; 
  color: #333; 
}

.search-box input::placeholder {
  color: #999; 
}

.search-box input:focus {
  outline: none;
  border-color: #007bff; 
  box-shadow: 0 0 0 2px rgba(0,123,255,.25); 
}

.resources {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.resource {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.resource:hover {
  background-color: #e0e0e0;
}

.resource-icon {
  width: 24px;
  height: 24px;
  margin-right: 15px;
  object-fit: contain;
}

.resource-name {
  font-size: 18px;
}

footer {
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
}

.footer-nav {
  margin-bottom: 10px;
}

.footer-link {
  color: #666;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
