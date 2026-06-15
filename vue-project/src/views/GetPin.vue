

<template>
  <div>
    <input 
v-model="pinId" placeholder="Enter a Pin ID"
 /> <button @click="fetchData">Search</button>
    <div id="api-response">
    <pre v-if="apiData">{{ apiData }}</pre>  
        <p v-else-if="error">{{ error }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
;

const 
pinId
 = ref("");

const apiData = ref("");
const error = ref("");

const fetchData = async () => {
error.value = "";

  apiData.value = "";

  const id = (pinId.value || "").trim();
  if (!id) {
    error.value = "Enter a Pin ID.";
    return;
  }
  try {
    const accessToken = "YOUR_ACCESS_TOKEN"

    const response = await fetch(`https://api.pinterest.com/v1/pins/${id}/?access_token=${accessToken}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
 }
    const data = await response.json()
;
apiData.value = JSON.stringify(data, null, 2);

  } catch (err) {
    console.error(err);
error.value = "Error loading pin.";

  }
}
;

</script>

<!-- rewritten js______>  vue -->
 