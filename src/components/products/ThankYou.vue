<template>
  <div v-if="!isValidUser">
    <h2>User not found!</h2>
  </div>
  <div v-else class="greet">
  <h2 class="greet-headline">Thank you for order!</h2>
  <p class="order-code">Your order code: <span class="order-code__id">{{order.id}}</span></p>
  <div class="order">
    <h2>Total: {{order.total}}</h2>
    <ul class="order-items__list">
      <li v-for="item in order.ordereditems" :key="item.id" class="order-item">
        <p>Title: {{item.title}}</p>
        <p>Price: {{item.price}}</p>
        <p>Quantity: {{item.quantity}}</p>
      </li>
    </ul>
  </div>
  </div>
  <router-link to="/" class="home-link">Go To Homepage</router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ThankYou',
  data() {
    return {
      order: {}
    }
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.user.loggedUser
    }),
    isValidUser() {
      return this.loggedUser.firstname.toLowerCase() === this.order.firstname.toLowerCase()
      && this.loggedUser.lastname.toLowerCase() === this.order.lastname.toLowerCase()
      && this.loggedUser.id === this.order.userId
    }
  },
  mounted() {
    fetch(`http://localhost:3000/orders/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => { this.order = data })
      .catch((err) => console.log(err.message))
  }
}
</script>

<style lang="scss" scoped>
.order-item {
  border: 1px solid green;
  padding: 5px 10px;
  margin: 0 auto;
  text-align: left;
}
.greet {
  max-width: 40%;
  margin: 0 auto;
}
.greet-headline {
  text-align: center;
  padding: 10px 0;
}
.order-code {
  text-align: center;
}
.order-code__id {
  border-bottom: 2px solid green;
  padding: 5px 0;
}
.order {
  margin: 30px auto;
  text-align: center;
}
.order-items__list {
  list-style-type: none;
  margin-top: 10px;
}
.order-item {
  margin-top: 10px;
  background: black;
}
.home-link {
  display: flex;
  justify-content: center;
  background: green;
  text-decoration: none;
  font-size: 1.3rem;
  transition: 0.3s;
  color: white;
}
.home-link:hover {
  padding: 15px;
  transition: 0.3s;
  background: white;
  color: black;
}
</style>
