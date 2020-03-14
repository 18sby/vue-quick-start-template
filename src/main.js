// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import store from './store/index'
import '@/assets/style/common/reset.css'
import '@/assets/style/common/flex.css'
import '@/assets/style/common/public.css'

console.log( 'router', router )

Vue.config.productionTip = false

/* 全局过滤器 */
// 过滤器
import filters from '@/filters/index';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // => Vue.$router = router
  store, // => Vue.$store = store
  components: { App },
  template: '<App/>'
})
