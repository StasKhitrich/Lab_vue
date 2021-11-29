<template>
    <footer>
        <div class="footer_slogan">
            Incredible Convenient
        </div>

        <div class="logos">
            <a href="https://www.ea.com/" target="_blank" class="logo">
                <img src="../../public/img/electronic-arts-logo.jpg" alt="EA">
            </a>
            <a href="https://www.rockstargames.com/" target="_blank" class="logo">
                <img src="../../public/img/rockstar-games-logo.png" alt="rc games">
            </a>
            <a href="https://www.ubisoft.com/" target="_blank" class="logo">
                <img src="../../public/img/ubisoft-logo.png" alt="ubisoft">
            </a>
        </div>
    </footer>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
footer {
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

img {
    height: 50px;
}

.logos {
    text-align: center;
    padding-top: 15px;
}

.logo {
    margin: 0 10px 0 10px;
}

.logo:hover,
.logo:focus {
    border-bottom: 5px solid #9833CC;
}
</style>
