<template> 
    <div>
        <Top></Top>   
        <mainContent></mainContent>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
   </div>  
</template>

<script>
import Vuex from "vuex"
import BScroll from "better-scroll";
import Top from "../../common/top/top";
import mainContent from "../../components/main/mainContent" ;
import {mainContent1} from '../../api/mainContent';
export default {
    name:"FP",
    components: {
        Top,
        mainContent
    },
    mounted(){
        //方法一
        // this.$axios.get("/lovev/miguMovie/data/seeFilmData.jsp")//方法二
    }
    
}
</script>

<style>
#FP{
    width:100%
}
</style>
