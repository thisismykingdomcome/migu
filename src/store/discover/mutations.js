export default{
    mutationsDiscoverData(state,params){

        var information = params[3].list //把数据转化成年月日
        for(var i=0,len = information.length ; i<len ; i++){
            var date = information[i].name.split('');
            date.splice(4,0,'年')
            date.splice(7,0,'月')
            date.push("日")
            information[i].name = date.join('')
        }

        state.discover_banner = params[0].list;
        state.discover_menu = params[1].list;
        state.discover_shop = params[2].list;
        state.discover_information = params[3].list;
        window.sessionStorage.setItem("discover_banner",JSON.stringify(params[0].list)); //把数据存储在本地，防止数据未更改会再次加载
        window.sessionStorage.setItem("discover_menu",JSON.stringify(params[1].list));
        window.sessionStorage.setItem("discover_shop",JSON.stringify(params[2].list));
        window.sessionStorage.setItem("discover_information",JSON.stringify(params[3].list));
    },
    informationData(state,params){
        state.informations = params[0]
    }
}