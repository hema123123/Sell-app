<template>
  <div id="app">
    <vheader :seller="seller"></vheader>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vheader from './components/header/header';

  const ERR_OK = 0;
  export default {
    name: 'App',
    components: {
      vheader
    },
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.data;
        if (res.errno == ERR_OK) this.seller = res.data;
      })
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "./common/style/icon.css";*/

  $primary-color: red;
  .icon-add_circle {
    color: $primary-color;
  }

  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, .1));
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.router-link-active {
        color: rgb(240, 20, 20);
      }
    }

  }
</style>
