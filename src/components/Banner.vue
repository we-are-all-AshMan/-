<template>
<div class="banner-container">
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in box" :key="item.id">
    <img class="medium" :src="item.url"><img>
    </el-carousel-item>
  </el-carousel>
  <!-- <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in box" :key="item">
      <img :src="item.url"><img>
    </el-carousel-item>
  </el-carousel> -->
  </div>
</template>
<script>
export default
{
data(){
    return {
        box:[
{ url: require("../assets/banner/banner1.jpeg")
 },
{ url: require("../assets/banner/banner2.jpeg")
 },
{ url: require("../assets/banner/banner3.jpeg")
 },
{ url: require("../assets/banner/banner1.jpeg")
 }

        ]
    }
}
}
</script>

<style scoped>

.banner-container{
    position: absolute;
  left: 122px;
  right:0;
  top: 60px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>