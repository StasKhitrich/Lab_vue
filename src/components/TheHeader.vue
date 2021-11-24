<template>
  <div id="header">
    <router-link id="logo" to="/">Game Store</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class TheHeader extends Vue {
    
}
</script>
