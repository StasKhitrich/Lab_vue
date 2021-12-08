<template>
  <div class="input_text">
    <h3>Enter Your Name:</h3>
      <div :class="{ invalid_msg_input: isValid}" class="valid_msg_input">
        <h6 class="valid_msg_input-name">Name</h6>
          <div class="valid_msg_input-form">
             <input type="text" @input="validateName(this.name)" v-model="name"
              placeholder="Your Name" name="name" class="text_inp" required>
             <button @click="removetext()" v-if="name != ''" class="remove_text">x</button>
          </div>
        </div>
       <p :class="{invalid_msg: isValid}" class="valid_msg" v-if="msg.name">{{msg.name}}</p>
       <p class="invalid_msg" v-else>Enter a name</p>
  </div>
</template>

<script>
export default {
  name: 'inputText',
  data() {
    return {
      name: '',
      msg: [],
      isValid: true
    }
  },
  methods: {
    validateName(value) {
      const difference = 8 - value.length;
      const overdifference = value.length - 8;
      if (value.length < 8) {
        this.msg.name = `Must be 8 characters! ${difference} characters left`;
        this.isValid = true;
      } else if (value.length === 8) {
        this.msg.name = 'OK';
        this.isValid = false;
      } else {
        this.msg.name = `More than 8! ${overdifference} more than needed`;
      }
    },
    removetext() {
      this.name = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.input_text {
  border: 2px solid #393838;
  width: 300px;
  padding: 20px;
}
.input_text .valid_msg_input {
  margin-top: 10px;
  padding: 0;
}
.input_text .valid_msg_input .valid_msg_input-name {
  margin: 6px 0px 0px 6px;
}
.text_inp {
  background-color: #f2f2f2;
  height: 30px;
  width: 190px;
  border-radius: 3px;
  border: 0px;
  padding: 5px 15px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.06);
  outline: none;
}
.invalid_msg {
  color: #df3939 !important;
}
.valid_msg {
  color: rgb(75,221,75);
}
.invalid_msg_input {
  border: 2px solid #df3939 !important;
  width: 230px !important;
  border-radius: 4px;
}
.valid_msg_input {
  border: 2px solid rgb(75,221,75);
  width: 230px;
  border-radius: 4px;
}
.valid_msg_input-form {
  display: flex;
}
.valid_msg {
  color: rgb(75,221,75);
}
.remove_text {
  outline: none;
  border: none;
  width: 30px;
}
</style>
