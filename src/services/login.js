
import axios from 'axios';
/**
 * 发送验证码，参数为电话号码
 */
export async function sendCode(phoneNumber){
    var res = await axios.get(`/consumer/administrator/login/sendMessageCode/${phoneNumber}`);
    //console.log(res.data);
    return res.data;
}
/**
 * 发送登录请求，传回对象{
 *     userName:
 *     password:
 * }
 */
export async function sendLogin(loginInfo){
    var res = await axios.get("/consumer/administrator/logIn/signIn",{
        params:{
            userName:loginInfo.userName,
            password:loginInfo.password,
        },
    });
    //console.log(res);
    return res;
}

