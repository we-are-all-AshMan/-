/*
 * @Author: zouwenye 
 * @Date: 2020-07-24 17:04:59 
 * @Last Modified by:   zouwenye 
 * @Last Modified time: 2020-07-24 17:04:59 
 */
<template>
    <div style="height=100%">
         <Banner />
         <Header/>
  <Sidebar/>
   

<!-- 
    <el-calendar style="height=50%">
  
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar> 
-->
<div style="display:flex; position:absoluted;margin-left:120px;margin-top:390px">
<el-calendar style="width:800px">
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>



 <div class="block" style="margin-top:100px">
<!--   
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline> -->


   <el-timeline>
    <el-timeline-item timestamp="2020/7/23" placement="top">
      <el-card>
        <h4>管理端开发日志</h4>
        <p>页面设计初步完成 2020/7/21 23:55</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020/4/3" placement="top">
      <el-card>
        <h4>管理端开发日志</h4>
        <p>实现了新闻页和后端的实时交互 2020/7/23 01:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020/7/24" placement="top">
      <el-card>
        <h4>管理端开发日志</h4>
        <p>完成了登陆页的界面美化 2020/7/24 02:56</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>


</div>





 </div>












</template>
<script>
import Banner from "../components/Banner";
import Sidebar from '../components/Sidebar'
import Header from "../components/Header"
export default{
      name: "calendar",
        data(){


          return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
      };
            return {
               
               calendarData: [
                    { months: ['09', '11'],days: ['15'],things: '看电影' },
                    { months: ['10', '11'], days: ['02'],things: '去公园野炊' },
                    { months: ['11'], days: ['02'],things: '看星星' },
                    { months: ['11'], days: ['02'],things: '看月亮' }   
                ],
                value: new Date()
            }


        },

 components:{
     Banner,
       Sidebar,
    Header
 },
 
};
</script>
<style>
/* 
    .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    } */
    
 .is-selected {
    color: #1989FA;
  }
</style>