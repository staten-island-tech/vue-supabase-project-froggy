<!-- <template>
    <div>
<form action="submit"></form> @submit.prevent="login(user)">
    <label for="username">Username</label>
    <input type="text" v-model=" user.username" />
     <label for="password">Password</label>
    <input type="password" v-model=" user.password"/>
    <button type="submit">Login</button>
    <h2 v-if="Logged In"></h2>
   <h2 v-else="Log In"></h2>

    </div>
</template>

<script setup>
const loggedIn= ref(false)
function login(user){
    console.log(user)
    loggedIn.value=true
}

<div v-if="type === 'true'">
  Logged In

 v-else-if="type === 'false'"
  Log In
</div>


import { reactive, ref } from 'vue'
const user= reactive({username: '', password:''})

</script>
<style lang="scss">  </style>

<style lang="scss" scoped></style> -->

<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" type="email" placeholder="Enter email" />

    <input v-model="password" type="password" placeholder="Enter password" />

    <button @click="loginUser">Login</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { SupabaseClient } from '@supabase/supabase-js'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    }
  },

  methods: {
    async loginUser() {
      const { data, error } = await SupabaseClient.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      })

      if (error) {
        this.message = error.message
      } else {
        this.message = 'Login successful!'
        console.log(data)
      }
    },
  },
}
</script>
