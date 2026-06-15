

<template>
  
  <form @submit.prevent="handleSubmit" id="icoding" style="max-width: 350px; margin: auto;">
    <h1>Create Post</h1>
    <input v-model="title" id="tital" type="text" placeholder="Title" style="display:block; width:100%; margin-bottom:10px;" required />
    <input v-model="picture" id="image" type="url" placeholder="Image URL" style="display:block; width:100%; margin-bottom:10px;" required />
    <textarea v-model="description" id="deez" placeholder="Description" style="display:block; width:100%; margin-bottom:10px; "></textarea>
    <button type="submit">Submit</button>
  </form>

  <div class="gallery-container">
    <div v-for="(item, index) in gallery" :key="index" class="container">
      <div class="picture">
        <img :src="item.picture" alt="Gallery image" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="description">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 1. Reactive state for the form inputs
const title = ref('')
const picture = ref('')
const description = ref('')

// hold items gallery items
const gallery = ref([])

// 3. Handle form submission
const handleSubmit = () => {
  // Create the new object
  const newWork = {
    title: title.value,
    picture: picture.value,
    description: description.value,
    button: 'more',
  }

  gallery.value.unshift(newWork)

  title.value = ''
  picture.value = ''
  description.value = ''
}
</script>
