<template>
  <div id="app">

  
  <div class="container">
      <!-- 该组件会根据不同的访问路径，渲染不同的组件 -->
      <router-view></router-view>
   
   
    </div>
  </div>
</template>

<script>


// export default {

//   components: {
  
//   },
// };
</script>
<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #314253;
  /* margin-top: 60px; */
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
}
.container{
  margin: 30px auto;
  
}
</style>
