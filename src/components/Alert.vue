<template>
    <div class="alert" 
    :class="{'alert-warning': hasWarning, 
    'alert-info': hasInfo, 
    'alert-error': hasError, 
    'alert-success': hasSuccess}" 
    role="alert">
        This is a primary alert—check it out!
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

  @Options({
  })

export default class App extends Vue {
    hasWarning = false;
    hasInfo = false;
    hasError = false;
    hasSuccess = false;
}
</script>

<style lang="scss" scoped>

</style>
