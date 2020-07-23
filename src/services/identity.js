/*
 * @Author: Zhuyuhan 
 * @Date: 2020-07-22 11:39:38 
 * @Last Modified by:   Zhuyuhan 
 * @Last Modified time: 2020-07-22 11:39:38 
 */
import axios from 'axios'

/**
 * 获取所有身份证信息
 * http://47.115.15.249:89/consumer/identity/getAll
 */
export async function getAllIdentities(){
    var req =  axios.get("/consumer/identity/getAll");
    return (await req).data;
}

/**
 * 根据状态获取身份证信息
 * 3为待审核，4为审核通过
 * http://47.115.15.249:89/consumer/identity/getByState/{state}
 */
export async function getIdentitiesByState(state){
    var req =  axios.get(`/consumer/identity/getByState/${state}`);
    return (await req).data;
}

//http://47.115.15.24:89/consumer/identity/updateState
/**
 * 审核，只需要传回openId
 */
export async function updateState(identity){
    var req = await axios.get(`/consumer/identity/updateState`,{
        params:{
            openId:identity.openId,
        },
    });
    console.log(req.data);
    return req.data;
}

