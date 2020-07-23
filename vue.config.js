module.exports = {
    //vue的配置
    devServer:{
        //针对开发服务器的配置
        proxy:{
            "/consumer" :{
                changeOrigin: true,
                target:"http://47.107.110.112",
            },
            //含义：是在本机的ip+端口号之后如果以/consumer/administrator开头，那么应该将ip+端口号替换为target
            // "/consumer/administrator":{
            //     changeOrigin: true,
            //     //http://47.115.15.249:85/consumer/administrator/logIn/signIn
            //     //target:"http://47.115.15.249:85",
            //     target:"http://47.107.110.112",
            // },
            // "/consumer/news":{
            //     changeOrigin: true,
            //     //http://175.24.57.96:88/consumer/news/refreshNews
            //     //target:"http://175.24.57.96:88",
            //     target:"http://47.107.110.112",
            // },
            // "/consumer/identity":{
            //     changeOrigin: true,
            //     //target:"http://47.115.15.249:89",
            //     target:"http://47.107.110.112",
            // },
            // "/consumer/etc":{
            //     changeOrigin: true,
            //     //target:"http://175.24.57.96:90",
            //     target:"http://47.107.110.112",
            // },
            // "/consumer/socialSecurityCard":{
            //     changeOrigin: true,
            //     //target:"http://47.115.15.249:81",
            //     target:"http://47.107.110.112",
            // },
        },
    },
};