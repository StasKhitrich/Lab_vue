<template>
<header class="header">
      <div class="nav">
        <div class="nav__logo">
          <router-link class="nav__logo__link" to="/">Game Store</router-link>
        </div>
        
        <nav class="nav__navigation">
            <router-link class="nav__link" to="/">Home</router-link>
            <router-link class="nav__link" to="/products">Products</router-link>
            <router-link class="nav__link" to="/about">About</router-link>
        </nav>
      </div>

    </header>
</template>

<script>

</script>

<style lang="scss">

header {
  background-color: #121212;
  height: 65px;
  vertical-align: middle;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 17px 0 17px;
  height: 100%;

  .nav__logo__link {
    font-size: 40px;
    font-weight: 500;
    color: #CECDCE;
    height: 100%;
    line-height: 65px;
    text-decoration: none;
  }  

  .nav__logo__link:hover,
  .nav__logo__link:focus {
    color: #b298be;
  }

  .nav__navigation { 
    display: inherit;
  }

  .nav__link {
   font-size: 23px;
  font-weight: 500;
  text-decoration: none;
  color: #DEDEDE;
  padding: 0 5px 0 5px;
  line-height: 65px;
  width: 80px;
  text-align: center;
  }
  
  .nav__navigation {
    a.router-link-active {
      color: #9833CC;
      height: 60px;
  }

  .nav__link:hover, 
  .nav__link:focus{
    background-color: #272727;
    border-bottom: 5px solid #9833CC;
    height: 60px;
    color: white;
  }
  }
}
</style>
