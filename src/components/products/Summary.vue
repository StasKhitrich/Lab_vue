<template>
  <div class="summary">
    <h1 class="summary-total">Total: {{ totalPrice }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    totalPrice: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
.summary {
  border: 1px solid green;
}
.summary-total {
  border-bottom: 2px solid white;
  padding: 5px;
}
</style>
