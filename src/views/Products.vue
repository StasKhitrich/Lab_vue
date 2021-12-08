<template>
  <div class="wrapper">
    <h1 class="headline">Available Games In Store</h1>
    <div>
      <products-list />
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/products/ProductsList.vue';

export default {
  name: 'About',
  components: {
    ProductsList
  }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
.wrapper {
  background: url("https://wallpaperaccess.com/full/1188236.jpg");
  height: 100%;
}
.headline {
  color: white;
  text-align: center;
  padding-top: 10px;
}
</style>
