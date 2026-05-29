<template>
  <div class="container">
    <h1>followers</h1>
    <h2>{{ count }}</h2>

    <button v-if="count.value === 0" @click="tofollow">follow</button>
    <button v-else @click="tounfollow">unfollow</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function tofollow() {
  count.value++
}
function tounfollow() {
  count.value--
}

//swap unfollow and follow upon click
//if follow = true
//then show unfollow and count +1
//else show follow and count = count
</script>

<style scoped>
img {
  width: 200px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
}
</style>
