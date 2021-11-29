<template>
    <footer>
        <div class="footer">
            <div class="footer__slogan">
                Incredible Convenient
            </div>

            <div class="footer__logos">
                <a href="https://www.ea.com/" target="_blank" class="footer__logo-item">
                    <img src="../../public/img/electronic-arts-logo.jpg" 
                    class="footer__logos-img" alt="EA">
                </a>
                <a href="https://www.rockstargames.com/" target="_blank" class="footer__logo-item">
                    <img src="../../public/img/rockstar-games-logo.png" 
                    class="footer__logos-img" alt="rc games">
                </a>
                <a href="https://www.ubisoft.com/" target="_blank" class="footer__logo-item">
                    <img src="../../public/img/ubisoft-logo.png" 
                    class="footer__logos-img" alt="ubisoft">
                </a>
            </div>
        </div>
        
    </footer>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>

.footer {
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

    .footer__logos-img {
        height: 50px;
    }

    .footer__logos {
        text-align: center;
        padding-top: 15px;
    }

    .footer__logo-item {
        margin: 0 10px 0 10px;
    }
    .footer__logo-item:hover,
    .footer__logo-item:focus {
        border-bottom: 5px solid #9833CC;
    }
}
</style>
