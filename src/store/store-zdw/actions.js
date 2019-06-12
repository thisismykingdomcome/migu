import {mainContent1, watchContent,movieList,smallVideo,filmReview} from "../../api/mainContent"
export default{
    async actionsMainOne({commit}){
      let data =  await mainContent1();
      var arr = [];
        for(var i =0,len=data.length;i < len;i++){
            if(data[i].showCount == 11 || data[i].showCount == 13 || data[i].showCount == 8){
                arr.push(data[i].list)
            }
        }
        
      // console.log(arr)
      commit('mutationsMainOne',arr)
    },
    async actionsMovie({commit}){
      let data = await watchContent();
      // console.log(data[0].list);
      // console.log(data[1].list);
      // console.log(data[2].list);
      var arr = [data[0].list,data[1].list,data[2].list];
      commit('mutationsMovie',arr)
    },
    async actionsList({commit}){
      let data = await movieList();
      var arr = [data[0].list,data[1].list,data[2].list];
      console.log(arr)
      commit('mutationsMovieList',arr)
    },
    async actionsVideo({commit}){
      let data = await smallVideo();
      var arr = [data[1].list];
      commit('mutationsVideo',arr)
    },
    async actionsFilm({commit}){
      let data = await filmReview();
      // console.log(data)
      var arr = [data[0].list];
      // console.log(arr)
      commit('mutationsFilm',arr)
    }
}