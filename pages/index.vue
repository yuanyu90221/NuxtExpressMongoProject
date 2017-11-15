<template>
  <div class="container">
    <!-- <h1 class="title">
      CoolBitx Trader
    </h1> -->
    <!-- <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul> -->
    <!-- <div class="container"> -->
      <h1>Login</h1>
      <form v-if="!$store.state.authUser" @submit.prevent="login" class="form-horizontal">
        <p class="error" v-if="formError">{{formError}}</p>
        <div class="form-group">
          <label for="username" class="control-label col-xs-offset-3 col-xs-3 col-md-3 col-sm-3">Username:</label> 
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="text" v-model="formUsername" name="username" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label for="passwd" class="control-label col-xs-3 col-md-3 col-sm-3">Password:</label>
          <div class="col-xs-9 col-md-9 col-sm-9">
            <input type="password" v-model="formPassword" name="passwd" class="form-control"/>
          </div>
        </div>
        <button type="submit" class="btn btn-default">Login</button>
      </form>
      <div v-else>
        Welcome {{$store.state.authUser.username}}!
        <p>I am the secret content, I am shown only when the use is connected.</p>
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout" class="btn btn-default">Logout</button>
      </div>
      <!-- </div> -->
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'CoolBitx Trader'
    }
  },
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          passwd: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      }
      catch(e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      }
      catch(e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
