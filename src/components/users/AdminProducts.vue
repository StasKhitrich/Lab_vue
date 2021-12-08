<template>
<alertMessage 
 v-if="productRemovedTooltip"
 :headline="'Success'"
 :message="'Product removed successfully!'"
 >
<button @click="hideProductRemovedTooltip" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</alertMessage>
<alertMessage 
 v-if="errorModal"
 :headline="'Error'"
 :message="'An error occured!'"
 >
<button @click="hideErrorModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</alertMessage>
  <div class="wrapper">
    <h1 class="products-headline">Products List</h1>
    <div class="products__list">
        <div class="products__list">
          <div v-for="product in products" :key="product.id" class="products__list-item">
            <img class="product__item-img" :src="product.image" alt="Image Not Found" />
            <h3 class="product-item">Title: {{product.title}}</h3>
            <h3 class="product-item">Price: {{product.price}}</h3>
            <h3 class="product-item">Genre: {{product.genre}}</h3>
            <h3 class="product-item">Description: {{product.description}}</h3>
            <div class="product-item__actions">
            <div>
              <router-link 
              :to="{ name: 'AdminProductsEdit', params: { id: product.id }}">
              <button class="action-btn">Edit product</button>
              </router-link>
            </div>
            <div>
            <button @click="removeProduct(product.id)" 
            class="action-btn">Remove product</button>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="admin__links">
  <div class="admin__links-item">
    <router-link to="/admin" class="admin-link">Go back</router-link>
  </div>
  <div class="admin__links-item">
    <router-link to="/admin/products/create" class="admin-link">Create new product</router-link>
  </div>
  <div class="admin__links-item">
    <router-link to="/" class="admin-link">Go to homepage</router-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import alertMessage from '../../elements/alertMessage.vue';

export default {
  name: 'AdminProducts',
  components: {
    alertMessage
  },
  data() {
    return {
      products: [],
      productRemovedTooltip: false,
      errorModal: false
    }
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.user.loggedUser
    })
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))
    this.checkRole();
  },
  methods: {
    checkRole() {
      if (this.loggedUser.role !== 'admin') {
        this.$router.push('/');
      }
    },
    hideProductRemovedTooltip() {
      this.productRemovedTooltip = false;
    },
    hideErrorModal() {
      this.errorModal = false;
    },
    async removeProduct(id) {
      const result = await axios.delete(`http://localhost:3000/products/${id}`);
      if (result.status === 200) {
        this.products.splice(id, 1);
        this.productRemovedTooltip = true;
      } else {
        this.errorModal = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.products-headline {
  text-align: center;
}
.products__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.products__list-item {
  margin: 25px 5px;
  border: 2px solid green;
  max-width: 30%;
  padding: 10px;
}
.product__item-img {
  max-width: 300px;
  max-height: 250px;
  border-radius: 5px;
  margin-left: 30%;
}
.product-item {
  margin-top: 15px;
  margin-left: 10%;
}
.product-item__actions {
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
  border: 1px solid white;
  padding: 10px;
}
.action-btn {
  color: black;
  padding: 10px;
}
.admin__links {
  display: flex;
  justify-content: center;
}
.admin__links-item {
  border: 1px solid white;
  padding: 5px 10px;
  margin: 10px 10px 20px 10px;
  transition: 0.3s;
}
.admin__links-item:hover {
  border: 1px solid green;
  transition: 0.3s;
}
.admin-link {
  color: white;
  text-decoration: none;
}
</style>
