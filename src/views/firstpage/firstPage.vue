<template> 
    <div>
        <Top></Top>   
        <!-- <mainContent></mainContent> -->
        <mainContent v-if="this.$route.meta.flag"></mainContent>
        <router-view/>
   </div>  
</template>

<script>
import Vuex from "vuex"
import BScroll from "better-scroll";
import Top from "../../common/top/top";
// import watchMovie from "../../components/watchMovie/watchMovie"
import mainContent from "../../components/main/mainContent" 
import {mainContent1} from '../../api/mainContent';
export default {
    name:"FP",
    components: {
        Top,
        // watchMovie,
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
