import {http} from "@utils/http";
//接口的管理

//主页面
export const discoverData = ()=>http("post","api/lovev/miguMovie/data/find_index.jsp"); 

export const discoverInformation = (id)=>http("get","api/lovev/miguMovie/data/newsDetail_data.jsp",{cid:id})