import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/home'

// ? 页面跳转时顶部的进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { routes } from './route/index';

// ? 进度条配置
NProgress.configure({
  showSpinner: false
});

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});