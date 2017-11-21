<template>
  <div id="msg-dialog" class="modal" role="dialog" aria-hidden="true" v-if="this.$store.state.isDialogShow">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- <div class="modal-header">
                <span class="cl-btn" @click="close">&times;</span>
            </div> -->
            <div class="modal-body">
                {{this.$store.state.dialogMsg}}
            </div>
            <button class="btn btn-default" @click="close" >Close</button>
            <!-- <button type="btn btn-default" class="close" data-dismiss="modal">Close</button> -->
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
      async close () {
          console.log('click')
          await this.$store.dispatch('changeDialogShow', {isDialogShow: false})
          await this.$store.dispatch('changeDialogMsg', {dialogMsg: null})
      }
  }
}
</script>

<style lang="scss">
    .modal {
        display: block;
    }
    #msg-dialog {
        top: 45vh;
        margin: 0 auto;

    }
    .modal-content > button {
        margin: auto;
        padding: 5px;
        display: flex;
        margin-bottom: 5px;
    }
</style>

