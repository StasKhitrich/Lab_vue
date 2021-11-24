<template>    
  <TheHeader/>  
  <router-view></router-view>  
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';

@Options({
  components: {
    TheHeader
  }
})
export default class App extends Vue {
  
}
</script>
