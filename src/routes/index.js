import VueRouter from 'vue-router';
import Vue from "vue";
import config from "./config";

Vue.use(VueRouter);
var router =new VueRouter(config)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router;
