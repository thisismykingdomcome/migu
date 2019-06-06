<template>
    <div class="zixun">
        <banner title="资讯" class="zixuTop"/>
        <div class="wrapper" ref="wrapper">
        <div class="content">
        <information />
        </div>
        </div>
    </div>
</template>


<script>
import Vuex from 'vuex'
import banner from '@components/discover/discover_back/back'
import information from '@components/discover/discover_information/information'

import betterScroll from 'better-scroll'//引入btter-scroll 插件 
export default {
    name:'informations',
    components:{
        banner,
        information
    },
    /* methods:{
        ...Vuex.mapActions({
            informationData:'discover/discoverInformation'
        })
    }
    ,
    created(){
        this.informationData()
    }
    , */
    mounted() {
      this.$nextTick(() => {
        this.scroll = new betterScroll(this.$refs.wrapper, {
            click:true, //设置可点击
        })
      })
    }
}
</script>


<style lang="scss" scoped>
.zixun{
    height: 100%;
    position: relative; 
}
.zixuTop{
    position: relative;
    width: 100%;
    z-index: 9;
}
.wrapper{
  
    height: 93%;
    box-sizing: border-box;
}
</style>
