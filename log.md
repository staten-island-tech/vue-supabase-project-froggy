how to make button switch back n forth using v-if and v-else
<template>

  <div>
    <!-- First Button -->
    <button v-if="isFirstButton" @click="toggleButtons">
      Button A
    </button>

    <!-- Second Button -->
    <button v-else @click="toggleButtons">
      Button B
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Tracks which button to show
const isFirstButton = ref(true)

// Toggles the state
const toggleButtons = () => {
  isFirstButton.value = !isFirstButton.value
}
</script>

how to have multiple events occure at once in vue js

In Vue.js, you can trigger multiple actions when a click happens in a few different ways, depending on whether you want them in one method or separate methods.

1️⃣ Call Multiple Methods in the Template
You can directly call multiple methods in the @click handler by separating them with semicolons.

Vue

Copy code
<template>
<button @click="firstAction(); secondAction()">Click Me</button>
</template>

<script>
export default {
  methods: {
    firstAction() {
      console.log("First action triggered");
    },
    secondAction() {
      console.log("Second action triggered");
    }
  }
};
</script>
