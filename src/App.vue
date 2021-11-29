<template>
<div class="app">
  <header-navigation/>
  <div class="main_content">
    <router-view></router-view>
  </div>
  <footer-slogan/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import headerNavigation from '@/components/header-nav.vue';
import footerSlogan from '@/components/footer-slogan.vue'

@Options({
  components: {
    headerNavigation,
    footerSlogan  
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
</style>
