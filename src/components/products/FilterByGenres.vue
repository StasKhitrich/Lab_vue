<template>
<div class="options__select">
  <p class="options__title" @click="areOptionsVisible = !areOptionsVisible">{{selected}}</p>
  <div class="options" v-if="areOptionsVisible">
    <li
    v-for="option in options"
    :key="option.id"
    class="options__item"
    @click="selectOption(option)"
    >
    {{option.genre}}
    </li>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilterByGenres',
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option); 
      this.areOptionsVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.options__select {
  cursor: pointer;
  max-width: 60%;
}
.options__title {
  text-align: center;
  margin: 6px auto;
  border: 1px solid white;
  max-width: 75%;
}
.options {
  border: 1px solid #FFFFFF;
  max-width: 80%;
  margin: 0 auto;
}
.options__item {
  margin: 0;
  padding: 5px 10px;
  list-style-type: none;
}
.options__item:hover {
    background-color: green;
}
</style>
