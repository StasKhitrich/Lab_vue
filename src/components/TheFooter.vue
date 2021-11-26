<template>
  <div id="footer">
    Increddible Convenient
    <TheFooterIcons/>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import TheFooterIcons from '@/components/TheFooterIcons.vue';

@Options({
  components: {
    TheFooterIcons
  }
})
export default class TheFooter extends Vue {
    
}
</script>
