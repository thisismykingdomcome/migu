export default {
    mutationsMovieNow(state,params){
        state.movieNowList = params;
    },
    mutationsMovieComing(state,params){
        state.movieComingList = params;
    },
    mutationsCinema(state,params){
        state.cinemaList = params;
    }

}