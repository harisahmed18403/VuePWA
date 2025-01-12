<template>
  <div class="flex bg-on-primary-bg gap-1 p-2 rounded-lg border-2 border-primary-border">
    <div class="flex flex-col gap-y-1" v-for="(ignore, x) in numTilesX" :key="`x${x}`">
      <div v-for="(ignore, y) in numTilesY" :key="`y${y}`">
        <LetterTile :letter="letterMap[`${x},${y}`]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import LetterTile from './LetterTile.vue'

const { numTilesX, numTilesY } = defineProps({
  numTilesX: {
    type: Number,
    default: 10,
  },

  numTilesY: {
    type: Number,
    default: 10,
  },

  letterMap: {
    type: Object,
    required: true,
  },
})
</script>
