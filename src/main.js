import Vue from 'vue' ;


import App from './app.vue' ;
import router from './router' ;
import store from './vuex/store' ;
import './mock/mockServer';

new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  store
})
