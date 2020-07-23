
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { sendCode, sendLogin } from "./Services/login";
import * as news from "./Services/news.js";
import * as identities from "./Services/identity.js"
import * as etcs from "./Services/etc.js"
import * as socials from './Services/securityCard'

Vue.use(ElementUI);
Vue.config.productionTip = false;

//测试登录
async function login(){
     var res = await sendLogin({
     userName:'admin',
     password:"123456",
   });
   console.log(res.data);
 }
login();

// 测试发送验证码
// async function send(){
//   var res = await sendCode("15008225691");
//   console.log(res);
// }
// send();

//测试刷新新闻
async function news1() {
  var res = await news.refreshNews();
  console.log(res);
}
news1();


async function identity1(){
  var res = await identities.updateState({
    openId:"1",
  });
  console.log(res);
}
identity1();

async function identity2(){
  var res = await identities.getAllIdentities();
  console.log(res);
}
identity2();

async function etc1(){
  var res = await etcs.updateState({
    car:"abcde",
  });
  console.log(res);
}

etc1();

async function social1(){
  var res = await socials.getByState(3);
  console.log(res);
}

social1();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
