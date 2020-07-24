
<template>
  <div class="header">
    <!-- <div class="header-container">
      <div class="container"> -->
        <div class="logo">
          <!-- 声明式导航 -->
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo20.png" alt="" style="width:130px;height:55px" />
          </router-link>
        </div>
        <!-- <div class="nav"> -->
          <!-- <div><router-divnk :to="{ name: 'Home' }">首页</router-divnk></div>
          <div v-if="isLoading">loading...</div>
          <div v-for="item in data.sdivce(0, 5)" :key="item.channedivd">
            <router-divnk
              :to="{
                name: 'ChannelNews',
                params: {
                  id: item.channedivd,
                },
              }"
              >{{ item.name }}</router-divnk
            >
          </div> -->
          <!-- <div class="nav_item"><router-link :to="{ name: 'Home' }">首页</router-link></div> -->
          <!-- <div class="nav_item"><a href="">模块1</a></div>
          <div class="nav_item"><a href="">模块2</a></div>
          <div class="nav_item"><a href="">模块3</a></div>
          <div class="nav_item"><a href="">模块4</a></div> -->
        <!-- </div> -->
        <!-- <div class="user"> -->
          <!-- 情况1：正在远程加载中 -->
          <!-- <span v-if="isLogining">loading...</span> -->
          <!-- 情况2：当前有登录用户 -->
          <!-- <template v-else-if="loginUser">
            <router-divnk :to="{ name: 'Personal' }">{{
              loginUser.nickname
            }}</router-divnk>
            <a href="" @cdivck.prevent="handleLoginOut">退出登录</a>
          </template>
          <template v-else> -->
            <!-- <router-link :to="{ name: 'Login' }">登录</router-link>
            <router-link :to="{ name: 'Reg' }">注册</router-link> -->
          <!-- </template> -->
        <!-- </div> -->
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
export default{
    name:"Header"
}
// import { mapState } from "vuex";
// export default {
//   computed: {
//     ...mapState("channels", ["data", "isLoading"]), // {data(){}, isLoading(){}}
//     ...mapState("loginUser", {
//       loginUser: "data",
//       isLogining: "isLoading",
//     }), // {loginUser(){}, isLogging(){}}
//   },
//   methods: {
//     handleLoginOut() {
//       this.$store.dispatch("loginUser/loginOut");
//       this.$router.push({ name: "Login" });
//     },
//   },
// };
</script>

<style scoped>
.header {
  height: 60px;
  background: #000;
 
  color: #fff;
   line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
}
.logo {

    margin-left: 60px;
    padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  height: 100%;

}
.nav {
  /* margin: 0 60px; */
  margin-left:100px ;
  margin-right: 100px;
 
  display: flex;
  flex-grow: 1;
}
.nav_item {
  display: block;
  padding: 0 30px;
}

.user {
  font-size: 14px;
  margin-right: 50px;
}
.user * {
  margin-left: 20px;
 
}
.header a {
  color: #fff;
}
</style>
