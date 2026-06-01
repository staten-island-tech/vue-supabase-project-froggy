<template>
  <div class="container">
    <h1>followers</h1>
    <h2>{{ count }}</h2>

    <button v-if="following" @click="(toggleButtons(), onfollow())">follow</button>
    <button v-else @click="(toggleButtons(), onunfollow())">unfollow</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const following = ref(true)

const toggleButtons = () => {
  following.value = !following.value
}

function onfollow() {
  count.value++
}
function onunfollow() {
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
