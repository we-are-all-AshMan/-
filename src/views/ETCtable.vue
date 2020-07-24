/*
 * @Author: zouwenye 
 * @Date: 2020-07-24 17:04:55 
 * @Last Modified by:   zouwenye 
 * @Last Modified time: 2020-07-24 17:04:55 
 */
<template>
 
  <!-- \
create table ETC(
car char(10) primary key,
host char(10),
consignee char(20),
tel char(11),
province char(20),
city char(20),
address TEXT,

openId char TEXT,

state int
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
    <el-table-column   prop="openId" label="微信账号" width="180"></el-table-column>
     <el-table-column prop="car" label="车牌号"> </el-table-column>
    <el-table-column prop="host" label="车主" width="80"> </el-table-column>
    <el-table-column prop="consignee" label="收件人" width="80"> </el-table-column>
    <el-table-column prop="tel" label="电话"> </el-table-column>
    <el-table-column prop="province" label="省"> </el-table-column>
    <el-table-column prop="city" label="市"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
   
    <el-table-column
      prop="state"
      label="状态"
      :filters="[
   
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
        
          @click="updateetcState(scope.row.car)">
         通过
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import * as etc from "../services/etc";
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
      car:'',
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
async updateetcState(car){
var res=await etc.updateState({car: car});
this.gettableData();
},
    //调用
    async gettableData() {
      var res = await etc.getAllEtc();
     console.log(res);
      var t = res.data;
      var i = 0;
      for (i = 0; i < t.length; i++) {       
        if (t[i].state == "1") {
          t[i].state = "待审核";    
        } else if (t[i].state == "2") {
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

  <!-- <div class=".idtable-container" > -->
  