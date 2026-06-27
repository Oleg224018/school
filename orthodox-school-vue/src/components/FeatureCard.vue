<template>
  <div class="feature">
    <component :is="icon" class="feature-icon" />
    <div>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: Object,
  title: String,
  text: String
})
</script>