<script setup>
const { data: posts } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts/'
);
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
