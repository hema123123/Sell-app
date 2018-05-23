<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'hightClass':totalCount>0}"><i class="icon icon-shopping_cart"></i></div>
            <div class="count" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'hightClass':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="des">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="{'hightClass':totalPrice>=minPrice}">{{payText}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopcart",
      props:{
        selectFoods:{
          type:Array,
          default(){
            return [{
              price:12,
              count:2
            }]
          }
        },
        deliveryPrice:{
          type:Number,
          default:0
        },
        minPrice:{
          type:Number,
          default:0
        }
      },
      computed:{
        totalCount(){
          let count=0;
          this.selectFoods.forEach((food)=>{
            count+=food.count;
          })
          return count;
        },
        totalPrice(){
          let price=0;
          this.selectFoods.forEach((food)=>{
            price+=food.price*food.count;
          })
          return price;
        },
        payText(){
          if(this.totalPrice===0){
            return `￥${this.minPrice}起送`;
          }else if(this.totalPrice<this.minPrice){
            return `还差￥${this.minPrice-this.totalPrice}起送`;
          }else{
            return '去结算';
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../common/style/icon.css';
  .shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    .content{
      display: flex;
      color:rgba(255,255,255,.4);
      .content-left{
        flex: 1;
        $background:#141d27;
        background:$background;
        font-size: 0;
        .logo-wrapper{
          display: inline-block;
          vertical-align: top;
          width: 56px;
          height: 56px;
          margin: 0 12px;
          padding: 6px;
          box-sizing: border-box;
          border-radius: 50%;
          background:$background;
          position: relative;
          top:-12px;
          .logo{
            width: 100%;
            height: 100%;
            text-align: center;
            background: #2b343c;
            border-radius: 50%;
            .icon{
              font-size: 26px;
              line-height: 44px;
            }
            &.hightClass{
              background: rgb(0,160,220);
              .icon{
                color:#fff;
              }
            }
          }
          .count{
            position: absolute;
            right: 0;
            top:0;
            width: 24px;
            height: 16px;
            text-align: center;
            border-radius: 9px;
            padding: 0 6px;
            box-sizing: border-box;
            line-height: 16px;
            color:#fff;
            font-size: 9px;
            font-weight: 700;
            background: rgb(240,20,20);
            box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
          }
        }
        .price{
          display: inline-block;
          font-size: 16px;
          font-weight: 700;
          margin: 10px 0;
          padding-right: 12px;
          line-height: 24px;
          border-right:1px solid rgba(255,255,255,.2);
          &.hightClass{
            color:#fff;
          }
        }
        .des{
          display: inline-block;
          margin: 16px 0;
          font-size: 10px;
          padding-left: 12px;
          vertical-align: top;
        }
      }
      .content-right{
        flex: 0 0 105px;
        width: 105px;
        font-size: 12px;
        line-height: 48px;
        font-weight: 700;
        background: #2b343c;
        text-align: center;
        &.hightClass{
          background: #00b43c;
          color:#fff;
        }
      }
    }
  }
</style>
