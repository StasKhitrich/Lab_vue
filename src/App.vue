<template>    
  <TheHeader/>  
  <div id="content">  
    <router-view></router-view>        
  </div>
  <TheFooter/>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

@Options({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class App extends Vue {
  
}
</script>
