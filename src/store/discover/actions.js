import {
    discoverData,
    discoverMovieDetails
} 
from "@api/discover"

export default{
    async discoverData({commit}){
        let data = await discoverData();
        
        commit("mutationsDiscoverData",data)
    },
    async NewDetails({commit}){
        let data = await discoverMovieDetails();
        console.log(data)
        commit("informationData",data)
    }
}