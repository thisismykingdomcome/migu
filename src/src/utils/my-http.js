import axios from "axios";

const server = axios.create({
    withCredentials:true
})

server.interceptors.request.use(function(config){
    return config
},function(e){
    return Promise.reject(e)
})

server.interceptors.response.use(function(res){
    // if(res.statusText == "OK"){
    //     return  res.data;
    // }
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