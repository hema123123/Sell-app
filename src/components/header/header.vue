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
      <div v-if="seller.supports&&seller.supports.length" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-img"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="商铺头像">
    </div>
    <transition name="fade" >
      <div class="detail" v-show="isShowDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <star class="star" :size="48" :score="seller.score"></star>
            <vtitle :text="this.title[0]"></vtitle>
            <ul v-if="seller.supports&&seller.supports.length" class="support-wrapper">
              <li v-for="support in seller.supports" class="support-item">
                <support :type="support.type" :size="2"></support>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <vtitle :text="this.title[1]"></vtitle>
            <p class="bulletin">
              {{seller.bulletin}}
            </p>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import star from "@/components/star/star";
  import support from "@/components/support/support";
  import vtitle from "@/components/title/title";

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star, support,vtitle
    },
    data() {
      return {
        isShowDetail: false,
      }
    },
    created() {
      this.title=["优惠信息","商家公告"]
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      showDetail() {
        this.isShowDetail = true;
      },
      hideDetail() {
        this.isShowDetail = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/style/icon.css";


  $height: 64px; /*sticky foot高度*/

  .header {
    color: #fff;
    position: relative;
    overflow: hidden;
    background: rgba(1, 17, 27, .5);
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
          .name {
            font-size: 16px;
            font-weight: bold;
            line-height: 18px;
            margin-left: 6px;
          }
        }
        .description {
          @extend .font;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .support {
          margin-bottom: 2px;
          font-size: 0;
          .text {
            @extend .font;
            font-size: 10px;
          }
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, .2);
        font-size: 0;
        .count, .icon {
          font-size: 10px;
          line-height: 24px;
        }
        .count {
          margin-right: 2px;
        }
      }
    }
    .bulletin-wrapper {
      height: 28px;
      display: flex;
      background: rgba(7, 12, 27, .2);
      align-items: center;
      padding: 0 12px;
      font-size: 0;
      .bulletin-img {
        width: 22px;
        height: 12px;
        border-radius: 2px;
        @include bg-image("./images/bulletin");
      }
      .bulletin-text {
        flex: 1;
        margin: 0 4px;
        @extend .font;
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon {
        font-size: 12px;
      }
    }
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
      img {
        width: 100%;
      }
    }
    .detail {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7, 17, 27, .8);
      backdrop-filter: blur(10px); /*只有ios背景模糊效果*/
      .detail-wrapper {
        width: 100%;
        min-height: 100%;
        .detail-main {
          padding: $height 36px;
          .name {
            font-size: 16px;
            line-height: 16px;
            font-weight: 700;
            text-align: center;
          }
          .star {
            margin-top: 16px;
            text-align: center;
          }

          .support-wrapper {
            padding: 24px 12px 28px;
            .support-item {
              margin-bottom: 12px;
              font-size: 0;
              &:last-child {
                margin-bottom: 0;
              }
              .text {
                font-size: 12px;
                @extend .font;
                line-height: 16px;
              }
            }
          }
          .bulletin {
            @extend .font;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
      .detail-close {
        position: relative;
        width: 100%;
        height: 64px;
        font-size: 32px;
        line-height: 64px;
        color: rgba(255, 255, 255, .5);
        margin-top: -$height;
        text-align: center;
        clear: both;
      }
    }
    /*detail过度效果*/
    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }


</style>
