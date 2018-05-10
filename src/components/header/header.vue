<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="商铺头像">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports&&seller.supports.length" class="support">
          <support :type="seller.supports[0].type" :size="1"></support>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports&&seller.supports.length" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-img"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="商铺头像">
    </div>
    <div class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <star class="star" :size="48" :score="seller.score"></star>
          <div v-if="seller.supports&&seller.supports.length">
            <div v-for="support in seller.supports">
              <support :type="support.type" :size="2"></support>
              <span>{{support.description}}</span>
            </div>
          </div>
          <p>{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import star from "@/components/star/star";
  import support from "@/components/support/support";
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components:{
      star,support
    },
    created(){
      this.classMap=['decrease','discount','special','invoice','guarantee']
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/style/icon.css";


  .font{
    font-weight: $font-weigth;
    line-height: 12px;
  }
  $height:64px;

  .header {
    color: #fff;
    position: relative;
    overflow: hidden;
    background: rgba(1,17,27,.5);
    .content-wrapper {
      padding: 24px 12px 18px 24px;
      font-size: 0;
      position: relative;
      .avatar {
        width: 64px;
        height: 64px;
        display: inline-block;
        vertical-align: top;
        margin-right: 16px;
        border-radius: 2px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .content {
        display: inline-block;
        font-size: 14px;
        .title {
          margin: 2px 0 8px 0;
          font-size: 0;
          .brand {
            width: 30px;
            height: 18px;
            display: inline-block;
            @include bg-image("./images/brand");
            vertical-align: top;
          }
          .name{
            font-size: 16px;
            font-weight: bold;
            line-height: 18px;
            margin-left: 6px;
          }
        }
        .description{
          @extend .font;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .support{
          margin-bottom: 2px;
          font-size: 0;
          .text{
            @extend .font;
            font-size: 10px;
          }
        }
      }
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        border-radius: 14px;
        background: rgba(0,0,0,.2);
        font-size: 0;
        .count,.icon{
          font-size: 10px;
          line-height: 24px;
        }
        .count{
          margin-right: 2px;
        }
      }
    }
    .bulletin-wrapper{
      height: 28px;
      display: flex;
      background: rgba(7,12,27,.2);
      align-items: center;
      padding: 0 12px;
      font-size: 0;
      .bulletin-img{
        width: 22px;
        height: 12px;
        border-radius: 2px;
        @include bg-image("./images/bulletin");
      }
      .bulletin-text{
        flex: 1;
        margin: 0 4px;
        @extend .font;
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon{
        font-size: 12px;
      }
    }
    .background{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
      img{
        width: 100%;
      }
    }
    .detail{
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7,17,27,.8);
      .detail-wrapper{
        width: 100%;
        min-height: 100%;
        .detail-main{
          padding: $height 36px;
          .name{
            font-size: 16px;
            line-height: 16px;
            font-weight: 700;
            text-align: center;
          }
          .star{
            text-align: center;
          }
        }
      }
      .detail-close{
        position: relative;
        width: 100%;
        height: 64px;
        font-size: 32px;
        line-height: 64px;
        color: rgba(255,255,255,.5);
        margin-top: -$height;
        text-align: center;
        clear: both;
      }
    }
  }


</style>
