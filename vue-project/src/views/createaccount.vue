<template>
  <div class="rows">
    <h1>Create Account</h1>
    <input class="rowss" v-model="email" type="email" placeholder="Enter email" />

    <input class="rowss" v-model="password" type="password" placeholder="Create password" />

    <input class="rowss" v-model="password" type="password" placeholder="Confirm password" />
    
    <button class="rowss">Create Account</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.rows {
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.rowss {
  margin: 10px;
}
</style>
