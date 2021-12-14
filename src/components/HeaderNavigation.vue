<template>
    <header class="header">
        <div class="header__inner-wrap">
            <div class="header__logo">
                <router-link class="header__logo-link" to="/">Game Store</router-link>
            </div>
            <nav class="header__navigation">
                <router-link class="header__navigation-link" to="/">
                    Home
                </router-link>
                <router-link class="header__navigation-link" to="/products">
                    Products
                </router-link>
                <div class="header__navigation-link dropdown">
                    <div class="header__navigation__dropdown-button">
                        Categories
                    </div> 
                    <div class="header__navigation__dropdown-content">
                        <router-link to="/products/pc-products">PC</router-link>
                        <router-link to="/products/playstation-products">PlayStation</router-link>
                        <router-link to="/products/xbox-products">Xbox</router-link>
                    </div>
                </div>
                <router-link class="header__navigation-link" to="/about">
                    About
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class HeaderNavigation extends Vue {
  
}

</script>

<style scoped lang="scss">
@import '@/assets/dropdown-styles.scss';
    .header {
        background-color: $color-black;
        height: 65px;
        vertical-align: middle;

        &__navigation {
            display: inherit;
            width: 30%;

            &-link {
                font-size: 23px;
                font-weight: 500;
                color: $color-gray;
                width: 30%;
                height: 100%;
                text-align: center;
                line-height: 65px;
                text-decoration: none;
                margin: 0 auto;
            
                &:focus {
                    color: $color-purple;
                }

                &:hover {
                    border-bottom: 5px solid $color-purple;
                    background-color: $navigation-bg-hover;
                    height: 60px;
                    color: $color-white;
                }

                &--active {
                    color: $color-purple;
                    height: 60px;
                }
            }

        }

        &__inner-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 17px;
            height: 100%;
        }

        &__logo-link {
            font-size: 40px;
            font-weight: 500;
            color: $color-gray;
            height: 100%;
            line-height: 65px;
            text-decoration: none;

            &:hover,
            &:focus {
              color: $color-purple;
            }
        }
    }
</style>
