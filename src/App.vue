<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  // Initial Theme Check based on device preference or localStorage
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>
