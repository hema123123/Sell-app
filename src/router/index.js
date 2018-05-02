import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const seller = resolve => {require(['@/components/seller/seller'], resolve)};
const goods = resolve => {require(['@/components/goods/goods'], resolve)};
const ratings = resolve => {require(['@/components/ratings/ratings'], resolve)};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }, {
      path: '/goods',
      name: 'goods',
      component: goods
    }, {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
