<template>
    <div class="shoppingPage">
        <!------公共返回头--------->
        <back title="商城"/>
        <!-- 主体开始 -->
        <div class="shopmain">
            <!-- 商城模块一 -->
            <div class="banner">
                <!-- 商城模块一广告 -->
                <div class="banner_animation">
                    <ul>
                        <li>
                            <a href="#">
                            <img src="../../../public/imgers/discover/526.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 商城模块一菜单栏 -->
                <div class="banner_menu">
                    <ul class="clearfix">
                        <li class="pull-left">
                            <img src="../../../public/imgers/discover/881.png" alt="">
                            <span class="block font-15 grey">电影卡</span>
                        </li>
                        <li class="pull-left">
                            <img src="../../../public/imgers/discover/335.png" alt="">
                            <span class="block font-15 grey">万达联合会员</span>
                        </li>
                        <li class="pull-left">
                            <img src="../../../public/imgers/discover/880.png" alt="">
                            <span class="block font-15 grey">周边</span>
                        </li>
                        <li class="pull-left"><img src="" alt="">
                            <span class="block font-15 grey"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 商城模块二结束 -->

            <!-- 商城模块二 -->
            <div class="shop_module">
                <a href="#">
                <div class="shop_top">
                    <span>商城</span>
                    <span class="shop_enter"></span>
                </div>
                </a>
                <div class="shop_main">
                <ul>
                    <li>
                        <a href="#">
                            <div class="shop_main_pic">
                            <img src="../../../public/imgers/discover/554.png">
                            </div>
                            <div class="shop_main_intro">
                            <p class="shop_card">50元电影卡</p>
                            <p class="shop_money">
                                <span>￥50</span>
                            </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="shop_main_pic">
                            <img src="../../../public/imgers/discover/209.jpg">
                            </div>
                            <div class="shop_main_intro">
                            <p class="shop_card">100元电影卡</p>
                            <p class="shop_money">
                                <span>￥100</span>
                            </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="shop_main_pic">
                                <img src="../../../public/imgers/discover/209.jpg">
                            </div>
                            <div class="shop_main_intro">
                                <p class="shop_card">500元电影卡</p>
                                <p class="shop_money">
                                    <span>￥500</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="shop_main_pic">
                                <img src="../../../public/imgers/discover/209.jpg">
                            </div>
                            <div class="shop_main_intro">
                                <p class="shop_card">50元电影卡</p>
                                <p class="shop_money">
                                    <span>￥300</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <!-- 商城模块二结束 -->

        </div>
        

    </div>
</template>



<script>
import Vuex from 'vuex'
import back from '@components/discover/discover_back/back'

export default {
    name:'shopping',
    components:{
        back
    }
}
</script>



<style lang="scss" scoped>
/* 主体 */

.shopmain{
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    box-sizing: border-box;
}

/* 商城模块一广告 */
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

/* 商城模块一菜单 */

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

/* 商城 */

.shop_module{
    margin-bottom: 0.2rem;
    background: #fff;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
}
/* 商城头部 */
.shop_top{
    height: 0.9rem;
    line-height: 0.9rem;
    background: url(../../../public/imgers/icon/module-icon.png) no-repeat 0 0.22rem;
    background-size: 0.06rem 0.46rem;
    padding-left: 0.16rem;
    padding-right: 12px;
    font-size: 0.32rem;
}
.shop_top .shop_enter{
    background: url(../../../public/imgers/icon/moreCon.png) no-repeat 0 0.32rem;
    display: block;
    float: right;
    background-size: 0.12rem 0.24rem;
    width: 0.2rem;
    line-height: 0.9rem;
    height: 0.9rem;
}

/* 商品详情 */
.shop_main{
    width: 100%;
    height: auto;
    position: relative;
    ul{
        width: 100%;
       
        li{
            width: 50%;
            padding-bottom: 5px;
            float: left;
        }
    }
}

.shop_main_pic img{
    width:100%;
}
.shop_main_intro .shop_card{
    line-height: 0.46rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    font-size: 0.28rem;
}
.shop_main_intro .shop_money{
    line-height: 0.44rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    font-size: 0.24rem;
    color: #F74444;
}
</style>
