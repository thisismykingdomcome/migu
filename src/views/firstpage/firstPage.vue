<template> 
    <div>
        <Top></Top>   
        <!-- <mainContent></mainContent> -->
        <router-view></router-view>

   </div>  
</template>

<script>
import BScroll from "better-scroll"
import Top from "@common/top/top"
export default {
    name:"FP",
    components: {
        Top
       
    },
    
}
</script>

<style>
#FP{
    width:100%
}
</style>
