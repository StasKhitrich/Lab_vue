<template>
  <div class="section">
    <div class="section__header">
      {{headerName}}
    </div>
    <div class="section__content">
      <slot class="section__content__slot"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    headerName: {
      type: String,
      required: true
    }
  }
})

export default class Section extends Vue {
    
}
</script>

<style lang="scss" scoped>
.section {
  background-color: $section-bg;
  width: 60%;
  margin: 1% auto;
  border-radius: 40px;
  padding: 1% 0 3%;

  &__header {
    font-size: 1.5em;
    padding-left: 1em;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid $color-black;
  }
  
  &__content {
    width: 100%;
    margin: 1em auto 0;
  }
}
</style>
