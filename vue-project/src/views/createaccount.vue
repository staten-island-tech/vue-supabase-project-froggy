<template>
  <div class="rows">
    <h1>Create Account</h1>
    <input class="rowss" v-model="email" type="email" placeholder="Enter email" />

    <input class="rowss" v-model="password" type="password" placeholder="Create password" />

    <input class="rowss" v-model="password" type="password" placeholder="Confirm password" />

    <button class="rowss">Create Account</button>
  </div>
</template>

<script setup></script>

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

<!-- <template>
    <div>
<form action="submit"></form> @submit.prevent="login(user)">
    <label for="username">Username</label>
    <input type="text" v-model=" user.username" />
     <label for="password">Password</label>
    <input type="password" v-model=" user.password"/>
    <button type="submit">Login</button>
    <h2 v-if="Logged In"></h2>
   <h2 v-else="Log In"></h2>

    </div>
</template>

<script setup>
const loggedIn= ref(false)
function login(user){
    console.log(user)
    loggedIn.value=true
}

<div v-if="type === 'true'">
  Logged In

 v-else-if="type === 'false'"
  Log In
</div>


import { reactive, ref } from 'vue'
const user= reactive({username: '', password:''})

</script>
<style lang="scss">  </style>

<style lang="scss" scoped></style> -->
