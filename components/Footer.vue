<template>
  <footer>
    <!-- Visit our website for more documentation : <a href="https://nuxtjs.org" target="_blank">nuxtjs.org</a> -->
    <div class="clearDef">
      <div class="logo">
        <nuxt-link to="/">CBX.io</nuxt-link>
      </div>
      <div class="sns"><span><i class="fa fa-youtube-play"></i></span><span><i class="fa fa-facebook"></i></span><span><i class="fa fa-twitter"></i></span><span><i class="fa fa-instagram"></i></span></div>
    </div>
    <div class="submenuArea">
      <div class="submenu">
        <div class="menuHead">About</div>
        <div class="menuLi">About us</div>
        <div class="menuLi">
          <nuxt-link to="/news" class="menuLi">News</nuxt-link>
        </div>
        <div class="menuLi">Contact us</div>
      </div>
      <div class="submenu">
        <div class="menuHead">Help</div>
        <div class="menuLi">FAQ</div>
        <div class="menuLi">What is Bitcoin</div>
      </div>
      <div class="submenu">
        <div class="menuHead">Legal</div>
        <div class="menuLi">Privacy</div>
        <div class="menuLi">Terms of use</div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
$bg-color: #585757;
$icon-color: #909090;
$radius: 30px;
$font-Size: 20px;
$gap: 10px;

footer {
  background-color: $bg-color;
  width: 100% !important;
}
.clearDef {
  margin: 20px;
  padding: 10px;
  display:flex;
  width: 50%;
  color: white;
  .logo {
    display:flex;
    justify-content: flex-start;
    font-size: 2*$font-Size;
    > a{
      cursor: pointer;
      color: white;
      text-decoration: none;
    }
  }
  .sns {
      display: flex;
      width: 80%;
      justify-content: flex-end;
      span {
        cursor: pointer;
        display: flex;
        position:relative;
        height: $radius;
        width: $radius;
        font-size: $font-Size;
        background-color: $icon-color;
        border-radius: 50%;
        margin: $gap;
        justify-content:center;
        align-items: center;
      }
    }
}
.submenuArea {
    width: 50%;
    display: flex;
    flex-direction:row;
    margin-top: 20px;
  }
  .submenu {
    color: white;
    margin: 0 20px;
    padding-left: 20px;
    min-width: 140px;
    & > div {
      margin-right: 10px;
      margin-top: 10px;
      padding: 0;
    }
    .menuHead {
      font-size: 30px;
    }
    .menuLi {
      color: white;
      text-decoration: none;
    }
}
footer {
  display: flex;
  flex-direction: row;
  min-height: 25vh;
}
@media(max-width: 970px){
  footer {
    display: flex;
    flex-direction: column;
    margin:0;
    min-height: 100%;
  }
  .clearDef {
    width: 95%;
    .sns:last-child {
      margin-right: 20px;
    }
  }
  .submenuArea {
    width: 95%;
    display: flex;
    flex-direction:column;
    margin-top:0;
    // justify-content: flex-start;
  }
  // .submenu {
  //   justify-content: flex-start;
  // }
  .submenu:last-child {
    margin-bottom: 20px;
  }
}
</style>
