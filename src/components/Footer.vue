<template>
    <div class="footer">
        <FooterLogols/>
    </div>
</template>

<script lang="ts">
import FooterLogols from './Footer-logos.vue'

export default {
  components: {
    FooterLogols
  }
}
</script>

<style lang="scss" scoped>
.footer {
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
