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
    

</style>