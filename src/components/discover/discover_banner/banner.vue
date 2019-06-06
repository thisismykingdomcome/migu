<template>
    <div class="banner">
        <!-- 模块一动画图 -->
        <div class="banner_animation swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="(itm,index) in animation" :key="index" class="swiper-slide">
                    <a href="#">
                    <img  :src="'http://movie.miguvideo.com/publish/i_www/' + itm.imgSrc" :alt="itm.name">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 模块一菜单栏 -->
        <div class="banner_menu">
            <ul class="clearfix">
                <li v-for="(item,index) in menus" :key="index" >
                    <img v-if="item.imgSrc !== undefined" :src="'http://movie.miguvideo.com/publish/i_www/' + item.imgSrc" alt="">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import Vuex from 'vuex'
export default {
    name:"discoverBanner",
    mounted:function () {
        var that = this;
        that.$nextTick(function(){
            var mySwiper = new Swiper(".swiper-container",{ 
                autoplay:{
                    disableOnInteraction: false,
                    delay:2000, // 手动滑动后继续自动播放
                    stopOnLastSlide:false, //如果设置为true，当切换到最后一个slide时停止自动切换。
                    reverseDirection:false, //开启反向自动轮播。
                }, //自动播放
                observeParents:true, //修改swiper的父元素时，自动初始化swiper
                /* loop:true, //设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。 */
                observer: true,//当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false
              
                
                 //切换时间
               
     
            });
        })
       /*  console.log(window.sessionStorage) */
    },
    computed:{
        
        ...Vuex.mapState({
            animation:state=>state.discover.discover_banner,
            menus:state=>state.discover.discover_menu
        })
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
    .swiper-wrapper{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        .swiper-slide{  
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
