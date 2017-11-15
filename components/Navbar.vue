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

</style>

