import axios from 'axios'

const server = axios.create({
    baseURL:process.env.BASE_API, //
    withCredentials:true 
})

server.interceptors.request.use((config)=>{
    config.data = JSON.stringify(config.data) //返回数据格式
    config.headers = {//设置请求头部
        'Content--Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config;
},(e)=>{
    return Promise.reject(e);
})

server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        return res.data;
    }
},(e)=>{
    return Promise.reject(e);
})

export const http = (method,url,data={})=>{

    if(method == "get"){
       return server.get(url,{
           params:data
       })
    }else if(method == "post"){
        return server.post(url,data);
    }else{
        return;
    }
}