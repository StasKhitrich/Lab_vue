<template>
    <div class="wrapper">
      <div class="products__filtration">
        <h2 class="products__filtration-headline">Sort</h2>
        <div class="products__filtration-section">
         <h3 class="products__filtration-section--headline">Category:</h3>
         <div class="products__filtration-section--filter">
         <ul>
         <filter-by-genres 
          :options="categories"
          @select="sortByCategories"
          :selected="selected"
         />
         </ul>
         </div>
         </div>
         <div class="products__filtration-section">
         <h3 class="products__filtration-section--headline">Price:</h3>
         <div class="products__filtration-section--filter">
          <div class="range-slider">
            <input 
             class="range-slider--item"
             type="range" 
             min="0" max="60" 
             step="10"
             v-model.number="minPrice"
             @change="setRangeSlider"
            >
            <input 
             class="range-slider--item"
             type="range" 
             min="0" 
             max="60" 
             step="10"
             v-model.number="maxPrice"
             @change="setRangeSlider"
            >
          </div>
          <div class="range-values">
            <p>Min:{{minPrice}}</p>
            <p>Max:{{maxPrice}}</p>
          </div>
         </div>
         </div>
        <div class="products__filtration-section">
         <h3 class="products__filtration-section--headline">Rating:</h3>
        <div class="products__filtration-section--filter">
          <div class="range-slider">
            <input 
             class="range-slider--item"
             type="range" 
             min="0"
             max="5" 
             step="1"
             v-model.number="minRating"
             @change="setRangeSliderRating"
            >
            <input 
             class="range-slider--item"
             type="range" 
             min="0" 
             max="5" 
             step="1"
             v-model.number="maxRating"
             @change="setRangeSliderRating"
            >
          </div>
          <div class="range-values">
            <p>Min:{{minRating}}</p>
            <p>Max:{{maxRating}}</p>
         </div>
        </div>
      </div>
        <div class="products__filtration-section">
         <h3 class="products__filtration-section--headline">Sort by creation date:</h3>
         <div class="products__filtration-section--filter">
           <div class="sortByDate-btn--wrapper">
             <button class="sortByDate-btn" @click="sortByNewest">Sort by newest</button>
            </div>
           <div class="sortByDate-btn--wrapper">
             <button class="sortByDate-btn" @click="sortByOldest">Sort by oldest</button>
            </div>
         </div>
         </div>
      </div>
      <div class="products__list-wrapper">
        <h2 class="products__list-headline">Products</h2>
      <div class="products__list">
         <products-card v-for="product in filteredProducts" :key="product.id"
         :product="product" />
      </div>
    </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import ProductsCard from './ProductsCard.vue';
import FilterByGenres from './FilterByGenres.vue';

export default {
  components: {
    ProductsCard,
    FilterByGenres
  },
  data() {
    return {
      selected: 'All',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 60,
      minRating: 0,
      maxRating: 5
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      categories: 'productCategories'
    }),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    }
  },
  methods: {
    ...mapMutations([
      'showLoadingSpinner'
    ]),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
      this.sortByCategories();
    },
    setRangeSliderRating() {
      if (this.minRating > this.maxRating) {
        const temp = this.maxRating;
        this.maxRating = this.minRating;
        this.minRating = temp;
      }
      this.sortByCategories();
    },
    sortByNewest() {
      this.sortedProducts = this.products;
      this.products.sort((a, b) => {
        return b.createdAt - a.createdAt; 
      })
      this.sortByCategories();
    },
    sortByOldest() {
      this.sortedProducts = this.products;
      this.products.sort((a, b) => {
        return a.createdAt - b.createdAt; 
      })
      this.sortByCategories();
    },
    sortByCategories(category) {
      const vm = this;
      this.sortedProducts = this.products;
      this.showLoadingSpinner(true);
      setTimeout(() => this.showLoadingSpinner(false), 500);
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.rating >= vm.minRating && item.rating <= vm.maxRating;  
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((item) => {
          vm.selected = category.genre;
          return item.genre === category.genre;
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
}
.products__filtration {
  min-width: 30%;
  border: 1px solid green;
  border-radius: 10px;
  background-color: rgba(120,120,120,0.16);
} 
.products__filtration-headline {
  border-bottom: 1px solid white;
  margin: 15px 30px 0 40px;
  padding: 0 0 10px 0;
}
.range-slider {
  max-width: 250px;
  text-align: center;
}
.range-slider--item {
  display: flex;
}
.sortByDate-btn--wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 70%;
  border: 1px solid green;
  border-radius: 4px;
}
.sortByDate-btn {
  border-radius: 4px;
}
.products__filtration-section--headline {
  text-align: center;
  border-bottom: 1px solid white;
  max-width: 50%;
  margin: 10px auto;
  padding-bottom: 4px;
}
.products__filtration-section--filter{
  margin-left: 25%;
  margin-top: 10px;
}
.products__filtration-ratingselect {
  padding: 2px 20px;
  margin-left: 15%;
}
.products__list-headline {
  margin: 15px 20px 0 20px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid white;
}
.products__list-wrapper {
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid green;
  border-radius: 10px;
  background-color: rgba(120,120,120,0.16);
}
.products__list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 25px 0 75px 0;
}
</style>
