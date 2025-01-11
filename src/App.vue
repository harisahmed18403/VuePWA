<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from '@/components/TheNavBar.vue'
</script>

<template>
  <header>
    <TheNavBar />
  </header>
  <body>
    <RouterView />
  </body>
</template>
