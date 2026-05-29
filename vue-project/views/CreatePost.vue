<script setup>
import { ref } from 'vue';

// 1. Reactive state for the form inputs
const title = ref('');
const picture = ref('');
const description = ref('');

// hold items gallery items
const gallery = ref([]);

// 3. Handle form submission
const handleSubmit = () => {
  // Create the new object
  const newWork = {
    title: title.value,
    picture: picture.value,
    description: description.value,
    button: "more",
  };

  gallery.value.unshift(newWork);

  title.value = '';
  picture.value = '';
  description.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" id="icoding">
    <input v-model="title" id="tital" type="text" placeholder="Title" required />
    <input v-model="picture" id="image" type="text" placeholder="Image URL" required />
    <textarea v-model="description" id="deez" placeholder="Description"></textarea>
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
      <button class="bigger">{{ item.button }}</button>
    </div>
  </div>
</template>
