import Vue from 'vue' ;
import VueRouter from 'vue-router' ;

import Main from '../pages/main/main.vue' ;
import Matter from '../pages/matter/matter.vue' ;
import Category from '../pages/category/category.vue' ;
import ShopCart from '../pages/shopcart/shopcart.vue' ;
import Profile from '../pages/profile/profile.vue' ;
import Login from '../pages/profile/login/login.vue' ;

Vue.use(VueRouter) ;
export default new VueRouter({
  routes: [
    {
      path: '/main',
      component: Main ,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/matter',
      component: Matter,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }

    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        showFooter: true
      }

    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: false
      },
      children: [
        {
          path: '/profile/login',
          component : Login
        }
      ]
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
