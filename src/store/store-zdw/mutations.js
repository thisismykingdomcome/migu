export  default{
    mutationsMainOne(state,params){
        var a = sessionStorage.getItem("loopPic")
        if(a){
            return;
        }else{
            sessionStorage.setItem("loopPic",JSON.stringify(params[0]));
            sessionStorage.setItem("sellTicket",JSON.stringify(params[1]));
            sessionStorage.setItem("wonderfulActivity",JSON.stringify(params[2]));
            Array.prototype.push.apply(state.loopPic,params[0])
            Array.prototype.push.apply(state.sellTicket,params[1])
            Array.prototype.push.apply(state.wonderfulActivity,params[2])
        } 
    },
    mutationsMovie(state,params){
        var b = sessionStorage.getItem("watchOne")
        if(b){
            return;
        }else{
            sessionStorage.setItem("watchOne",JSON.stringify(params[0]))
            sessionStorage.setItem("watchTwo",JSON.stringify(params[1]));
            sessionStorage.setItem("watchThree",JSON.stringify(params[2]));
            // Array.prototype.push.apply(state.loopPic,params[0])
            // Array.prototype.push.apply(state.watchTwo,params[1])
            // Array.prototype.push.apply(state.watchThree,params[2])
        }
    },
    mutationsMovieList(state,params){
        var c = sessionStorage.getItem("movieListOne")
        if(c){
            return;
        }else{
            sessionStorage.setItem("movieListOne",JSON.stringify(params[0]))
            sessionStorage.setItem("movieListTwo",JSON.stringify(params[1]));
            sessionStorage.setItem("movieListThree",JSON.stringify(params[2]));
            // Array.prototype.push.apply(state.loopPic,params[0])
            // Array.prototype.push.apply(state.watchTwo,params[1])
            // Array.prototype.push.apply(state.watchThree,params[2])
        }
    },
    mutationsVideo(state,params){
        var d = sessionStorage.getItem("VideoOne")
        if(d){
            return;
        }else{
            sessionStorage.setItem("VideoOne",JSON.stringify(params[0]))

            // Array.prototype.push.apply(state.loopPic,params[0])
            // Array.prototype.push.apply(state.watchTwo,params[1])
            // Array.prototype.push.apply(state.watchThree,params[2])
        }
    },
    mutationsFilm(state,params){
        var d = sessionStorage.getItem("FilmOne")
        if(d){
            return;
        }else{
            sessionStorage.setItem("FilmOne",JSON.stringify(params[0]))

            // Array.prototype.push.apply(state.loopPic,params[0])
            // Array.prototype.push.apply(state.watchTwo,params[1])
            // Array.prototype.push.apply(state.watchThree,params[2])
        }
    },
}