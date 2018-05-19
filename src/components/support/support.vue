<template>
    <span :class="supportClass" class="supportIcon"></span>
</template>

<script>
  export default {
    name: "support",
    props: {
      type: {
        type: Number
      },
      size: {
        type: Number
      }
    },
    computed: {
      supportClass() {
        return this.classMap[this.type] + "_" + this.size+" "+"icon" + "_" + this.size;
      },
      icon(){
        return "icon" + "_" + this.size;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="scss" scoped>
  .supportIcon {
    display: inline-block;
    vertical-align: top;
    &.icon_1{
      width: 12px;
      height: 12px;
      margin-right: 4px;
      &.decrease_1 {
        @include bg-image("./images/decrease_1");
      }
      &.discount_1 {
        @include bg-image("./images/discount_1");
      }
      &.guarantee_1 {
        @include bg-image("./images/guarantee_1");
      }
      &.invoice_1 {
        @include bg-image("./images/invoice_1");
      }
      &.special_1 {
        @include bg-image("./images/special_1");
      }
    }
    &.icon_2 {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      &.decrease_2 {
        @include bg-image("./images/decrease_2");
      }
      &.discount_2 {
        @include bg-image("./images/discount_2");
      }
      &.guarantee_2 {
        @include bg-image("./images/guarantee_2");
      }
      &.invoice_2 {
        @include bg-image("./images/invoice_2");
      }
      &.special_2 {
        @include bg-image("./images/special_2");
      }
    }
    &.icon_3 {
      width: 12px;
      height: 12px;
      margin-right: 2px;
      &.decrease_3 {
        @include bg-image("./images/decrease_3");
      }
      &.discount_3 {
        @include bg-image("./images/discount_3");
      }
      &.guarantee_3 {
        @include bg-image("./images/guarantee_3");
      }
      &.invoice_3 {
        @include bg-image("./images/invoice_3");
      }
      &.special_3 {
        @include bg-image("./images/special_3");
      }
    }
    &.icon_4 {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      &.decrease_4 {
        @include bg-image("./images/decrease_4");
      }
      &.discount_4 {
        @include bg-image("./images/discount_4");
      }
      &.guarantee_4 {
        @include bg-image("./images/guarantee_4");
      }
      &.invoice_4 {
        @include bg-image("./images/invoice_4");
      }
      &.special_4 {
        @include bg-image("./images/special_4");
      }
    }
  }
</style>
