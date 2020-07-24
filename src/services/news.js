/*
 * @Author: zouwenye&amp;zhuyuhan 
 * @Date: 2020-07-24 17:31:55 
 * @Last Modified by:   zouwenye&amp;zhuyuhan 
 * @Last Modified time: 2020-07-24 17:31:55 
 */


import axios from 'axios'


//  删除
export async function deleteNews(id){
    var req = await axios.get(`/consumer/news/delete/${id}`);
    return req.data;
}
/**
 * 管理端刷新每日新闻数据
 */
export async function refreshNews(){
    //http://175.24.57.96:88/consumer/news/refreshNews
   var req =  await axios.get("/consumer/news/refreshNews");
   return req.data;
}
/**
 * 管理端刷新国内疫情数据
 */
export async function refreshDescNation(){
    //http://175.24.57.96:88/consumer/news/refreshDescNation
    var req = await axios.get("/consumer/news/refreshDescNation");
    return req.data;
}

/**
 * 管理端刷新外国疫情数据
 */
export async function refreshDescForeign(){
    //http://175.24.57.96:88/consumer/news/refreshDescForeign
    var req = await axios.get("/consumer/news/refreshDescForeign");
    return req.data;
}

/**
 * 管理端刷新全球疫情数据
 */
export async function refreshDescGlobal(){
    //http://175.24.57.96:88/consumer/news/refreshDescGlobal
    var req = await axios.get("/consumer/news/refreshDescGlobal");
    return req.data;
}

/**
 * 查询所有疫情新闻
 * 
 */

 export async function getAllNews(){
    //http://175.24.57.96:88/consumer/news/getAllNews
    var req = await axios.get("/consumer/news/getAllNews");
    return req.data;
 }



