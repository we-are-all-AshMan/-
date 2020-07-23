<template>
  <div class="div-top">
    <h1 style="center">AIGOV</h1>
    <form class="login-container" style='center'>
      <div class="form-item" style='center'>
       
        <div class="input">
          <label style="text-align: center;">用户名</label>
          
          <el-input
            type="text"
            v-model="userName"
            placeholder="username"
          ></el-input>
          <br />     
        </div>
        <br />

        <div class="input">
          <label style="text-align: center;">密码</label>
          <br />
          <el-input
            type="password"
            v-model="password"
            placeholder="password"
          ></el-input>
        </div>
        <br />
      </div>
    </form>
    <form class="login-container" style='center'>


      <div class='input'>
        <label style="center">手机号</label>
        <el-input
          style="width: 200px;margin-left: 14px"
          type="text"
          v-model="phoneNumber"
          placeholder="telephone"
        />
        <el-button
          type="success"
          round
          size="medium"
          style="margin-left: 20px"
          @click="codeClicked"
          >验证码</el-button
        >
        <br />
      </div>
      <br />
      <div class='input'>
        <label style="center">验证码</label>
        <el-input
          style="width: 200px;margin-left: 14px"
          type="text"
          v-model="inputCode"
          placeholder="verify code"
        />
        <el-button
          type="primary"
          round
          size="medium"
          style="margin-left: 20px"
          @click="loginClicked">请登录
          <!-- <router-link :to="{ name: 'Home' }" v-if="zhuzhanan">.</router-link> -->
          </el-button
        >
      </div>
    </form>














    <form class="login-container">
      <div class='input'>
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
  // created(){
  //    var res = identity.getAllIdentities().then((res)=>{
  //      console.log(res);
  //    });
  //    this.dataTable = res;
  // },
  data() {
    return {
      userName: "",
      password: "",
      code: "",
      inputCode: "",
      //dataTable:[],
      phoneNumber: "",
      error: "",
      // zhuzhanan:false,
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
          this.$router.push('/home')
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
    async codeClicked() {
      if (this.phoneNumber.length != 11) {
        this.error = "手机号有误";
        console.log(this.error);
      } else if (this.userName == "" || this.password == "") {
        this.error = "请输入账号或密码";
        console.log(this.error);
      } else {
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
  width: 400px;
  margin-left:570px;
}

.form-item .input {
  display: flex;
  margin-left: auto;
}
.form-item label {
  width: 100px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}

.form-item input,
.form-item button {
  flex-grow: 1;
  margin: auto;
}
.div-top {
  margin-top: 150px;
}
</style>
