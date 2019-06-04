<template>
  <div id="app">
    <keep-alive>
         <router-view></router-view>
<<<<<<< HEAD
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name:"App",
    components:{
    
=======
     </keep-alive>
    <TabBar v-if="$route.meta.TabBarFlag"/>
  </div>
</template>
<script>
import TabBar from "@common/BuyTicket/tabBar/tabbar";
  export default {
    name:"App",
    components:{
      TabBar
>>>>>>> tsh
    }
  }
</script>




<style>

</style>
