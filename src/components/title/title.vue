<template>
  <div class="vtitle">
    <div class="line"></div>
    <h2 class="text">{{text}}</h2>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: "vtitle",
    props: {
      text: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  .vtitle {
    width: 100%;
    margin: 28px auto 24px;
    display: flex;
    .line {
      flex: 1;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      position: relative;
      top: -6px;
    }
    .text {
      padding: 0 12px;
      font-size: 14px;
      line-height: 14px;
      font-weight: 700;
    }
  }
</style>
