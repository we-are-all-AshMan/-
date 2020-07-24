/*
 * @Author: zouwenye 
 * @Date: 2020-07-24 17:05:07 
 * @Last Modified by:   zouwenye 
 * @Last Modified time: 2020-07-24 17:05:07 
 */
<template>
  <!-- create table identities(
openId char(100) primary key,微信授权ID
name char(10),真实姓名
gender char(2),性别
place char(100),籍贯
idNum char(18),身份证号
imageUrl TEXT，照片URL（）
state int状态（3）待审核（4）审核通过
scope.row.state
); -->
  <!-- <div class=".idtable-container" > -->
  <div>
    <Header />
    <Sidebar />
  
  <el-table
    ref="filterTable"
    :data="table"
    height="100%"
    border
  
  >
    <!-- height="250" border style="width: 100%"> -->
    <el-table-column   prop="openId" label="微信账号" width="180">
    </el-table-column>
    <el-table-column align="center" prop="name" label="姓名" width="80"> </el-table-column>
    <el-table-column align="center" prop="gender" label="性别" width="80"> </el-table-column>
    <el-table-column prop="place" label="籍贯"> </el-table-column>
    <el-table-column prop="idNum" label="身份证号码"> </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      :filters="[
        { text: '未办理电子身份证', value: '未办理电子身份证' },
        { text: '待审核', value: '待审核' },
        { text: '审核通过', value: '审核通过' },
      ]"
      :filter-method="filterHandler"
    >
    </el-table-column>

    <el-table-column label="操作">
     
      <template slot-scope="scope">
         <el-button
           v-if="scope.row.state == '待审核'"
          size="mini"
          type="success"
          native-type="submit"
        
          @click="updateIDState(scope.row.openId)">
         通过
          </el-button>
      </template>

    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import * as identity from "../services/identity";
import Sidebar from '../components/Sidebar'
import Header from "../components/Header"
  
   
export default {
  // loginClicked(){
  //             // sendLogin();
  //             sendLogin({
  //                 userName:this.userName,
  //                 password:this.password,
  //             }).then((res)=>{
  //              console.log(res);
  //             });
  //         },

  // created(){
  //        var res = identity.getAllIdentities().then((res)=>{
  //          console.log(res);
  //        });
  //        this.dataTable = res;
  //     },
   components:{
   Sidebar,
    Header,
    },
  data() {
    return {
      table: [],
      openId:'',
      //table3:[],
     
    };
  },
  methods: {
    //标签
    //  resetDateFilter() {
    //         this.$refs.filterTable.clearFilter('date');
    //       },
    //       clearFilter() {
    //         this.$refs.filterTable.clearFilter();
    //       },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

    //按钮
    handleEdit(index, row) {
      console.log(index, row);
    },
//更新state

async updateIDState(openId){
var res=await identity.updateState({openId: openId});
this.gettableData();
},

    //调用
    async gettableData() {
      var res = await identity.getAllIdentities();
     
      var t = res.data;
      var i = 0;
      for (i = 0; i < t.length; i++) {       
        if (t[i].state == "0") {
          t[i].state = "未办理电子身份证";
        } else if (t[i].state == "3") {
          t[i].state = "待审核";
     
        } else if (t[i].state == "4") {
          t[i].state = "审核通过";
          
        }
      }
      this.table = res.data;
    },

  },
  //调用异部函数
  created: function() {
    this.gettableData();
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
.el-table {
  position: fixed;
  margin-left:120px;
  top: 60px;

}
/* .idtable-container{
position: absolute;
  left: 132px;
  right:0;
  top: 60px;
  bottom:0px; */
/* <el-table :row-style="rowStyle"></el-table>
data () {
  return {
      rowStyle: {maxHeight: 57 + 'px', height: 57 + 'px'},
  }
} }*/
</style>
