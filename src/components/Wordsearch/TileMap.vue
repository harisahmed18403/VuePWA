<template>
  <div class="flex bg-on-primary-bg gap-1 p-2 rounded-lg border-2 border-primary-border">
    <div class="flex flex-col gap-y-1" v-for="x in numTilesX" :key="`x${x}`">
      <div v-for="y in numTilesY" :key="`y${y}`">
        <LetterTile :letter="letterMap[`${x},${y}`]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from 'vue'
import LetterTile from './LetterTile.vue'

const { numTilesX, numTilesY, word } = defineProps({
  numTilesX: {
    type: Number,
    default: 10,
  },

  numTilesY: {
    type: Number,
    default: 10,
  },

  word: {
    type: String,
    default: 'Hello',
  },
})

const letterMap = ref(getLetterMap())

function getLetterMap() {
  let myLetterMap = {}
  for (let x = 1; x <= numTilesX; x++) {
    for (let y = 1; y <= numTilesY; y++) {
      myLetterMap[`${x},${y}`] = randomLetter()
    }
  }
  return myLetterMap
}

function randomLetter() {
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  return letters.charAt(Math.floor(Math.random() * letters.length))
}
</script>
