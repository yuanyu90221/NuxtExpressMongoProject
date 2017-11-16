<template>
  <div class="container">
      <h1 v-if="!$store.state.authUser">Register For login</h1>
      <form class="form-horizontal" v-if="!$store.state.authUser" @submit.prevent="register">
        <p class="error" v-if="registerError">{{registerError}}</p>
        <div class="form-group">
          <label for="username" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Username:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="text" v-model="registerUsername" name="username" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label for="passwd" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Password:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="password" v-model="registerPassword" name="passwd" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label for="cfrPasswd" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Confirmed Password:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="password" v-model="registerCkPassword" name="cfrPasswd" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Email:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="email" v-model="registerEmail" name="email" class="form-control"/>
          </div>
        </div>
        <button type="submit" class="btn btn-default">Register</button>
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

export default {
  data () {
    return {
      registerError: null,
      registerUsername: '',
      registerPassword: '',
      registerCkPassword: '',
      registerEmail: ''
    }
  },
  methods: {
    async register () {
      try {
        // this.validateRegister()
        // validateRegister()
        // if (this.registerError) {
        //   return
        // }
        console.log(this.registerUsername, this.registerPassword, this.registerEmail)
        await this.$store.dispatch('register', {
          username: this.registerUsername,
          passwd: this.registerPassword,
          email: this.registerEmail
        })
        this.registerUsername = ''
        this.registerPassword = ''
        this.registerCkPassword = ''
        this.registerEmail = ''
        this.registerError = (this.$store.state.registerStatus.err)? this.$store.state.registerStatus.err : null
        if (this.$store.state.registerStatus.result)
          alert(this.$store.state.registerStatus.result)
      }
      catch(e) {
        this.registerError = e.message
      }
    }
  }
}
</script>
