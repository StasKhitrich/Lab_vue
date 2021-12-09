<template>
  <slot></slot>
  <Alert v-if="err" :isError="true" :message="this.info"/>
  <Alert v-else :isSuccess="true"/>   
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Alert from './Alert.vue'

@Options({
  components: {
    Alert
  },
})

export default class ErrorBoundary extends Vue {
  err = false;
  vm = null;
  info = null;

  errorCaptured(err, vm, info) {
    this.err = err;
    this.vm = vm;
    this.info = info;

    return false;
  }
}
</script>

<style lang="scss" scoped>

</style>
