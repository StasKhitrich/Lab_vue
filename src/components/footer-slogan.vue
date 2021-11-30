<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__slogan">
                    Incredible Convenient
                </div>
                <logos/>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import logos from './footer-logos.vue'

export default {
  components: {
    logos
  }
}
</script>

<style lang="scss" scoped>
.footer__inner {
    position: absolute;
    background-color: black;
    color: #9833CC;
    width: 100%;
    height: 140px;
    bottom: 0;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    padding-top: 20px;
}
</style>
