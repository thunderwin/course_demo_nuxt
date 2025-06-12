<template>
  <div class="blog-container">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <div class="blog-meta">
      <p><strong>作者：</strong>{{ blog.author }}</p>
      <p><strong>发布日期：</strong>{{ blog.date }}</p>
      <p><strong>标签：</strong>{{ blog.tags.join(', ') }}</p>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1, h2 {
  color: #2c3e50;
}

ul, ol {
  margin: 20px 0;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

.blog-meta {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}
</style>

<script setup>
import { ref } from 'vue';


const blog = ref({
  title: "",
  content: "",
  author: "",
  date: "",
  tags: []
});



async function getBlog() {
  const res = await $fetch('http://localhost:7000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(res);
  blog.value = res
}

onMounted(() => {
  getBlog();
})
</script>