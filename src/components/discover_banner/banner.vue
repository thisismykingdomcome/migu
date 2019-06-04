<template>
    <div class="banner">
        <!-- 模块一动画图 -->
        <div class="banner_animation">
            <ul>
                <li>
                    <a href="#">
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/749/526.jpg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 模块一菜单栏 -->
        <div class="banner_menu">
            <ul class="clearfix">
                <li class="pull-left">
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/175/960.png" alt="">
                    <span class="block font-15 grey">资讯</span>
                </li>
                <li class="pull-left">
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/175/961.png" alt="">
                    <span class="block font-15 grey">话题</span>
                </li>
                <li class="pull-left"><img src="http://movie.miguvideo.com/publish/i_www/image/70/175/961.png" alt="">
                    <span class="block font-15 grey">约票</span>
                </li>
                <li class="pull-left"><img src="http://movie.miguvideo.com/publish/i_www/image/70/175/961.png" alt="">
                    <span class="block font-15 grey">商城</span>
                </li>
                <li class="pull-left"><img src="http://movie.miguvideo.com/publish/i_www/image/70/175/961.png" alt="">
                    <span class="block font-15 grey">活动</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Vuex from 'vuex'
export default {
    name:"discoverBanner",

}
</script>


<style lang="scss" scoped>
/* 动画 */
.banner{
    margin-bottom: 0.2rem;
    background: #fff;
}
.banner_animation{
    width: 100%;
    overflow: hidden;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        li{  
            width: 100%; 
            height: 100%;
            img{
                width: 100%;
                height: 2.5rem;
            }
        }
    }
}

/* 菜单 */

.banner_menu {
    width: 100%;
    padding: 0.24rem 0 ;
    ul{
        display: flex;
        justify-content: space-around;
        li{
            text-align: center;
            flex: 1;
            img{
                width: 0.5rem;
                margin: 0 auto;
            }
            span{
            line-height: 0.48rem;
            font-size: 0.3rem;   
            display: block;
            height: 0.48rem; 
            margin-top: 0.08rem
            }
        }
    }
   
}

</style>
