<template>
    <div>
        <!--头部-->
        <header>
            <div class="address">
                <i class="iconfont">深圳&#xe65d;</i>
                <span></span>
            </div>
            <div class="movie-name">
                <router-link v-bind:to="{name:'movie'}" tag="i">影片</router-link>
                <router-link v-bind:to="{name:'cinema'}" tag="i">影院</router-link>
            </div>
        </header>
        <!--分化区域-->
        <section>
            
            <div class="movieNav">
                <router-link v-bind:to="{name:'movieNow'}" tag="p">正在热映 </router-link>
                <router-link v-bind:to="{name:'movieComing'}" tag="p">即将上映 </router-link>
            </div>
        </section>
        
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
   
</template>

<script>
export default {
    name:"BuyTicket",
}
</script>

<style>
/* 头部*/ 
    header{
        padding-top: .2rem;
        padding-bottom: .2rem;
        font-size: .28rem !important;
        border-bottom:1px solid #ccc;
        position: fixed;
        width: 100%;
        background-color: #fff; 
        top: 0;
    }
    header .address {
        position: absolute;
        left: .15rem;
        top: .2rem;
    }
    header .movie-name {
        display: flex;
        justify-content: center;
    }
    .iconfont{
       font-size: .3rem !important; 
    }
    header>.movie-name>i{	
        text-align: center;
        width: 1.3rem;
        height: 0.6rem;
        line-height: .6rem;
        border: 1px solid #c33;
        display:inline-block;
        
    }
    header .movie-name i:first-child{
        border-top-left-radius: .2rem;
        border-bottom-left-radius: .2rem;

    }
    header .movie-name i:last-child{

        border-top-right-radius: .2rem;
        border-bottom-right-radius: .2rem;

    }
    .router-link .active{
        color: #fff;
        background-color: #F74444;
    }
/* 分化部分 */
    section{
        position: fixed;
        top: 1rem;
        width: 100%;
        font-size: .3rem !important;
        background: #fff;
    }
    section .movieNav{
        display: flex;
        justify-content: space-around;
    }
    section .movieNav p{
        padding-top: .24rem;
        padding-bottom: .24rem;
    }
    .router-link-active{
        border-bottom:2px solid #f74444;
        color: #f74444;
    }
</style>
