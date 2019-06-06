import {
    http
} from "@utils/http";
//接口的管理

//主页面
export const movieNowData = () => http("get", "api/lovev/miguMovie/data/indexFilm_data.jsp",{cityCode:4900});
export const movieComingData = () => http("get", "api/lovev/miguMovie/data/indexFilmComing_data.jsp", {
    cityCode: 4900
});

export const cinemaData = () => http("get", "api/mta-service/data/migu/validCinemaes.jsp", {
    cityCode: 4900
});