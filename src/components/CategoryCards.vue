<template>
  <div class="categories">
    <div class="categories__platform" v-for="card in categories" :key="card.id">
      <router-link class="categories__platform-links"  
      :to="'/products/' + card.categoryName.toLowerCase() + '-products'">

        <img class="categories__platform-links__logo" 
        :src="require('@/img/platform-categories/'+ card.logoPath)" :alt="card.categoryName">

        <div class="categories__platform-links__description">
          {{card.categoryName}}
        </div>
        
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICategory } from '@/categories';

@Options({
})

export default class CategoryCards extends Vue {
  categories: ICategory[] = [
    {
      id: 1, 
      logoPath: 'pc-logo.png',
      categoryName: 'PC'
    }, 
    {
      id: 2,
      logoPath: 'playstation-logo.png',
      categoryName: 'PlayStation'
    },
    {
      id: 3,
      logoPath: 'xbox-logo.png',
      categoryName: 'Xbox'
    }
  ];
}
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1% 1%;
  margin: 0 auto;

  &__platform {
    background-color: $color-purple;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 5%;
    height: 100%;
    text-align: center;
    border-radius: 15px;
    text-decoration: none;

    &-links {
      width: 98%;
      text-decoration: none;
      margin: 2px auto 2%;
      background: $color-white;
      border-radius: 15px;

      &__logo {
        width: 25%;
        margin: 5% auto 0;
      }

      &__description {
        font-size: 1.5em;
        font-weight: 500;
        margin-bottom: 2%;
        color: $color-black;
      }
    }

    &:hover {
      background-color: $color-black;

      .categories__platform-links {
        background-color: $color-purple;
      }
    }
  }
}
</style>
