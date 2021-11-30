<template>
    <div class="footer-logos">
        <a href="https://www.ea.com/" target="_blank" class="footer-logos__link">
            <img src="@/img/electronic-arts-logo.jpg" 
            class="footer-logos__image" alt="EA">
        </a>
        <a href="https://www.rockstargames.com/" target="_blank" class="footer-logos__link">
            <img src="@/img/rockstar-games-logo.png" 
            class="footer-logos__image" alt="rc games">
        </a>
        <a href="https://www.ubisoft.com/" target="_blank" class="footer-logos__link">
            <img src="@/img/ubisoft-logo.png" 
            class="footer-logos__image" alt="ubisoft">
        </a>
    </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
.footer-logos {
    text-align: center;
    padding-top: 15px;
    
    &__link {
        margin: 0 10px 0 10px;
    }

    &__image {
        max-width: 3.5%;
    }

    &__link:hover,
    &__link:focus {
        border-bottom: 5px solid #9833CC;
    }
}
</style>
