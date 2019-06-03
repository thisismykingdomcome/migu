<template> 
<div>
        <Top></Top>   
        <!-- <mainContent></mainContent> -->
        <watchMovie></watchMovie>
   </div>  
</template>

<script>
import BScroll from "better-scroll"
import Top from "../../common/top/top"
import watchMovie from "../../components/watchMovie/watchMovie"
import mainContent from "../../components/main/mainContent"
export default {
    name:"FP",
    components: {
        Top,
        mainContent,
        watchMovie
    },
    
}
</script>

<style>
#FP{
    width:100%
}
</style>
