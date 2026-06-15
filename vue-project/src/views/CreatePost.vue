<!-- <template>
  <form @submit.prevent="ok" id="icoding">
    <input v-model="picture" id="image" type="text" placeholder="Image URL" required />
    <textarea v-model="description" id="deez" placeholder="Description"></textarea>
    <button type="submit">Submit</button>
  </form>

</template>
<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'

// 1. Reactive state for the form inputs
const picture = ref('')
const description = ref('')

const ok = async () => {
  const  {data, error} = await supabase.from('posts').insert([
    {

  
    image: picture.value,
    caption: description.value,
  
  }
])
if (error) {
  console.log(error);
  alert('Post Failed to Create')
} else {
  alert('Post SUccessfully Created')
  console.log(data)
}
}
</script>

 -->
<template>
  <form @submit.prevent="ok" id="icoding">
    <input v-model="picture" id="image" type="text" placeholder="Image URL" required />
    <textarea v-model="description" id="deez" placeholder="Description"></textarea>
    <button type="submit">Submit</button>
  </form>

  <div class="gallery-container">
    <div v-for="(item, index) in gallery" :key="index" class="container">
      <div class="picture">
        <img :src="item.picture" alt="Gallery image" />
      </div>
      <div class="description">
        <p>{{ item.description }}</p>
      </div>
      <button class="bigger">{{ item.button }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

// 1. Reactive state for the form inputs
const picture = ref('')
const description = ref('')

const ok = async () => {
  const { data, error } = await supabase.from('posts').insert([
    {
      image: picture.value,
      caption: description.value,
    }
  ])

  if (error) {
    console.log(error)
    alert('Post Failed to Create')
  } else {
    alert('Post SUccessfully Created')
    console.log(data)
  }
}
</script>