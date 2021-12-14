<template>
  <HeaderNavigation/>
  <div class="content">
    <router-view/>
  </div>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import Footer from '@/components/Footer.vue';
import ErrorBoundary from '@/components/ErrorBoundary.vue'
import CategoryCards from '@/components/CategoryCards.vue'
import './assets/normalize.css';
import './assets/main-styles.scss';
import './assets/colors.scss';

  @Options({
    components: {
      HeaderNavigation,
      Footer,
      ErrorBoundary,
      CategoryCards
    }
  })
  
export default class App extends Vue {
}
</script>
