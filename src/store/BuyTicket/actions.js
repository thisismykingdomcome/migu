//使用接口
import {
    movieNowData,
    movieComingData,
    cinemaData
} from "@api/BuyTicket";

export default {

    //正在上映
    async actionsMovieNow({commit}, params) {
        let data = await movieNowData(params);
        commit("mutationsMovieNow", data.movies);
    },
    //即将上映
    async actionsMovieComing({commit}, params) {
        let data = await movieComingData(params);
        commit("mutationsMovieComing", data.movies);
    },
    //影院
    async actionsCinema({commit},params){
        let data = await cinemaData(params);
        console.log(data);
        commit("mutationsCinema",data.cinemaes);
    }
}