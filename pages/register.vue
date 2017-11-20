<template>
  <div class="container">
      <h1 v-if="!$store.state.authUser">Register For login</h1>
      <form class="form-horizontal" v-if="!$store.state.authUser" @submit.prevent="register">
        <p class="error" v-if="registerError">{{registerError}}</p>
        <div class="form-group">
          <label for="username" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Username:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="text" v-model="registerUsername" name="username" class="form-control" :class="{validateError: !validation.registerUsername && !hook}" @focus="handleFocus"/>
          </div>
        </div>
        <div class="form-group">
          <label for="passwd" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Password:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="password" v-model="registerPassword" name="passwd" class="form-control" :class="{validateError: !validation.registerPassword && !hook}" @focus="handleFocus"/>
          </div>
        </div>
        <div class="form-group">
          <label for="cfrPasswd" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Confirmed Password:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="password" v-model="registerCkPassword" name="cfrPasswd" class="form-control" :class="{validateError: !validation.registerCkPassword && !hook}" @focus="handleFocus"/>
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Email:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="email" v-model="registerEmail" name="email" class="form-control" :class="{validateError: !validation.registerEmail && !hook}" @focus="handleFocus"/>
          </div>
        </div>
        <button type="submit" class="btn btn-default" :disabled="!isValid || hook">Register</button>
      </form>
      <!-- <div v-else>
        Welcome {{$store.state.authUser.username}}!
        <pre>I am the secret content, I am shown only when the use is connected.</pre>
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout">Logout</button>
      </div> -->
  </div>
</template>
<script>
import axios from '~/plugins/axios'
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data () {
    return {
      registerError: null,
      registerUsername: '',
      registerPassword: '',
      registerCkPassword: '',
      registerEmail: '',
      hook: true
    }
  },
  computed: {
    validation: function () {
      return {
        registerUsername: !!this.registerUsername.trim() && this.registerUsername.length >= 8,
        registerPassword: !!this.registerPassword.trim() && this.registerPassword.length >= 8,
        registerCkPassword: this.registerPassword === this.registerCkPassword,
        registerEmail: emailRE.test(this.registerEmail)
      }
    },
    isValid: function () {
      let validation = this.validation
      console.log(validation)
      let errorPair = this.errorPair
      console.log(errorPair)
      const me = this
      return Object.keys(validation).every(function (key) {
        console.log(key)
        if( !me.hook && !validation[key] ) {
          me.registerError = errorPair[key]
        }
        else {
          me.registerError = null
        } 
        return validation[key]
      })
    },
    errorPair: function () {
      return {
        registerUsername: 'username length should be at least 8 character',
        registerPassword: 'password length should be at least 8 character',
        registerCkPassword: 'confirm password should be consistent with password',
        registerEmail: 'email should with correct format'
      }
    }
  },
  methods: {
    handleFocus() {
      this.hook = false
    },
    async register () {
      try {
        // this.validateRegister()
        // validateRegister()
        // if (this.registerError) {
        //   return
        // }
        this.hook = true
        this.registerError = null
        // this.isValid = false
        console.log(this.registerUsername, this.registerPassword, this.registerEmail)
        await this.$store.dispatch('register', {
          username: this.registerUsername,
          passwd: this.registerPassword,
          email: this.registerEmail
        })
        this.registerError = (this.$store.state.registerStatus.err)? this.$store.state.registerStatus.err : null
        if (this.$store.state.registerStatus.result) {
          alert(this.$store.state.registerStatus.result)
          this.registerUsername = ''
          this.registerPassword = ''
          this.registerCkPassword = ''
          this.registerEmail = ''
        }
      }
      catch(e) {
        this.registerError = e.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .validateError {
    border-color: red;
  }
</style>
