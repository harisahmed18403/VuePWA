<template>
  <main class="flex flex-col gap-y-4 items-center">
    <h1>Word Search</h1>
    <div class="flex gap-x-4 items-center justify-between">
      <button class="btn" @click="numTilesX--">-</button>
      <h2>X:</h2>
      <input
        type="number"
        class="bg-transparent border-none text-center text-xl text-primary-text max-w-8"
        v-model.number="numTilesX"
      />
      <button class="btn" @click="numTilesX++">+</button>
    </div>

    <div class="flex gap-x-4 items-center">
      <button class="btn" @click="numTilesY--">-</button>
      <h2>Y:</h2>
      <input
        type="number"
        class="bg-transparent border-none text-center text-xl text-primary-text max-w-8"
        v-model.number="numTilesY"
      />
      <button class="btn" @click="numTilesY++">+</button>
    </div>

    <div>
      <TileMap :numTilesX="numTilesX" :numTilesY="numTilesY" />
    </div>
  </main>
</template>

<script setup>
import TileMap from '@/components/Wordsearch/TileMap.vue'
import { ref } from 'vue'

const numTilesX = ref(10)
const numTilesY = ref(10)
</script>
