import {discoverData} from "@api/discover"

export default{
    async discoverData({commit}){
        let data = await discoverData();
        console.log(data);
        commit("mutationsDiscoverData",data)
    }
}