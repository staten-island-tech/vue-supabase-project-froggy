<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'
const profiles = ref([])
const error = ref(null)
onMounted(async () => {
  let { data: profileData, error: err } = await supabase.from('profiles').select('*')
  if (err) {
    error.value = err.message
  } else {
    profiles.value = profileData
  }
})
</script>

<style scoped></style>
