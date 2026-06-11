<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'
const profile = ref([])
const error = ref(null)
onMounted(async () => {
  let { data: profileData, error: err } = await supabase.from('profile').select('*')
  if (err) {
    error.value = err.message
  } else {
    profile.value = profileData
  }
})
</script>

<style scoped></style>
