<template>
  <div >
    <Sidebar />
    <Header />

    <!-- 
      create table news(
id      新闻ID             char(10) primary key,
title    新闻标题                   char(50),
date         日期            char(20),
tag      int 点击量

infoSource  消息来源            char(50),
sUrl         消息url            TEXT
summary  正文摘要                TEXT,
);

    -->
    <div class="buttongroup">
      <el-button-group>
        <el-button @click="refreshtheNews()" size="mini" type="primary">疫情新闻</el-button>
        <el-button @click="refreshtheDescNation()" size="mini" type="success">国内数据</el-button>
        <el-button @click="refreshtheDescForeign()" size="mini" type="info">国外数据</el-button>
        <el-button @click="refreshtheDescGlobal()" size="mini" type="warning">全球数据</el-button>
      </el-button-group>
    </div>
    
    <el-table ref="filterTable" :data="tableData" height="100%" border
    width="100%"
     :default-sort = "{prop: 'date', order: 'descending'}">
      
      <el-table-column type="expand">
    
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="标题:">
              <span>{{ props.row.title }}</span>
            </el-form-item>

            <el-form-item label="日期:">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="正文摘要:">
              <span>{{ props.row.summary }}</span>
            </el-form-item>
            <el-form-item label="新闻ID:">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="消息url:">
         <a :href="props.row.sUrl" target="_blank">原文链接: </a>
            </el-form-item>

            <el-form-item label="点击量:">
              <span>{{ props.row.tag }}</span>
            </el-form-item>
            <el-form-item label="消息来源:">
              <span>{{ props.row.infoSource }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="日期" prop="date" sortable> </el-table-column>

      <el-table-column label="新闻ID" prop="id"> </el-table-column>

      <el-table-column label="标题" prop="title"> </el-table-column>
      <el-table-column prop="tag" label="点击量"> </el-table-column>

      <el-table-column label="操作">
        <!-- <template slot-scope="scope"> -->
      <template slot-scope="scope">
        <el-button @click="deletethenews(scope.row.id)" size="mini" type="danger">删除 </el-button>
     </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
/* // 滚动条样式 */

.buttongroup {
  position: fixed;
  z-index: 100;
  right: 0px;
  top: 60px;
  width: 200px;
  /* display: flex; */
}

.el-table {
  position: fixed;
  left: 120px;
  /* width: "calc(100% - 120px)"; */
   top: 60px;

}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import * as news from "../services/news";
export default {
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {

async refreshtheNews()
{
    var ress=await news.refreshNews();
    this.getnews();
    //console.log(ress);
    if(ress.code==256){
      alert("当前新闻已是最新");
    }
    else if(ress.code==255){
      alert("成功更新新闻")
    }
    else if(ress.code==222){
      alert("今日首次刷新新闻，注意核查哦~");
    }
    else{
      alert("刷新新闻失败!")
    }
},
async refreshtheDescNation()
{
    var ress=await news.refreshDescNation();
    //console.log(ress);
    
    if(ress.code==266){
      alert("当前国内疫情数据已是最新");
    }
    else if(ress.code==256){
      alert("成功更新国内疫情数据")
    }
    else if(ress.code==223){
      alert("今日首次刷新国内疫情数据，注意核查哦~");
    }
    else{
      alert("刷新国内疫情数据失败!")
    }
},
async refreshtheDescForeign()
{
    var ress=await news.refreshDescForeign();
    // this.getnews();
    //console.log(ress);
    if(ress.code==267){
      alert("当前境外疫情数据已是最新");
    }
    else if(ress.code==257){
      alert("成功更新境外疫情数据")
    }
    else if(ress.code==224){
      alert("今日首次刷新境外疫情数据，注意核查哦~");
    }
    else{
      alert("刷新境外疫情数据失败!")
    }
},
async refreshtheDescGlobal()
{
    var ress=await news.refreshDescGlobal();
    //console.log(ress);
    // this.getnews();
    if(ress.code==268){
      alert("当前全球疫情数据已是最新");
    }
    else if(ress.code==258){
      alert("成功更新全球疫情数据")
    }
    else if(ress.code==225){
      alert("今日首次刷新全球疫情数据，注意核查哦~");
    }
    else{
      alert("刷新全球疫情数据失败!")
    }
},

async deletethenews(id){
  var res=await news.deleteNews(id)
  this.getnews();
},
async getnews(){
  
    var res=await news.getAllNews();
    //console.log(res);
this.tableData=res.data;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },



  },
  created: function(){
      this.getnews();
      
  }
};
</script>
