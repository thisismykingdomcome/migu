//方法一
import {http} from "../utils/my-http"



export const mainContent1 = () => http("post",'api/lovev/miguMovie/data/seeFilmData.jsp');
export const watchContent = () => http("get",'api/lovev/miguMovie/data/seeFilmData.jsp',{nodeId:70022795,pagesize:3,pageidx:1})
// mainContent1().then((res) => {
//     console.log(res)
// })

