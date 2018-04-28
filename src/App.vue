<template>
  <div id="app">
    <vheader></vheader>
    <div class="tab">tab</div>
    <div class="content">content</div>
  </div>
</template>

<script>
  import vheader from './components/header/header';
  export default {
    name: 'App',
    components:{
      vheader
    },
    created(){
      this.$http.get('http://localhost:8080/api/ratings').then((response) => {
        console.log(response);
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "./common/style/icon.css";
  $primary-color:red;
  .icon-add_circle{
    color: $primary-color;
  }
</style>
