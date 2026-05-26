<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'
const post = ref([])
const error = ref(null)
onMounted(async () => {
  let { data: postData, error: err } = await supabase.from('post').select('*')
  if (err) {
    error.value = err.message
  } else {
    post.value = postData
  }
})
</script>

<style scoped></style>
