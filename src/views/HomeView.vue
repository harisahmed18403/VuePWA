<template>
  <SidebarMenu>
    <div class="flex flex-col items-center gap-y-2 justify-center">
      <p>Wordsearch Size:</p>
      <div class="flex gap-x-4 items-center">
        <button class="btn-small" @click="numTilesX--">-</button>
        <p>X:</p>
        <input
          type="number"
          class="bg-transparent border-none text-center text-primary-text max-w-8"
          v-model.number="numTilesX"
        />
        <button class="btn-small" @click="numTilesX++">+</button>
      </div>

      <div class="flex gap-x-4 items-center">
        <button class="btn-small" @click="numTilesY--">-</button>
        <p>Y:</p>
        <input
          type="number"
          class="bg-transparent border-none text-center text-primary-text max-w-8"
          v-model.number="numTilesY"
        />
        <button class="btn-small" @click="numTilesY++">+</button>
      </div>
    </div>
  </SidebarMenu>
  <main class="flex flex-col gap-y-4 items-center">
    <h1>{{ word.toUpperCase() }}</h1>

    <TileMap
      :word="word"
      :numTilesX="numTilesX"
      :numTilesY="numTilesY"
      :letterMap="getLetterMap()"
    />
  </main>
</template>

<script setup>
import TileMap from '@/components/Wordsearch/TileMap.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import { ref, onMounted } from 'vue'

const wordUrl = 'https://random-word-api.herokuapp.com/word'

const word = ref('')
const numTilesX = ref(10)
const numTilesY = ref(10)

onMounted(async () => {
  await fetchWord()
})

function getLetterMap() {
  let myLetterMap = {}
  // Fill with random letters
  for (let x = 0; x < numTilesX.value; x++) {
    for (let y = 0; y < numTilesY.value; y++) {
      myLetterMap[`${x},${y}`] = randomLetter()
    }
  }

  let wordLen = word.value.length

  let startX = randomInt(4, numTilesX.value - wordLen - 1)
  let startY = randomInt(0, numTilesY.value)

  for (let i = 0; i < wordLen; i++) {
    myLetterMap[`${startX},${startY}`] = word.value.charAt(i) + '?'
    startX++
  }

  return myLetterMap
}

async function fetchWord() {
  let wordLen = randomInt(4, Math.min(numTilesX.value, numTilesY.value))
  try {
    const response = await fetch(wordUrl + `?length=${wordLen}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    word.value = json[0]
  } catch (error) {
    console.error(error.message)
  }
}

function randomLetter() {
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  return letters.charAt(Math.floor(Math.random() * letters.length))
}

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
