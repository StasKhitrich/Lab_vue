<template>
    <div class="footer__logos">
        <a href="https://www.ea.com/" target="_blank" class="footer__logos-item">
            <img src="@/img/electronic-arts-logo.jpg" 
            class="footer__logos-img" alt="EA">
        </a>
        <a href="https://www.rockstargames.com/" target="_blank" class="footer__logos-item">
            <img src="@/img//rockstar-games-logo.png" 
            class="footer__logos-img" alt="rc games">
        </a>
        <a href="https://www.ubisoft.com/" target="_blank" class="footer__logos-item">
            <img src="@/img//ubisoft-logo.png" 
            class="footer__logos-img" alt="ubisoft">
        </a>
    </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
.footer__logos {
    text-align: center;
    padding-top: 15px;

    &-item {
        margin: 0 10px 0 10px;
    }

    &-img {
        height: 50px;
    }

    &-item:hover,
    &-item:focus {
        border-bottom: 5px solid #9833CC;
    }
}
</style>
