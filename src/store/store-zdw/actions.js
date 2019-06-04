import {mainContent1} from "../../api/mainContent"
export default{
    async actionsMainOne({commit}){

      let data =  await mainContent1();
      var arr = [];
        for(var i =0,len=data.length;i < len;i++){
            if(data[i].showCount == 11 || data[i].showCount == 13 || data[i].showCount == 8){
                arr.push(data[i])
            }
        }
      console.log(data[0].list[0].imgSrc)
      // console.log(arr)
      commit('mutationsMainOne',arr)
    }
}