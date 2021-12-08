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
 :message="'Product created successfully!'"
 >
<button @click="hideSuccessModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</alertMessage>
  <div class="product__create">
    <h1>Create new product</h1>
    <div class="product__create-form">
      <form @submit.prevent="createProduct">
       <label for="image">Image url:</label>
       <Input
        v-model="image"
        inputType="text"
        class="data-input"
        name="image"
       />
       <label for="title">Title:</label>
       <Input
        v-model="title"
        inputType="text"
        class="data-input"
        name="title"
       />
       <label for="price">Price:</label>
       <Input
        v-model="price"
        inputType="number"
        class="data-input"
        name="price"
       />
       <label for="genre">Genre:</label>
       <Input
        v-model="genre"
        inputType="text"
        class="data-input"
        name="genre"
       />
       <label for="description">Description:</label>
       <Input
        v-model="description"
        inputType="text"
        class="data-input"
        name="description"
       />
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
import alertMessage from '../../elements/alertMessage.vue'

export default {
  name: 'AdminProductsCreate',
  components: {
    Input,
    alertMessage
  },
  data() {
    return {
      products: [],
      image: '',
      title: '',
      price: '',
      genre: '',
      description: '',
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
    async createProduct() {
      const result = await axios.post('http://localhost:3000/products', {
        image: this.image,
        title: this.title,
        price: this.price,
        genre: this.genre,
        description: this.description,
        createdAt: new Date().getTime().toString(),
        updatedAt: new Date().getTime().toString()
      });
      if (result.status === 201) {
        this.dataLoadingSuccess = true;
      } else {
        this.dataLoadingError = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.data-input {
  max-width: 40%;
}
</style>
