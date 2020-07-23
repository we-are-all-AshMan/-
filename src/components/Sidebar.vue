<template>


<div class="bigbar">
    <el-scrollbar
        wrapClass="scrollbar-wrap"
        style="height: 100%"
        ref="scrollbarContainer">
        
   
<div id="sidebar">
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
     
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>政务办理</span>
        </template>
        
        <!-- <el-menu-item-group> -->
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1" @click='pageturna'>电子身份证</el-menu-item>
          <el-menu-item index="1-2" @click='pageturnb'>ETC办理</el-menu-item>
        <!-- </el-menu-item-group> -->

        
          <el-menu-item index="1-3" @click='pageturnc'>社保卡办理</el-menu-item>
  
<!-- 
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>新闻管理</span>
        </template>
        
       
          <el-menu-item index="2-1" @click='pageturnd'>疫情新闻</el-menu-item>
        

      </el-submenu>

      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </div>
    </el-scrollbar>
    </div>
     
</template>
<script>
  export default {
        data () {
        return {
            scrollHeight:'0px'
        };
    },
    mounted(){
        this.scrollHeight = window.innerHeight*0.7 + 'px';
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      pageturna(){
           this.$router.push('/idtable')
      },
      pageturnb(){
           this.$router.push('/etctable')
      },
      pageturnc(){
           this.$router.push('/ssctable')
      },
        pageturnd(){
           this.$router.push('/news')
      },
    }
  }
</script>

<style >
   .el-scrollbar{
      height: 200%;
   }
  .el-scrollbar__wrap { 
        overflow-x: hidden;
      } 
#sidebar{
margin-left: 0px;
margin-top:  0px;

/* width:100px;
left: -20px; */
height: 100%;

/* width:auto !important;
right: 0px; */
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
   
    margin-left: 0px;
  }
 .el-menu-item {
     padding-left: 20px; 
     min-width: 150px;
     margin-left: 0px;
     
 }
 .el-menu-item is-active{
     padding-left: 20px; 
     min-width: 150px;
     margin-left: 0px;
    
 }
  /* .el-menu-item{
      min-width: 200px;
  } */
.el-submenu .el-menu-item-group .el-menu-item{
    height: 50px;
    line-height: 50px;
    padding-left: 20px; 
    min-width: 150px;

    }
    .el-submenu .el-submenu .el-menu-item{
    height: 50px;
    line-height: 50px;
    padding-left: 20px; 
    min-width: 150px;

    }
    .el-submenu .el-submenu .el-menu-item{
    height: 50px;
    line-height: 50px;
    padding-left: 20px; 
    min-width: 150px;
}
.bigbar{
margin-left: 0px;
top:60px;
width:150px;
background-color:rgb(84,92,100);
left: -20px;
position: fixed;
height: 100%;
    }
</style>

