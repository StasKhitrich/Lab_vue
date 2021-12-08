<template>
  <div class="wrapper">
      <h1>Error!</h1>
      <h2>Page not found!</h2>
      <router-link :to="{name: 'Home'}">Back to Home!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  color: white;
}
</style>
