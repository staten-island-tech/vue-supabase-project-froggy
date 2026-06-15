<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" type="email" placeholder="Enter email" />

    <input v-model="password" type="password" placeholder="Enter password" />

    <button @click="loginUser">Login</button>
  </div>
</template>

<script>
import { supabase } from '@/supabase'

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
      const { data, error } = await supabase.auth.signInWithPassword({
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
