<template>
  <div class="cartempty__wrapper">
    <div class="cartempty">
      <h1>Cart is empty!</h1>
      <h2><router-link to="/products">Go to store</router-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartEmpty'
}
</script>

<style lang="scss" scoped>
.cartempty__wrapper {
  text-align: center;
}
</style>
