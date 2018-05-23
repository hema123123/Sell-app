<template>
    <div class="cartcontrol">
      <transition name="fade">
      <div class="cart-decrease" v-show="food.count" @click="decreaseCount">
        <i class="icon-remove_circle_outline"></i></div>
      </transition>
      <div class="cart-count" v-show="food.count">{{food.count}}</div>
      <div class="cart-increase" @click="addCount"><i class="icon-add_circle"></i></div>
    </div>
</template>

<script>
  import Vue from 'vue';
    export default {
        name: "cartcontrol",
      props:{
          food:{
            type:Object
          }
      },
      methods:{
        addCount(){
          if(!this.food.count) Vue.set(this.food,"count",1);  //利用Vue.set方法给food添加不存在的属性
          else this.food.count++;
        },
        decreaseCount(){
          if(this.food.count) this.food.count--;
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../common/style/icon.css";
  .cartcontrol{
    font-size: 0;
    .cart-decrease,.cart-increase{
      display: inline-block;
      color:rgb(0,160,220);
      font-size: 24px;
      line-height: 24px;
      padding: 6px;   //为了增大用户点击区域
      transform: rotate(180deg);
    }
    .cart-count{
      width: 12px;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      font-size: 10px;
      line-height: 24px;
      color:rgb(147,153,159);
      padding: 6px 0;
    }

    .cart-decrease {
      opacity: 1;
      transform:translate3d(0,0,0);
      transform: rotate(180deg);
      &.fade-enter-active, &.fade-leave-active {
        transition: all .3s;
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
        transform:translate3d(24px,0,0);
      }
    }
  }
</style>
