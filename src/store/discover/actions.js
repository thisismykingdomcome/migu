import {
    discoverData,
    discoverInformationData
} 
from "@api/discover"

export default{
    async discoverData({commit}){
        let data = await discoverData();
        
        commit("mutationsDiscoverData",data)
    },
   /*  async discoverInformation({commit}){
        let data = await discoverInformationData();
        console.log(data)
        commit("informationData",data)
    } */
}