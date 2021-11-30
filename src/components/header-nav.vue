<template>
<header class="header">
  <div class="container">
    <div class="header__inner">
        <div class="header__logo">
          <router-link class="header__logo-link" to="/">Game Store</router-link>
        </div>
        <nav class="header__navigation">
            <router-link class="header__navigation-link" to="/">Home</router-link>
            <router-link class="header__navigation-link" to="/products">Products</router-link>
            <router-link class="header__navigation-link" to="/about">About</router-link>
        </nav>
      </div>
  </div> 
</header>
</template>

<script>

</script>

<style lang="scss">
.header {
  background-color: #121212;
  height: 65px;
  vertical-align: middle;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 17px 0 17px;
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

  &__navigation { 
    display: inherit;

    &-link {
    font-size: 23px;
    font-weight: 500;
    text-decoration: none;
    color: #DEDEDE;
    padding: 0 5px 0 5px;
    line-height: 65px;
    width: 80px;
    text-align: center;

    &:hover, 
    &:focus{
      background-color: #272727;
      border-bottom: 5px solid #9833CC;
      height: 60px;
      color: white;
    }
  }  

    .active {
      color: #9833CC;
      height: 60px;
    }
  }
}
</style>
