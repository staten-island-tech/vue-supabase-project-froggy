<template>
  <div>
    <form action="submit" @submit.prevent="login(user)">
      <label for="username">Username</label>
      <input type="text" v-model="user.username" />
      <label for="password">Password</label>
      <input type="password" v-model="user.password" />
      <button type="submit">Login</button>
    </form>
    <h2 v-if="loggedIn">Welcome {{ user.username }}</h2>
    <h2 v-else>Please Login</h2>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const user = reactive({ username: '', password: '' })
const loggedIn = ref(false)
function login(user) {
  console.log(user)
  loggedIn.value = true
}
</script>

<style scoped></style>
