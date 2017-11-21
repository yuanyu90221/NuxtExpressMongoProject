<template>
    <div class="spinner" v-if="$store.state.isProcessing">
        <i class="fa fa-spinner fa-spin"></i>
    </div>    
</template>

<style lang="scss" scoped>
    .spinner > i {
        font-size: 50px;
        color: red;
    }
    .spinner {
        display: block;
        position: absolute;
        top: 45vh;
        margin: 0 auto;
        left: 45vw;
    }
</style>

