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
    @import "src/assets/colors";
    .header {
        background-color: $color-purple;
        height: 65px;
        vertical-align: middle;

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
            color: #CECDCE;
            height: 100%;
            line-height: 65px;
            text-decoration: none;

            &:hover,
            &:focus {
                color: #b298be;
            }
        }

        &__navigation-link {
            font-size: 40px;
            font-weight: 500;
            color: #CECDCE;
            height: 100%;
            line-height: 65px;
            text-decoration: none;
            padding-left: 10px;

            &:hover,
            &:focus {
                border-bottom: 5px solid #9833CC;
                background-color: #272727;
                height: 60px;
                color: white;
            }

            &--active {
                color: #9833CC;
                height: 60px;
            }
        }
    }
</style>
