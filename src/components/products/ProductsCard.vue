<template>
  <teleport to="#modals-portal">
    <Login v-if="showLogModal" @close="closeModal" />
    <Registration v-if="showRegModal" @close="closeModal" />
  </teleport>
  <div class='user-auth' v-if="showAuth">
    <h2>To order, please sign in or register:</h2>
     <div class="auth__nav-item">
       <button class="auth__nav-item--btn" @click="showLoginModal">Sign In</button>
     </div>
     <div class="auth__nav-item">
       <button class="auth__nav-item--btn" @click="showRegistrationModal">Sign Up</button>
     </div>
  </div>
  <div class="product__card-wrapper">
        <div class="product__card">
          <div class="front">
            <img class="product__card-img" :src="product.image" alt="Image Not Found" />
            <hr>
            <p>Title: {{ product.title }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Genre: {{ product.genre }}</p>
            <p>Rating: {{ product.rating }}</p>
          </div>
          <div class="back">
            <p>{{product.description}}</p>
            <Rating />
            <router-link :to="`/products/${product.id}`">
            <h3 class="product__card-pagelink">Open product page</h3>
            </router-link>
            <button @click="addToCart(product)" class="product__card-cartbtn">Add to cart</button>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Rating from '../../elements/rating.vue';
import * as userInfo from '../../constants/user';
import Login from '../users/Login.vue';
import Registration from '../users/Registration.vue';

export default {
  name: 'ProductsCard',
  components: {
    Rating,
    Login,
    Registration
  },
  data() {
    return {
      showRegModal: false,
      showLogModal: false,
      showAuth: false
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cartItems
    }),
  },
  methods: {
    showLoginModal() {
      if (!this.showLogModal) {
        this.showLogModal = !this.showLogModal;
        this.showAuth = !this.showAuth;
      }
    },
    showRegistrationModal() {
      if (!this.showRegModal) {
        this.showRegModal = !this.showRegModal;
        this.showAuth = !this.showAuth;
      }
    },
    closeModal() {
      if (this.showLogModal) {
        this.showLogModal = !this.showLogModal;
      }
      if (this.showRegModal) {
        this.showRegModal = !this.showRegModal;
      }
    },
    addToCart(item) {
      if (localStorage.getItem(userInfo) === null) {
        this.showAuth = true;
      }
      if (localStorage.getItem(userInfo) !== null) {
        item = { ...item, quantity: 1 };
        const temp = this.cartItems.some((i) => i.id === item.id);
        if (temp) {
          const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
          this.cartItems[itemIndex].quantity += 1;
        } else {
          this.cartItems.push(item);
        }
        this.$store.state.cartItemCount += 1;
      }
    },
  }
}
</script>

<style lang="scss">
.user-auth {
  z-index: 3;
  position: fixed;
  top: 25%;
  left: 40%;
  max-width: 70%;
  background: black;
  border: 1px solid green;
  padding: 10px;
}
.product__card-wrapper {
  margin: 15px 25px;
  z-index: 2;
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  border-radius: 4px;
  background-color: #191919;
}
.auth__nav-item {
  width: 100%;
  padding: 0;
  margin: 10px 0;
}
.auth__nav-item--btn {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background: white;
  border: 3px solid black;
}
.auth__nav-item--btn:hover{
  border: 3px solid green;
}
.product__card {
  background-color: #191919;
  min-width: 252px;
  min-height: 360px;
  color: #fff2f2;
  border: 1px solid black;
  padding: 60px 0;
  text-align: center;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  border-radius: 4px;
}
.product__card-img {
  width: 250px;
  height: 220px;
  border-radius: 4px;
}
.front{
    transform: perspective(600px) rotateY(0deg);
    background-color: #191919;
}
.back{
    transform: perspective(600px) rotateY(180deg);
    background-color: #454545;
    padding: 30px 0;
}
.product__card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
}
.product__card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
}
.front,
.back{
    position: absolute;
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform .6s linear;
    top: 0;
    border-radius: 4px;
}
.product__card-pagelink {
  color: #FFFFFF;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 9px;
  padding: 5px 10px;
  margin-top: 10px;
  transition: 0.3s;
}
.product__card-pagelink:hover {
  color: rgb(75, 221, 75);
  border: 1px solid rgb(75, 221, 75);
  transition: 0.3s;
}
.product__card-cartbtn {
  padding: 5px 15px;
  margin-top: 10px;
}
</style>
