import {http} from "@utils/http";
//接口的管理

<<<<<<< HEAD
//获取发现主页面数据
export const discoverData = ()=>http("post","api/lovev/miguMovie/data/find_index.jsp"); 

//获取资讯新闻详情
export const discoverMovieDetails = (id)=>http("get","api/lovev/miguMovie/data/newsDetail_data.jsp",{cid:id})
=======
//主页面
export const discoverData = ()=>http("post","/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp");

>>>>>>> tshs
