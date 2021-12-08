<template>
<alertMessage 
 v-if="dataLoadingError"
 :headline="'Error'"
 :message="'Failed to load data!'"
 >
<button @click="hideErrorModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</alertMessage>
<alertMessage 
 v-if="dataLoadingSuccess"
 :headline="'Success'"
 :message="'Data updated successfully!'"
 >
<button @click="hideSuccessModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</alertMessage>
  <div class="product__create">
    <h1>Edit product</h1>
    <div class="product__create-form">
      <form @submit.prevent="editProduct">
       <div class="form-item">
       <label for="image">Image url:</label>
       <p>New value: {{product.image}}</p>
       <Input
        v-model="product.image"
        inputType="text"
        class="data-input"
        name="image"
       />
       </div>
       <div class="form-item">
       <label for="title">Title:</label>
       <p>New value: {{product.title}}</p>
       <Input
        v-model="product.title"
        inputType="text"
        class="data-input"
        name="title"
       />
       </div>
       <div class="form-item">
       <label for="price">Price:</label>
       <p>New value: {{product.price}}</p>
       <Input
        v-model="product.price"
        inputType="number"
        class="data-input"
        name="price"
       />
       </div>
       <div class="form-item"> 
       <label for="genre">Genre:</label>
       <p>New value: {{product.genre}}</p>
       <Input
        v-model="product.genre"
        inputType="text"
        class="data-input"
        name="genre"
       />
       </div>
       <div class="form-item">
       <label for="description">Description:</label>
       <p>New value: {{product.description}}</p>
       <Input
        v-model="product.description"
        inputType="text"
        class="data-input"
        name="description"
       />
       </div>
       <br>
       <Input
       class="data-input"
       inputType="submit"
       modelValue="Submit"
       />
      </form>
      <router-link to="/">Go to home</router-link>
      <br>
      <router-link to="/admin/products">Open products list</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import Input from '../../elements/Input.vue';
import alertMessage from '../../elements/alertMessage.vue';

export default {
  name: 'AdminProductsEdit',
  components: {
    Input,
    alertMessage
  },
  data() {
    return {
      product: {},
      dataLoadingError: false,
      dataLoadingSuccess: false
    }
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.user.loggedUser  
    })
  },
  mounted() {
    fetch(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => { this.product = data })
      .catch((err) => console.log(err.message))
    this.checkRole();
  },
  methods: {
    checkRole() {
      if (this.loggedUser.role !== 'admin') {
        this.$router.push('/');
      }
    },
    hideErrorModal() {
      this.dataLoadingError = false;
    },
    hideSuccessModal() {
      this.dataLoadingSuccess = false;
    },
    async editProduct() {
      const result = await axios.put(`http://localhost:3000/products/${this.$route.params.id}`, {
        image: this.product.image,
        title: this.product.title,
        price: this.product.price,
        genre: this.product.genre,
        description: this.product.description,
        updatedAt: new Date().getTime().toString()
      });
      if (result.status === 200) {
        this.dataLoadingSuccess = true;
      } else {
        this.dataLoadingError = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped> 
.form-item {
  margin: 20px 0;
  border: 1px solid green;
  max-width: 30%;
  padding: 10px;
}
</style>
