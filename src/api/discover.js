import {http} from "@utils/http";
//接口的管理

//主页面
export const discoverData = ()=>http("post","/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp");

