<template> 
    <div>  
        <!-- <mainContent></mainContent> -->
        <router-view></router-view>

   </div>  
</template>

<script>
import BScroll from "better-scroll"
import watchMovie from "../../components/watchMovie/watchMovie"
import mainContent from "../../components/main/mainContent"
export default {
    name:"FP",
    components: {
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
