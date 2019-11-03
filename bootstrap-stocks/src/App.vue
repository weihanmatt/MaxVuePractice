<template>
    <div class="container">
      <app-header></app-header>
      <div class="row">
        <div class="col-xs-12">
          <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>

    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        components:{
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
 body{
   padding: 30px;
 }
</style>
