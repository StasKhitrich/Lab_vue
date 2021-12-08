<template>
    <div class="alert-message__wrapper">
        <div class="alert-message">
            <div class="alert-message__header">
                <div class="alert-message__headline">
                    <h2>{{headline}}</h2>
                </div>
            </div>
            <div class="alert-message__body">
                <p>{{message}}</p>
            </div>
            <div class="alert-message__options">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'alertMessage',
  props: {
    headline: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    }
  },
}
</script>

<style lang="scss">
.alert-message__wrapper {
    width: 580px;
    height: 250px;
    margin: 0 auto;
    border: 1px solid #393838;
    box-shadow: 2px 2px 6px black;
    border-radius: 9px;
    font-family: 'Open Sans';
    background-color: #222222;
    z-index: 4;
    position: fixed;
    top: 25%;
    left: 33%;
}
.alert-message__header {
    background-color: rgb(75,221,75);
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.alert-message__headline, .alert-message__exit {
    margin: 5px 20px;
}
.alert-message__exit-btn {
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}
.alert-message__exit-btn:hover {
    color: #fff2f2;
    background-color: #df3939;
    transition: 0.3s;
}
.alert-message__body {
    padding: 15px;
    height: 120px;
    background-color: #222222;
}
.alert-message__options {
    display: flex;
    justify-content: flex-end;
}
.alert-message__accept {
    margin: 0 3%;
    padding: 0px;
    height: 20px;
}
.alert-message__accept-text {
    margin: 0;
}
.alert-message__accept {
    transition: 0.3s;
    border: 2px solid rgb(75,221,75);
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.alert-message__accept:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(75,221,75);
    color: #fff2f2;
}
@media screen and (max-width: 900px) {
    .alert-message__accept {
        padding: 5px 25px;
    }
}
</style>
