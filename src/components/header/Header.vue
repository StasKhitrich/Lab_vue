<template>
    <div class="header">
    <teleport to="#modals-portal">
      <Login v-if="showLogModal" @close="closeModal" />
      <Registration v-if="showRegModal" @close="closeModal" />
    </teleport>
    <teleport to="#loader-portal">
      <Loader v-if="showLoading" />
    </teleport>
     <h1 class="header__headline">Game Store</h1>
        <div class="header__nav">
            <div class="header__nav-item">
                <router-link to="/" class="header__nav-item--home">Home</router-link>
            </div>
            <div class="header__nav-item header_nav_item_products">
                <div class="products__link">
                    <router-link to="/products" 
                    class="products__link-item header__nav-item--products">
                        Products
                    </router-link>
                </div>
                <div class="products__dropdown-wrapper">
                    <ul class="products__dropdown">
                      <li class="products__dropdown-item">Placeholder</li>
                    </ul>
                </div>
            </div>
            <div class="header__nav-item">
                <router-link to="/cart" class="header__nav-item--link">
                Cart: {{ cartItemCount }}</router-link>
            </div>
            <div v-if="isAdmin" class="header__nav-item">
              <router-link to="/admin" class="header__nav-item--link">Admin</router-link>
            </div>
            <div class="header__nav-item" v-if="!authInactive">
              <a class="header__nav-item--link" @click="showLoginModal">Sign In</a>
            </div>
            <div class="header__nav-item" v-if="!authInactive">
              <a class="header__nav-item--link" @click="showRegistrationModal">Sign Up</a>
            </div>
            <div class="header__nav-item" v-if="authInactive">
              <router-link to="/profile" class="header__nav-item--link">{{ username }}</router-link>
            </div>
            <div class="header__nav-item" v-if="authInactive">
              <a class="header__nav-item--link" @click="logout()">Logout</a>
            </div>
          </div>
        </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Login from '../users/Login.vue';
import Registration from '../users/Registration.vue';
import Loader from '../Loader.vue';
import * as userInfo from '../../constants/user';

export default {
  name: 'Header',
  components: {
    Login,
    Registration,
    Loader
  },
  data() {
    return {
      products: [],
      showRegModal: false,
      showLogModal: false,
      authInactive: false,
      username: ''
    }
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      cartItemCount: (state) => state.cartItemCount,
      loggedUser: (state) => state.user.loggedUser
    }),
    isAdmin() {
      return this.loggedUser.role === 'admin';
    }
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))

    const user = localStorage.getItem(userInfo);
    const userparsed = JSON.parse(user);
    this.username = userparsed.firstname;
    if (user) {
      this.authInactive = !this.authInactive;
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    showLoginModal() {
      if (!this.showLogModal) {
        this.showLogModal = !this.showLogModal;
      }
    },
    showRegistrationModal() {
      if (!this.showRegModal) {
        this.showRegModal = !this.showRegModal;
      }
    },
    closeModal() {
      if (this.showLogModal) {
        this.showLogModal = !this.showLogModal;
      }
      if (this.showRegModal) {
        this.showRegModal = !this.showRegModal;
      }
    }
  }
}
</script>

<style lang="scss">
.hide {
  display: none !important;
}
.header {
  background-color: #222222;
  color: #fff2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0;
}
.header__headline {
  margin-left: 40px;
}
.header__nav {
  display: flex;
  width: 40%;
  height: 100%;
  justify-content: center;
}
.header__nav-item {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  transition: 0.3s;
  border-bottom: 5px solid transparent;
  cursor: pointer;
}
.header__nav-item--home {
  text-decoration: none;
  color: #fff2f2;
}
.header__nav-item--link{
  text-decoration: none;
  color: #fff2f2;
  cursor: pointer;
}
.header__nav-item:hover {
  border-bottom: 5px solid rgb(75, 221, 75);
  background-color: #393838;
  transition: 0.3s;
}
.header__nav-item--products {
   padding: 0;
   &::after {
   content: '';
   width: 0;
   height: 0;
   border: 5px solid transparent;
   border-top-color: #fff2f2;
   position: relative;
   top: 16px;
   left: 7px;
   }
}
.products__link {
  margin-top: 0px;
}
.products__link-item {
  text-decoration: none;
  color: #fff2f2;
}
.products__dropdown-wrapper {
  display: none;
  position: absolute;
  top: 80px;
  margin-left: 0px;
}
 .products__dropdown {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #393838;
  padding: 0 20px;
  padding-bottom: 25px;
  text-align: left;
  font-size: 15px;
}
.header_nav_item_products:hover {
  .products__dropdown-wrapper {
    display: block;
  }
}
.products__dropdown-item {
  margin-top: 25px;
  background-color: rgb(75, 221, 75);
  padding: 10px;
  transition: 0.3s;
}
.products__dropdown-item:hover {
  transition: 0.3s;
  background-color: #f7e13e;
}
.products__dropdown-item:hover .products__dropdown-item--link {
  color: #393838;
  transition: 0.3s;
}
.products__dropdown-item--link {
  text-decoration: none;
  padding: 5px 20px;
  color: #fff2f2;
  transition: 0.3s;
}
</style>
