<template>
  <div id="app">
    <div class="icon-add_circle"></div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created(){
      this.$http.get('http://localhost:8080/api/ratings').then((response) => {
        console.log(response);
      })
    }
  }
</script>

<style>
  @import "common/style/icon.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
