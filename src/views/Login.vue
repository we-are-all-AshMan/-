<template>
  <div class="div-top">
    <h1 style="position:fixed;left:60px;top:-20px;color:dark ; font-size:60px;white-space:nowrap">AIGOV</h1>

    <form class="login-container">
      <!-- 注意这个absolute所代表的相对含义 -->
      <font style="position: absolute; 
  top:18px;left:75px;color:rgb(32,127,207)"
  
  >欢迎登陆AIGOV指尖政务管理平台！</font>
      <!-- <div class="form-item" style="center"> -->
     
      <div class="input">
        <!-- <label style="text-align: center;">用户名</label> -->
         
         <br/>
        <el-input
          style="width: 300px;padding-left: 50px;padding-top:51px;"
          type="text"
          v-model="userName"
          placeholder="请输入用户名"
        ></el-input>
        <br />
      </div>
      <!-- </div> -->
      <br />

      <div class="input">
        <!-- <label style="text-align: center;">密码</label>
    -->
        <el-input
          style="width: 300px;padding-left: 50px"
          type="password"
          v-model="password"
          placeholder="请输入密码"
        ></el-input>
      </div>

      <br />

      <!-- </form>
    
    
    <form class="login-container" style="center"> -->

      <div class="input">
        <!-- <label style="center">手机号</label> -->
        <el-input
          style="width: 200px;padding-left: 50px"
          type="text"
          v-model="phoneNumber"
          placeholder="请输入手机号"
        />
        <el-button
          type="success"
          :disabled="isClick"
          round
          size="medium"
          style="margin-left: 20px"
          @click="codeClicked"
          >{{ !isClick ? "验证码" : `${this.time}s` }}</el-button
        >

        <br />
      </div>

      <br />

      <div class="input">
        <!-- <label style="center">验证码</label> -->
        <el-input
          style="width: 200px;padding-left: 50px"
          type="text"
          v-model="inputCode"
          placeholder="请输入验证码"
        />
        <el-button
          type="primary"
          round
          size="medium"
          style="margin-left: 20px"
          @click="loginClicked"
          >请登录
          <!-- <router-link :to="{ name: 'Home' }" v-if="zhuzhanan">.</router-link> -->
        </el-button>
      </div>
    </form>

    <form class="login-container2">
      <div class="input">
        <br />
        <el-alert
          v-if="error == '账号或密码错误'"
          center
          title="账号或密码错误"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '验证码错误'"
          center
          title="验证码错误"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '手机号有误'"
          center
          title="手机号有误"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '发送验证码失败,请检查手机号是否正确'"
          center
          title="发送验证码失败,请检查手机号是否正确"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '服务器无响应'"
          center
          title="服务器无响应"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '请输入账号或密码'"
          center
          title="请输入账号或密码"
          type="error"
        ></el-alert>
        <el-alert
          v-if="error == '请输入验证码'"
          center
          title="请输入验证码"
          type="error"
        ></el-alert>
      </div>
    </form>
  </div>
</template>

<script>
import { sendLogin, sendCode } from "../services/login";
import * as identity from "../services/identity";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      code: "",
      inputCode: "",
      phoneNumber: "",
      error: "",
      timer: null,
      time: 60,
      isClick: false, //按钮可以点击
    };
  },
  methods: {
    async loginClicked() {
      var req = "";
      // sendLogin({
      //     userName: this.userName,
      //     password: this.password
      //   }).then(res => {
      //     req=res.data;
      //     console.log(req);
      //   });
      if (this.userName == "" || this.password == "") {
        this.error = "请输入账号或密码";
        return;
      }
      if (this.inputCode == "") {
        this.error = "请输入验证码";
        return;
      }
      if (this.code == this.inputCode && this.code != "") {
        console.log(this.userName + this.password);
        var res = await sendLogin({
          userName: this.userName,
          password: this.password,
        });
        var req = res.data;
        if (req.code == "203") {
          console.log("登录成功");
          //跳转主页

        sessionStorage.setItem("userName",this.userName);

          this.$router.push("/home");
        } else if (req.code == "202") {
          this.error = "账号或密码错误";
          console.log(this.error);
        } else {
          console.log(req.code);
          this.error = "服务器无响应";
          console.log(this.error);
        }
      } else {
        this.error = "验证码错误";
      }
    },
    autoStart() {
      this.timer = setInterval(() => {
        console.log(this.timer);
        if (this.time == 0) {
          this.autoStop();
          this.isClick = false;
          return;
        }
        this.time--;
      }, 1000);
    },
    autoStop() {
      clearInterval(this.timer);
      console.log(this.timer);
      this.timer = null;
      this.time = 60;
    },
    /**
     * 发送验证码
     */
    async codeClicked() {
      if (this.phoneNumber.length != 11) {
        this.error = "手机号有误";
        console.log(this.error);
      } else if (this.userName == "" || this.password == "") {
        this.error = "请输入账号或密码";
        console.log(this.error);
      } else {
        //按钮禁用
        this.isClick = true;
        this.autoStart();
        var res = await sendCode(this.phoneNumber);
        console.log(res);
        if (res.code == "299") {
          this.code = res.data;
        } else {
          this.error = "发送验证码失败,请检查手机号是否正确";
          console.log(this.error);
        }
      }
    },
  },
};
</script>

<style>
.login-container {
  margin: auto;
  height: 290px;
  width: 400px;

white-space:nowrap;

  /* 让里面的模块全部居中（s水平居中，垂直居中），此处是让div-top里的login-container居中            */
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: rgb(255, 255, 255);
}
.login-container .input {
  display: flex;
  /* margin-left: auto; */
}
.login-container2 {
  margin: 0 auto;
  width: 400px;
}

.form-item label {
  width: 100px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}

.form-item button {
  flex-grow: 1;
  margin: auto;
}
.div-top {
  /* width: 400px;
            height: 300px;
            background: orange;
            margin: 0 auto; 
            position: relative;
            top: 50%; 
            transform: translateY(-50%);
 */

  /* 使最外面的即div-top水平居中垂直居中 ， position: relative;top=50%后再减去宽度的一半*/
 top:0; 
left:-8px; 
height:100%; 
width:100%; 
position: absolute;
   /*水平居中*margin: 0 auto;/
  
  /* top: 50%; 
  margin-top: -250px; */

background:url('../assets/image.jpg');
background-position:center; 
background-repeat: no-repeat; 
background-attachment:fixed; 
/* 图片是否随浏览器缩放 */
background-size: cover;

  /*里面的模块垂直居中 display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
              align-items: center;
        -webkit-justify-content: center;
              justify-content: center; */
}
</style>
