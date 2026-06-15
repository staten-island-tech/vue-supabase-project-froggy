

<template>
  <div style="max-width: 350px; margin: auto;">
    <h1>Login</h1>

    <input
      v-model="email"
      type="email"
      placeholder="Enter Email"
      style="display:block; width:100%; margin-bottom:10px;"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Enter Password"
      style="display:block; width:100%; margin-bottom:10px;"
    />

    <button
      @click="login"
      :disabled="loading"
      style="width:100%;"
    >
      {{ 'Login' }}
    </button>

    <p
      v-if="message"
      style="margin-top:12px; color:red;"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase.js';

const router = useRouter();

const email = ref('');
const password = ref('');
const message = ref('');
const loading = ref(false);


async function login() {
  message.value = '';

  if (!email.value || !password.value) {
    message.value = 'Email and password are required.';
    return;
  }

  loading.value = true;

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (error) {
      message.value = error.message;
      return;
    }

    router.push('/2');

  } catch (err) {
    console.error(err);
    message.value = 'Unexpected error occurred.';
  } finally {
    loading.value = false;
  }
}
</script>