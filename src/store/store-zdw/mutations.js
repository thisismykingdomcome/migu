export  default{
    mutationsMainOne(state,params){
        var a = sessionStorage.getItem("sessionFP")
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
        var b = sessionStorage.getItem("sessionMovie")
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
    }
}