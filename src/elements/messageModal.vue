<template>
  <div :class="{hidden: inactive}" class="message__modal-wrapper">
    <div class="message__modal">
       <div class="message__modal-header">
        <div class="message__modal-headline">
         <h2>Headline</h2>
        </div>
        <div class="message__modal-exit">
         <button @click="closeMessage()" class="message__modal-exit--btn">x</button>
        </div>
       </div>
       <div class="message__modal-body">
        <p>{{message}}</p>
       </div>
       <div class="message__modal-options">
        <div class="message__modal-option--accept" @click="closeMessage()">
         <p>Accept</p>
        </div>
        <div class="message__modal-option--decline" @click="closeMessage()">
         <p>Decline</p>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageModal',
  data() {
    return {
      message: 'Some message will be displayed here.',
      inactive: false
    }
  },
  methods: {
    closeMessage() {
      this.inactive = !this.inactive;
    }
  }
}
</script>

<style lang="scss">
.hidden {
    display: none;
}
.message__modal-wrapper {
    width: 50%;
    height: 300px;
    border: 1px solid black;
    border-radius: 9px;
    box-shadow: 2px 2px 6px black;
    margin: 0 auto;
    font-family: 'Open Sans';
    z-index: 3;
    position: fixed;
    top: 3%;
    left: 15%;
    background-color: snow;
}
.message__modal {
    border-radius: 9px;
    border: none;
    background-color: snow;
}
.message__modal-header {
    background-color: rgb(75,221,75);
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.message__modal-headline, .message__modal-exit {
    margin: 5px 20px;
}
.message__modal-exit--btn {
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}
.message__modal-exit--btn:hover {
    color: #fff2f2;
    background-color: #df3939;
    transition: 0.3s;
}
.message__modal-body {
    padding: 15px;
    height: 150px;
    background-color: snow;
}
.message__modal-options {
    display: flex;
    justify-content: flex-end;
}
.message__modal-option--accept, .message__modal-option--decline {
    margin: 0 3%;
    padding: 0px;
    height: 20px;
}
.message__modal-option--accept p {
    margin: 0;
}
.message__modal-option--decline p {
    margin: 0;
}
.message__modal-option--accept {
    transition: 0.3s;
    border: 2px solid rgb(75,221,75);
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.message__modal-option--decline {
    transition: 0.3s;
    border: 2px solid #df3939;
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.message__modal-option--accept:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(75,221,75);
    color: #fff2f2;
}
.message__modal-option--decline:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #df3939;
    color: #2f2f2f;
}
@media screen and (max-width: 1150px) {
    .message__modal-wrapper {
        width: 80%;
    }
}
@media screen and (max-width: 900px) {
    .message__modal-option--accept {
        padding: 5px 25px;
    }
    .message__modal-option--decline {
        padding: 5px 25px;
    }
}
</style>
