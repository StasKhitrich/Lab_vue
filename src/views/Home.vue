<template>
  <div class="wrapper">
    <div class="recentlyadded">
      <h2 class="recentlyadded__headline">New In Store:</h2>
        <div class="recentlyadded__item"
          v-for="item in this.products.slice(-3)"
          :key="item.id">
          <div>
            <img :src="item.image"
            class="recentlyadded__item-image">
          </div>
          <div class="recentlyadded__item-content">
            <h2>{{item.title}}</h2>
            <h3>Price: {{item.price}}</h3>
            <h4 class="link-wrapper"><router-link class="recentlyadded__item-link"
             :to="`/products/${item.id}`">
             Visit store page</router-link></h4>
          </div>
        </div>
    </div>
    <div class="search__wrapper">
    <div class="search__input">
     <h2>Search:</h2>
      <Input
       inputType="search"
       v-model="search"
       class="search__input-field"
       @input="searchCheck()"
      />
    </div>
    <div :class='{inactive: isInactive}' class="search__item-wrapper"
      v-for="item in searchHandler" :key="item.id">
      <div class="search__item">
        <h3>{{item.title}}</h3>
        <router-link :to="`/products/${item.id}`">Visit store page</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Input from '../elements/Input.vue'

export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      search: '',
      isInactive: true
    }
  },
  methods: {
    searchCheck() {
      if (this.search === '') {
        this.isInactive = true;
      } else {
        this.isInactive = false;
      }
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products
    }),
    searchHandler() {
      return this.products.filter((item) => item.title.toLowerCase()
        .includes(this.search.toLowerCase()));
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: white;
  padding-bottom: 45px;
}
.search__wrapper {
  border: 1px solid white;
  width: 30%;
  margin: 15px auto;
  padding: 10px;
}
.search__input-field {
  width: 100%;
  color: white;
  background: green;
  margin-top: 7px;
  padding: 5px;
  border-radius: 4px;
}
.recentlyadded {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 60%;
  margin: 0 auto;
}
.recentlyadded__headline {
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 6px;
}
.recentlyadded__item {
  border: 1px solid lawngreen;
  padding: 5px;
  margin-top: 25px;
  background-color: black;
  border-radius: 7px;
  box-shadow: 0px 0px 18px 1px rgba(16, 122, 24, 0.75);
  display: flex;
  flex-direction: row;
}
.recentlyadded__item-image {
  width: 100px;
  height: 100px;
  border-radius: 7px;
}
.recentlyadded__item-content {
  margin: 10px 15px;
}
.recentlyadded__item-link {
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  transition: 0.3s;
}
.recentlyadded__item-link:hover {
  color: lawngreen;
  border: 1px solid lawngreen;
  transition: 0.3s;
}
.search__item-wrapper {
  border: 1px solid lawngreen;
  padding: 5px;
}
.search__item {
  border: 1px solid white;
  border-radius: 6px;
  padding: 5px 10px;
}
.link-wrapper {
  margin-top: 10px;
}
.inactive {
  display: none;
}
@media screen and (max-width: 1000px) {
  .recentlyadded__item {
    display: flex;
    flex-direction: column;
  }
}
</style>
