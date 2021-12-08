<template>
  <div class="submit__btn" @click="clicked()">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'buttonSubmit',
  methods: {
    clicked() {
      alert('Click on the button');
    }
  }
}
</script>

<style lang="scss">
.submit__btn {
    background-color: rgb(75,221,75);
    border: 1px solid #393838;
    padding: 3px 4px;
    text-align: center;
    width: 12%;
    height: 50px;
    transition: 0.3s;
}
.submit__btn:hover {
  transform: scale(1.1);
  transition: 0.3s;
  cursor: pointer;
}
</style>
