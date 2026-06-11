const axios = require('axios');

const createPinUrl = `https://api.pinterest.com/v1/pins/?access_token=ACCESS_TOKEN`;
const data = {
  board: 'BOARD_NAME',
  note: 'PIN_DESCRIPTION',
  link: 'PIN_URL',
  image_url: 'IMAGE_URL',
};

axios.post(createPinUrl, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  <template>
  <div class="pin-creator">
    <h3>Create a Pinterest Pin</h3>
    <button @click="createNewPin" :disabled="isLoading">
      {{ isLoading ? 'Creating...' : 'Create Pin' }}
    </button>
    <p v-if="message" :class="{ error: isError }">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isLoading = ref(false);
const message = ref('');
const isError = ref(false);

const createNewPin = async () => {
  isLoading.value = true;
  message.value = '';
  isError.value = false;

  const createPinUrl = 'https://pinterest.com';
  const ACCESS_TOKEN = 'YOUR_PINTEREST_ACCESS_TOKEN'; // VUE VERSION
  const pinPayload = {
    board_id: 'YOUR_BOARD_ID',
    title: 'My Vue Pin',
    description: 'Created using Vue 3 and Axios',
    link: 'https://example.com',
    media_source: {
      source_type: 'image_url',
      content_type: 'image/jpeg',
      url: 'https://example.com'
    }
  };

  const config = {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.post(createPinUrl, pinPayload, config);
    message.value = 'Pin created successfully!';
    console.log(response.data);
  } catch (error) {
    isError.value = true;
    if (error.response) {
      message.value = `Failed: ${error.response.data.message || error.response.status}`;
    } else {
      message.value = `Network error: ${error.message}`;
    }
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
</style>
