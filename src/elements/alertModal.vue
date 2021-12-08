<template>
  <div class="alert__modal" :class="{inactive: isClosed}">
    <div class="alert__modal-headline"><h1>{{ title }}</h1></div>
    <div class="alert__modal-changepassword" :class="{changePWActive: changePasswordActive}">
      <h1>Enter new password:</h1>
      <Input
       class="alert__modal-changepassword--input" 
       v-model="userData.password"
       placeholder="New password" />
      <div @click="addData" class="accept__btn"><h3>Confirm</h3></div>
    </div>
    <div>
      <div class="alert__modal-btns" :class="{dataInfoInactive: dataInfoActive}">
        <div @click="closeModal" class="accept__btn"><h3>Confirm</h3></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import * as userInfo from '../constants/user';
import Input from './Input.vue';
import IUser from '../interfaces/userInterface';

export default {
  name: 'alertModal',
  data() {
    return {
      userData: {} as IUser,
      isClosed: false,
    }
  },
  components: {
    Input
  },
  props: {
    title: String,
    subtitle: String,
    changePasswordActive: Boolean,
    dataInfoActive: Boolean
  },
  mounted() {
    const user = localStorage.getItem(userInfo as any);
    const userparsed = JSON.parse(user as any);
    this.userData = { ...this.userData, ...userparsed }
    this.$store.dispatch('saveUserName', this.userData);
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  },
  methods: {
    closeModal() {
      this.isClosed = true;
      this.$router.go();
    },
    async addData() {
      const result = await axios.put(`http://localhost:3000/users/${this.userData.id}`, {
        id: this.userData.id,
        role: this.userData.role,
        firstname: this.userData.firstname,
        lastname: this.userData.lastname,
        sex: this.userData.sex,
        address: this.userData.address,
        shippingaddress: this.userData.shippingaddress,
        paymentcard: this.userData.paymentcard,
        email: this.userData.email,
        password: this.userData.password,
        aboutUser: this.userData.aboutUser
      });
      if (result.status === 200) {
        localStorage.setItem(userInfo as any, JSON.stringify(result.data));
        this.closeModal();
      }
    },
  }
}
</script>

<style lang="scss">
.alert__modal {
    background-color: #181818;
    min-height: 30%;
    min-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 3px;
    color: #fff2f2;
    z-index: 4;
    border: 1px solid green;
    position: relative;
}
.alert__modal-headline {
    margin-left: 30px;
}
.alert__modal-btns {
    display: flex;
    justify-content: space-evenly;
    min-width: 50%;
}
.accept__btn {
    background-color: rgb(75,221,75);
    color: #fff2f2;
    transition: 0.4s;
    margin: 0 40px;
    min-width: 50%;
    padding: 6px 12px;
    border-radius: 3px;
    text-align: center;
}
.accept__btn:hover {
    transform: scale(1.1);
    transition: 0.4s;
    cursor: pointer;
}
.inactive {
    display: none !important;
    background: red;
}
.alert__modal-changepassword {
  display: none;
}
.alert__modal-changepassword--input {
  margin: 10px;
}
.changePWActive {
  display: block !important;
}
.dataInfoInactive {
  display: none !important;
}
</style>
