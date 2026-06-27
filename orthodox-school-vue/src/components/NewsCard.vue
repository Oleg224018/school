<template>
  <article class="news-card">
    <img :src="image" :alt="title" />
    <div class="news-content">
      <time>{{ date }}</time>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: String,
  date: String,
  title: String,
  text: String
})
</script>