<template>
    <div class="shop_module">
        <router-link to="./shopping" href="javascript:void(0)" tag="a">
            <div class="shop_top">
                <span>商城</span>
                <span class="shop_enter"></span>
            </div>
        </router-link>
        <div class="shop_main" v-if="shop[0].imgSrc !== undefined">
            <ul>
                <li>
                    <a href="#">
                    <div class="shop_main_pic">
                        <img :src="'http://movie.miguvideo.com/publish/i_www/'+ shop[0].imgSrc">
                    </div>
                    <div class="shop_main_intro">
                        <p class="shop_card">{{shop[0].name}}</p>
                        <p class="shop_money">
                            <span>￥30</span>
                        </p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div class="shop_main_pic">
                        <img :src="'http://movie.miguvideo.com/publish/i_www/'+ shop[1].imgSrc">
                    </div>
                    <div class="shop_main_intro">
                        <p class="shop_card">{{shop[1].name}}</p>
                        <p class="shop_money">
                            <span>￥50</span>
                        </p>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"discoverShop",
    
    computed:{
        ...Vuex.mapState({
            shop:state => state.discover.discover_shop
        })
    }
}

</script>

<style lang="scss" scoped>
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
    background: url(../../../../public/imgers/icon/module-icon.png) no-repeat 0 0.22rem;
    background-size: 0.06rem 0.46rem;
    padding-left: 0.16rem;
    padding-right: 12px;
    font-size: 0.32rem;
}
.shop_top .shop_enter{
    background: url(../../../../public/imgers/icon/moreCon.png) no-repeat 0 0.32rem;
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
        display: flex;
        li{
            width: 50%;
            padding-bottom: 5px;
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
