import axios from "axios";//方法一

const server = axios.create({
    baseURL : process.env.BASE_API,
    withCredentials:true
})

server.interceptors.request.use(function(config) {
    config.data =JSON.stringify(config.data)
    config.headers = {
        'Content--Type':'application/x-www-form-urlencoded;charset=UTF-8'
    };
    return config;
},function(e){
    return Promise.reject(e)
})

server.interceptors.response.use(function(res){
    if(res.statusText == "OK"){
        //axios响应回来的数据res是axios插件自己封装的，是一个对象,下面有很多属性
        //包含网站响应回来的数据res.data,还有状态码res.status等等一些东西
        return  res.data;
    }
},function(e){
    return Promise.reject(e);
})

export const http = (method,url,data={}) => {
    if(method == "get"){
        return server.get(url,{
            params:data
        })
    }else if(method =="post"){
        return server.post(url,data);
    }else{
        return;
    }
}