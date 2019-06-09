import {mainContent1, watchContent} from "../../api/mainContent"
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
    }
}