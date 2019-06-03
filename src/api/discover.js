import {http} from "@utils/http";
//接口的管理

//主页面
export const discoverData = ()=>http("post","/lovev/miguMovie/find/index.jsp");

