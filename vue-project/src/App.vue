<script setup></script>

<template>
  <button class="chicken">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
  </button>
  <div class="butt"><RouterView /></div>

  <p></p>
</template>

<style scoped>
.chicken {
  background-color: transparent;
  border: none;
  position: fixed;
  top: 0;
  left: 0;

  transform: scale(0.15);
  transform-origin: top left;
}
.butt{
  margin-top: 100px;
}
</style>
