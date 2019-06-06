<template>
<div class="wrapper" ref="wrapper">
   <div class="page content">
      <!--头部 -->
      <header>
         <div class="head">
            <span class="top">发现</span>
            <a href="/search">
               <img class="searchBtn" src="../../../public/imgers/icon/search-btn.png" alt="" />
            </a>
         </div>
      </header> 
      
      <div class="main">
         <!-- 动画菜单模块 -->
         <discoverBanner />
         
         <!-- 商城模块 -->
         <discoverShop />

         <!-- 资讯模块 -->
         <discoverInformation />
      </div>
      
   </div>
</div>
</template>


<script>
import Vuex from 'vuex';
import discoverBanner from '@components/discover/discover_banner/banner'
import discoverShop from '@components/discover/discover_shop/shop'
import discoverInformation from '@components/discover/discover_information/information'
import betterScroll from 'better-scroll'

export default {
    name:"Discover",
    components:{
        discoverBanner,
        discoverShop,
        discoverInformation
    },
    methods:{
        ...Vuex.mapActions({
            discoverData:"discover/discoverData"
        }),
        
    },
    created(){
        this.discoverData();
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new betterScroll(this.$refs.wrapper, {
            click:true,
        })
      })
    }
   

}
</script>


<style  scoped>
.wrapper{
   height:100%; 
}
.page{

    width: 100%;
    background: #efefef;
    overflow-y: hidden;
}

/* 头部 */

.head{
    border-bottom: 1px solid #E6E6E6;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
}
.head .top{
    font-size: 0.34rem;
}
.searchBtn{
    position: absolute;
    top: 0.2rem;
    right: 0.24rem;
    width: 0.48rem;
}


/* 主体 */

.main{
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    box-sizing: border-box;
}

</style>
