<template>
<header-navigation/>
  <div class="main-content">
    <router-view></router-view>
  </div>
  <footer-slogan/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import headerNavigation from '@/components/header-nav.vue';
import footerSlogan from '@/components/footer-slogan.vue';

@Options({
  components: {
    headerNavigation,
    footerSlogan  
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
