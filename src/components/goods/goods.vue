<template>
  <div class="goods">
    <ul class="menu-wrapper">
      <li v-for="item in goods" class="menu-item">
        <span class="text"><support class="icon" v-show="item.type>0" :type="item.type" :size="3"></support>{{item.name}}</span>
      </li>
    </ul>
    <ul class="food-wrapper">
      <li v-for="item in goods" class="food-list">
        <h1 class="title">{{item.name}}</h1>
        <ul>
          <li v-for="food in item.foods" class="food-item">
            <div class="icon"><img :src="food.icon" alt=""></div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span class="rating">好评{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="newprice">￥{{food.price}}</span><span class="oldprice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import support from '@/components/support/support';

  const ERR_OK = 0;
  export default {
    name: "goods",
    components: {
      support
    },
    data() {
      return {
        goods: {}
      }
    },
    created() {
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno == ERR_OK) this.goods = res.data;
      })
    }
  }
</script>

<style lang="scss" scoped>
  .goods {
    display: flex;
    width: 100%;
    position: absolute;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        display: table;
        width: 56px;
        height: 54px;
        margin: 0 12px;
        @extend .font;
        line-height: 14px;
        @include border-1px(rgba(7, 17, 27, .1));
        .text {
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
        }
      }
    }
    .food-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      .title {
        padding-left: 14px;
        background: #f3f5f7;
        border-left: 2px solid #d9dee1;
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        color: rgb(147, 153, 159);
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom:18px ;
        @include border-1px(rgba(7, 17, 27, .1));
        .icon {
          flex: 0 0 56px;
          width: 56px;
          margin-right: 10px;
          img{
            width: 100%;
          }
        }
        .content{
          .name{
            margin: 2px 0 8px;
            font-size: 14px;
            line-height: 14px;
            color:rgb(7,17,27);
          }
          .extra{
            font-size: 0;
          }
          .desc,.extra{
            line-height: 10px;
            color:rgb(147,153,159);
          }
          .desc{
            margin: 8px 0;
          }
          .desc,.count,.rating{
            font-size: 10px;
          }
          .extra{
            .count{
              margin-right: 12px;
            }
          }
          .price{
            font-weight: 700;
            line-height: 24px;
            .newprice{
              font-size: 14px;
              color:rgb(240,20,20);
              margin-right: 18px;
            }
            .oldprice{
              color:rgb(147,153,159);
              text-decoration: line-through;
              font-size: 10px;
            }
          }
        }
        &:last-child {
          @include border-none();
          margin-bottom: 0;
        }
      }
    }
  }
</style>

