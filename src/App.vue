<template>
    <HeaderNavigation/>
    <div class="content">
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import Footer from '@/components/Footer.vue';
import './assets/normalize.css';
import './assets/main-styles.scss';
import './assets/colors.scss';

  @Options({
    components: {
      HeaderNavigation,
      Footer
    }
  })
export default class App extends Vue {

}
</script>
