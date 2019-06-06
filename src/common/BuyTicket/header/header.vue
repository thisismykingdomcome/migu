<template>
    <div>
         <!--头部-->
        <header>
            <div class="address">
                <i>深圳</i>
                <span class="iconfont">&#xe65d;</span>
            </div>
            <div class="movie-name">
                <router-link v-bind:to="{name:'movie'}" tag="i">影片</router-link>
                <router-link v-bind:to="{name:'cinema'}" tag="i">影院</router-link>
            </div>
            <router-link class="iconfont search" v-bind:to="{name:'cinemaSearch'}" tag="div">&#xe615;</router-link>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
        z-index: 55;
    }
    header .address {
        position: absolute;
        left: .2rem;
        top: .3rem;
    }
    header .search{
        position: absolute;
        right: .3rem;
        top: .3rem;
        font-size: .28rem;
        font-weight: bold;
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
    .router-link-active{
        color:white;
        background: #f74444;
    }
</style>
