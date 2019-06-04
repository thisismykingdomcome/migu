export default{
    mutationsDiscoverData(state,params){
        state.discover_banner = params[0].list;
        
        state.discover_menu = params[1].list;
        state.discover_shop = params[2].list;
        state.discover_information = params[3].list;
    }
}