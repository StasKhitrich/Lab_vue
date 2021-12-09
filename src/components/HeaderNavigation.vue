<template>
    <header class="header">
        <div class="header__inner-wrap">
            <div class="header__logo">
                <router-link class="header__logo-link" to="/">Game Store</router-link>
            </div>
            <nav class="header__navigation">
                <router-link class="header__navigation-link" to="/">Home</router-link>
                <router-link class="header__navigation-link" to="/products">Products</router-link>
                <router-link class="header__navigation-link" to="/about">About</router-link>
            </nav>
        </div>
    </header>
</template>

<script>

</script>

<style lang="scss">
    .header {
        background-color: $color-black;
        height: 65px;
        vertical-align: middle;

        &__navigation {
            display: inherit;
            width: 25%;

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
