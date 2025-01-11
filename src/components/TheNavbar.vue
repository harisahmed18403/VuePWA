<template>
  <nav class="flex justify-center py-4 gap-x-8 bg-on-primary-bg mb-4">
    <RouterLink v-for="route in myroutes" :key="route.path" :to="route.path" class="linkbtn">
      {{ route.name }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '@/router/index.js'

const myroutes = ref(routes)
</script>
