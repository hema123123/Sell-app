<template>
  <div id="app">
    <div class="icon-add_circle"></div>
    <vheader></vheader>
    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vheader from './components/header/header';

  export default {
    name: 'App',
    components: {
      vheader
    },
    created() {
      this.$http.get('http://localhost:8080/api/ratings').then((response) => {
        console.log(response);
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "./common/style/index.scss";

  $primary-color: red;
  .icon-add_circle {
    color: $primary-color;
  }

  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color:rgb(77,85,93);
      &.router-link-active{
        color:rgb(240,20,20);
      }
    }

  }
</style>
