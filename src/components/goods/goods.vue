<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex==index}" @click="selectMenu(index)">
          <span class="text"><support class="icon" v-show="item.type>0" :type="item.type" :size="3"></support>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list foot-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon"><img :src="food.icon" alt=""></div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span class="rating">好评{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newprice">￥{{food.price}}</span><span class="oldprice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <cartcontrol class="cartcontrol" :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>

<script>
  import support from '@/components/support/support';
  import BScroll from 'better-scroll';
  import shopcart from '@/components/shopcart/shopcart'
  import cartcontrol from '@/components/cartcontrol/cartcontrol'

  const ERR_OK = 0;
  export default {
    name: "goods",
    components: {
      support,shopcart,cartcontrol
    },
    props:{
      seller:{
        type:Object
      },
    },
    data() {
      return {
        goods: {},
        listHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods(){
        let selectFoods=[];
        this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            console.log(food);
            if(food.count) selectFoods.push(food);
          })
        })
        console.log("------------------------");
        return selectFoods;
      }
    },
    created() {
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno == ERR_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          })
        }
      });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click:true
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3,
          click:true
        });

        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('foot-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      selectMenu(index){
        let foodList = this.$refs.foodWrapper.getElementsByClassName('foot-list-hook');
        let el=foodList[index];
        this.foodScroll.scrollToElement(el,300);
      }
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
        padding: 0 12px;
        @extend .font;
        line-height: 14px;
        &.current{
          background: #fff;
          font-weight: 700;
          margin-top: -1px;
          z-index: 10;
          .text{
            @include border-none();
          }
        }
        .text {
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
          @include border-1px(rgba(7, 17, 27, .1));
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
        padding-bottom: 18px;
        @include border-1px(rgba(7, 17, 27, .1));
        .icon {
          flex: 0 0 56px;
          width: 56px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .content {
          width: 100%;
          position: relative;
          .name {
            margin: 2px 0 8px;
            font-size: 14px;
            line-height: 14px;
            color: rgb(7, 17, 27);
          }
          .extra {
            font-size: 0;
          }
          .desc, .extra {
            line-height: 10px;
            color: rgb(147, 153, 159);
          }
          .desc {
            margin: 8px 0;
            line-height: 12px;
          }
          .desc, .count, .rating {
            font-size: 10px;
          }
          .extra {
            .count {
              margin-right: 12px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            font-size: 0;
            .newprice {
              font-size: 14px;
              color: rgb(240, 20, 20);
              margin-right: 8px;
            }
            .oldprice {
              color: rgb(147, 153, 159);
              text-decoration: line-through;
              font-size: 10px;
            }
          }
          .cartcontrol{
            position: absolute;
            right: 0;
            bottom: 12px;
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

