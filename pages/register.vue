<template>
  <div class="container">
      <h1>Please login to see the content</h1>
      <form class="formControl" v-if="!$store.state.authUser" @submit.prevent="register">
        <p class="error" v-if="formError">{{registerError}}</p>
        <p>Username: <input type="text" v-model="registerUsername" name="username"/></p>
        <p>Password: <input type="password" v-model="registerPassword" name="passwd"/></p>
        <p>Confirmed Password: <input type="password" v-model="registerCkPassword" name="cfrPasswd"/></p>
        <p>Email:<input type="email" v-model="registerEmail" name="email"/></p>
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
export default {
  data () {
    return {
      registerError: null,
      registerUsername: '',
      registerPassword: '',
      registerCkPassword: '',
      registerEmail:''
    }
  }
}
</script>
