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
                <router-link v-for="(item,index) in menus" :key="index" :to="item.path" tag="li">
                    <img :src="item.iconimg" alt="">
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>
import Vuex from 'vuex'
export default {
    name:"discoverBanner",
     data(){
        return {
            menus:[
                    {
                        title:"资讯",
                        iconimg:"http://movie.miguvideo.com/publish/i_www/image/70/175/960.png",
                        path:"/informations"
                    },
                    {
                        title:"话题",
                        iconimg:"http://movie.miguvideo.com/publish/i_www/image/70/175/961.png",
                        path:"/"
                    },
                    {
                        title:"约票",
                        iconimg:"http://movie.miguvideo.com/publish/i_www/image/70/175/949.png",
                        path:"/"
                    },
                    {
                        title:"商城",
                        iconimg:"http://movie.miguvideo.com/publish/i_www/image/70/175/962.png",
                        path:"/shopping"
                    },
                    {
                        title:"活动",
                        iconimg:"http://movie.miguvideo.com/publish/i_www/image/70/175/966.png",
                        path:"/"
                    }
                ]
        }
    },
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
