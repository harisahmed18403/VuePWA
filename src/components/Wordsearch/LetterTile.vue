<template>
  <button class="letter-tile w-10 h-10" @click="onClick">
    {{ letter }}
  </button>
</template>
<script setup>
import { defineProps } from 'vue'

const { letter } = defineProps({
  letter: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
  },
})
</script>
