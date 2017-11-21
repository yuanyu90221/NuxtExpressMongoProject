<template>
  <div class="root">
    <div class="content" :class="{mask: this.$store.state.isDialogShow||this.$store.state.isProcessing }">
      <nav-bar/>
      <nuxt/>
    </div>
    <my-footer :class="{mask: this.$store.state.isDialogShow||this.$store.state.isProcessing }"/>
    <my-processing/>
    <my-dialog/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import NavBar from '~/components/Navbar.vue'
import MyProcessing from '~/components/Processing.vue'
import MyDialog from '~/components/Modal.vue'
export default {
  components: {
    MyFooter,
    NavBar,
    MyProcessing,
    MyDialog
  }
}
</script>

<style>
.container
{
  /* margin: 0; */
  width: 100%;
  /* padding: 100px 0; */
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
