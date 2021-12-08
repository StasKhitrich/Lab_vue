<template>
  <div class="profile__wrapper">
    <div class="profile__content">
      <h1 class="profile__content-welcome">
        Welcome
        <span class="profile__content-welcome__name">
          {{userData.firstname}} {{userData.lastname}}!
        </span>
      </h1>
      <div class="profile__content-userinfo">
        <h3>
          Your id:
          <span class="profile__content-userinfo__data">{{userData.id}}</span>
        </h3>
        <h3>
          Your role:
          <span class="profile__content-userinfo__data">{{userData.role}}</span>
        </h3>
        <h3>
          Your email:
          <span class="profile__content-userinfo__data">{{userData.email}}</span>
        </h3>
        <h3>
          Your password:
          <span class="profile__content-userinfo__data">{{userData.password}}</span>
        </h3>
        <h3>
          Sex: 
          <span class="profile__content-userinfo__data">{{userData.sex}}</span>
        </h3>
        <h3>
          Address: 
          <span class="profile__content-userinfo__data">{{userData.address}}</span>
        </h3>
        <h3>
          Shipping address:
          <span class="profile__content-userinfo__data">{{userData.shippingaddress}}</span>
        </h3>
        <h3>
          Payment card: 
          <span class="profile__content-userinfo__data">{{userData.paymentcard}}</span>
        </h3>
        <div class="user__actions">
          <h3 class="user__actions-headline">User Settings</h3>
          <div class="user__actions-item">
            <button class="user__actions-item--changepassword" 
            @click="changePassword">Change Password</button>
            <alertModal title="Change Password"
            changePasswordActive dataInfoActive="false" 
            class="modpw" v-if="!hideModalPassword"/>
          </div>
        </div>
      </div>
      <alertModal title="Data successfully updated!"
      class="mod" v-if="!hideModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import * as userInfo from '../../constants/user';
import alertModal from '../../elements/alertModal.vue';
import IUser from '../../interfaces/userInterface';

export default {
  name: 'Profile',
  components: {
    alertModal
  },
  data() {
    return {
      userData: {} as IUser,
      hideModal: true,
      hideModalPassword: true
    }
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
    changePassword() {
      this.hideModalPassword = false;
    }
  }
}
</script>

<style lang="scss">
body {
    color: white;
}
.mod {
  position: absolute;
  top: 25%;
}
.modpw {
  position: absolute;
  top: 45%;
  left: 20%;
}
.profile__wrapper {
  background-color: #000000;
}
.profile__content {
  border: 1px solid lawngreen;
  max-width: 60%;
  margin: 0 auto;
  padding: 10px;
}
.profile__content-welcome {
  text-align: center;
  padding-bottom: 6px;
  margin: 0 auto;
}
.profile__content-welcome__name {
  border-bottom: 2px solid white;
  padding-bottom: 5px;
}
.profile__content-userinfo {
  text-align: left;
  margin: 15px auto;
  max-width: 40%;
}
.profile__content-userinfo__data {
  border-bottom: 2px solid lawngreen;
  padding-bottom: 1px;
}
.profile__content-userinfo--about {
  margin-top: 15px;
}
.profile__content-userinfo-textinp {
  resize: none;
  max-width: 100%;
  padding: 4px;
}
.profile__content-userinfo-submit {
  padding: 5px 15px;
}
.user__actions {
  border: 1px solid lawngreen;
  margin-top: 10px;
}
.user__actions-headline {
  padding: 5px;
  text-align: center;
}
.user__actions-item {
  border: 1px solid green;
  padding: 6px;
}
.user__actions-item--changepassword {
  padding: 5px 15px;
}
.hidden {
  display: none !important;
}
.hiddenpw {
  display: none !important;
}
</style>
