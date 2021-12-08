<template>
 <div>
  <input :type="inputType" 
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  @change="$emit('update:modelValue', $event.target.value)"
  :checked="value === modelValue"
  class="user-input"
  v-maska="mask"
  />
 </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    inputType: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password', 'radio', 'number', 'submit'].includes(value);
      }
    },
    modelValue: {
      type: String, 
      default: null
    },
    value: {
      type: String, 
      default: null
    },
    mask: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.user-input {
  width: 100%;
}
</style>
