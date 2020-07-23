/*
 * @Author: Zhuyuhan 
 * @Date: 2020-07-22 11:39:02 
 * @Last Modified by: Zhuyuhan
 * @Last Modified time: 2020-07-22 11:55:51
 */

import axios from 'axios'

export async function getAllSSC(){
    var req =  axios.get("/consumer/socialSecurityCard/getAll");
    return (await req).data;
}
/**
 * http://47.115.15.249:81/consumer/socialSecurityCard/getByState/{state}
 * 按状态查询社保卡3为正在审核，4为审核通过
 */
export async function getByState(state){
    var res = await axios.get(`consumer/socialSecurityCard/getByState/${state}`);
    return res;
}

/**
 * http://47.115.15.249:81/consumer/socialSecurityCard/update
 * 更新社保卡信息，需要传入所有参数
 */
export async function updateState(socialSecurityCard){
    var res = await axios.get("consumer/socialSecurityCard/update",{
        params:{
            openId:socialSecurityCard.openId,
            name:socialSecurityCard.name,
            socialSecurityNumber:socialSecurityCard.socialSecurityNumber,
            socialSecurityCardNumber:socialSecurityCard.socialSecurityCardNumber,
            state:socialSecurityCard.state,
        }
    });
    return res.data;
}
/**
 * http://47.115.15.249:81/consumer/socialSecurityCard/delete/{openId}
 * 根据openId注销社保卡
 */
export async function deleteById(openId){
   var res = await axios.get(`/consumer/socialSecurityCard/delete/${openId}`);
   return res.data;
}