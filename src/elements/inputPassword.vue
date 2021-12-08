<template>
    <div class="input__password">
        <h3>Enter Your Password:</h3>
            <div class="input__password-content">
                <h6 class="input__password-headline">Password</h6>
              <div class="input__password-form">
                  <input class="input__password-input" :type="passwordFieldType"
                  v-model="password" name="password" placeholder="Your Password"
                  required>
                <div class="toggle__password-hide" @click="switchVisibility"
                    v-if="passwordFieldType == 'password'">
                     <svg enable-background="new 0 0 24 24" height="24px" version="1.1"
                     viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M12,4C4.063,4-0.012,12-0.012,12S3.063,20,12,20c8.093,0,12.011-7.969,12.011-7.969S20.062,4,12,4z M12.018,17c-2.902,0-5-2.188-5-5c0-2.813,2.098-5,5-5c2.902,0,5,2.187,5,5C17.018,14.812,14.92,17,12.018,17z M12.018,9c-1.658,0.003-3,1.393-3,3c0,1.606,1.342,3,3,3c1.658,0,3-1.395,3-3 C15.018,10.392,13.676,8.997,12.018,9z"
                      fill-rule="evenodd"/></g></g></svg>
                </div>
                <div class="toggle__password-show" @click="switchVisibility"
                  v-if="passwordFieldType != 'password'" required>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"/></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'inputPassword',
  data() {
    return {
      password: '',
      passwordFieldType: 'password'
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  }
}
</script>

<style lang="scss">
.input__password {
    border: 2px solid #393838;
    width: 300px;
    padding: 20px;
}
.input__password-content {
    margin-top: 10px;
    padding: 0;
}
.input__password-headline {
    margin: 6px 0px 0px 6px;
}
.input__password-form {
  display: flex;
}
.input__password-input {
    background-color: #f3f3f3;
    height: 30px;
    width: 210px;
    border-radius: 3px;
    border: 0px;
    padding: 5px 15px;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.06);
    outline: none;
}
</style>
