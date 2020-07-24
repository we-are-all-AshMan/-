/*
 * @Author: zouwenye 
 * @Date: 2020-07-24 17:22:01 
 * @Last Modified by:   zouwenye 
 * @Last Modified time: 2020-07-24 17:22:01 
 */

import VueRouter from 'vue-router';
import Vue from "vue";
import config from "./config";

Vue.use(VueRouter);
var router =new VueRouter(config)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, from, next) => {
   if (to.path === '/') {
      next();
      //console.log(next)
   } else {// 每次页面跳转执行，token或openId錯誤，均提示跳转到首页
      let userName = sessionStorage.getItem('userName');
      //console.log(userName)
      if (userName === null || userName === '' || userName === undefined) {
         Toast('userName错误，请重新登录')
         setTimeout(function () {
            next('/Home');
         },1000)
      }else{
         next();
      }
   }
});


export default router;
