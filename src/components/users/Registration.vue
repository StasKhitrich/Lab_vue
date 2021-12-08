<template>
<div>
    <div class="api__section">
        <div class="form__header">
          <h2>Sign Up</h2>
          <button class="form__header-btn" @click="$emit('close')">x</button>
        </div>
         <form @submit.prevent="signUp">
          <div class="api__section-item">
          <label for="firstname">First name:</label>
          <Input id="firstname" inputType="text" v-model:modelValue="userRegData.firstname" />
         </div>
         <div class="api__section-item">
          <label for="lastname">Last name:</label>
          <Input id="lastname" inputType="text" v-model:modelValue="userRegData.lastname" />
         </div>
         <div class="api__section-item">
           <p>Sex: </p>
            <input type="radio" id="male" value="Male" v-model="userRegData.sex" />
            <label for="one">Male</label>
            <br>
            <input type="radio" id="female" value="Female" v-model="userRegData.sex" />
            <label for="two">Female</label>
            <br>
         </div>
         <div class="api__section-item">
           <label for="address">Address:</label>
           <Input id="address" inputType="text" v-model:modelValue="userRegData.address" />
         </div>
          <div class="api__section-item">
           <label for="shippingaddress">Shipping Address:</label>
           <Input id="shippingaddress" inputType="text" 
            v-model:modelValue="userRegData.shippingaddress" />
         </div>
          <div class="api__section-item">
           <label for="paymentcard">Payment Card:</label>
           <Input id="paymentcard" inputType="number"
            v-model:modelValue="userRegData.paymentcard" />
         </div>
         <div class="api__section-item">
           <label for="email">Email: </label>
           <Input id="email" inputType="email" v-model:modelValue="userRegData.email" />
         </div>
         <div class="api__section-item">
           <label for="password">Password:</label>
           <Input id="password" v-model="userRegData.password" 
            :inputType="this.passwordFieldType" />
            <div class="toggle__password-hide" @click="switchVisibility"
              v-if="isPassword">
              <svg class="eyesvg" enable-background="new 0 0 24 24"
              height="24px" version="1.1"
              viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M12,4C4.063,4-0.012,12-0.012,12S3.063,20,12,20c8.093,0,12.011-7.969,12.011-7.969S20.062,4,12,4z M12.018,17c-2.902,0-5-2.188-5-5c0-2.813,2.098-5,5-5c2.902,0,5,2.187,5,5C17.018,14.812,14.92,17,12.018,17z M12.018,9c-1.658,0.003-3,1.393-3,3c0,1.606,1.342,3,3,3c1.658,0,3-1.395,3-3 C15.018,10.392,13.676,8.997,12.018,9z"
              fill-rule="evenodd"/></g></g></svg>
            </div>
            <div class="toggle__password-show" @click="switchVisibility"
              v-if="!isPassword">
              <svg class="eyesvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"/></svg>
            </div>
          </div>
        <div class="api__section-item">
          <Input inputType="submit" class="api__section-btn" modelValue="Confirm" />
        </div>
      </form>
    </div>
</div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import axios from 'axios';
import * as userInfo from '../../constants/user';
import IUser from '../../interfaces/userInterface';
import Input from '../../elements/Input.vue';

export default {
  name: 'Registration',
  data() {
    return {
      userRegData: {} as IUser,
      passwordFieldType: 'password'
    }
  },
  components: {
    Input
  },
  computed: {
    isPassword() {
      return this.passwordFieldType === 'password';
    }
  },
  methods: {
    ...mapMutations([
      'showLoadingSpinner'
    ]),
    async signUp() {
      this.showLoadingSpinner(true);
      const result = await axios.post('http://localhost:3000/users', {
        firstname: this.userRegData.firstname,
        lastname: this.userRegData.lastname,
        sex: this.userRegData.sex,
        address: this.userRegData.address,
        shippingaddress: this.userRegData.shippingaddress,
        paymentcard: this.userRegData.paymentcard,
        email: this.userRegData.email,
        password: this.userRegData.password
      });
      if (result.status === 201) {
        localStorage.setItem(userInfo as any, JSON.stringify(result.data));
        this.showLoadingSpinner(false);
        this.$router.go()
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  },
}
</script>

<style lang="scss" scoped>
.eyesvg {
  fill: white;
  stroke: white;
}
.hide {
  display: none;
}
pre {
  text-align: left;
}
.api__wrapper {
  color: white;
}
.preview {
  border: 1px solid white;
  padding: 12px;
  color: white;
}
.form__header {
  display: flex;
  justify-content: space-between;
}
.form__header-btn {
  padding: 5px 10px;
}
.api__wrapper {
  border: 1px solid white;
  padding: 15px;
  display: flex;
  flex-direction: row;
}
.api__section {
  display: block;
  border: 1px solid white;
  padding: 10px;
  margin: 0 10px;
  background-color: black;
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  margin: 0 30px;
  color: #FFFFFF;
  z-index: 4;
}
.api__section-item {
  margin: 10px 15px;
}
.api__section-btn {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
