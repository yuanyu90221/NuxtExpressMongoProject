<template>
  <nav class="navbar navbar-inverse">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myTest">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </button>
      <nuxt-link class="navbar-brand" to="/">
        <img alt="CoolWallet"/>
      </nuxt-link>
    </div>
    <div class="dropdown navbar-right">
      <div class="navbar-right icon dropdown-toggle" data-toggle="dropdown">
        <span class="glyphicon glyphicon-user"></span>
        <span v-if="$store.state.authUser">{{$store.state.authUser.username}}</span>
      </div>
      <ul class="dropdown-menu">
        <li class="nav" v-if="!$store.state.authUser">
          <nuxt-link to="/register" data-toggle="tab">Register</nuxt-link>
        </li>
        <li class="nav" v-if="!$store.state.authUser">
          <nuxt-link to="/" data-toggle="tab">login</nuxt-link>
        </li>
        <li class="nav" v-if="$store.state.authUser">
          <span @click="logout">Logout</span>
        </li>
      </ul>
    </div>
    <!-- shrink target -->
    <div class="collapse navbar-collapse" id="myTest">
      <ul class="nav navbar-nav">
        <li class="nav">
          <nuxt-link to="/news" data-toggle="tab">News</nuxt-link>
        </li>
        <li class="nav">
          <nuxt-link to="/" data-toggle="tab">Home</nuxt-link>
        </li>
        <li class="nav">
          <nuxt-link to="/buysell" data-toggle="tab">BuySell</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>  
</template>
<style lang="scss">
.icon {
  padding: 15px;
  color:#999;
  cursor: pointer;
  &:hover {
    color: white;
  }
  span {
    padding: 0 5px;
  }
}
.dropdown-menu > li > a {
  &:hover,focus,active {
    background-color: #fff;
    color: black;
  }
}
.dropdown-menu > li > span {
  padding: 3px 20px;
  display: block;
  cursor: pointer;
}
</style>
<script>
export default {
  methods: {
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