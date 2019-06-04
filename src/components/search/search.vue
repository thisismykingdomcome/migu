<template>
<div>
     <!-- 搜索框 -->
    <div class="search_top">
        <div class="search_wrap">
            <p class="clearfix">
                <span class="search_icon_wrap">
                    <i class="iconfont">&#xe615;</i>
                </span>
                <input class="search_txt" type="text" placeholder="搜影片、找影人">
                <span class="clear_icon_wrap">
                    <i class="iconfont">&#xe62f;</i>
                </span>
            </p>
        </div>
        <div class="search_cancel">
            <router-link to='/discover' tag="span">取消</router-link>
        </div>
    </div>


</div>
</template>


<script>
import Vuex from 'vuex'
export default {
    name:"search"
}
</script>


<style lang="scss" scoped>

/* 搜索页面头部 */

.search_top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding: 0.16rem 0.2rem;
    display: flex;
}

.search_wrap{
    flex:15;
    position: relative;
}

.clearfix{
    position: relative;
    background-color: #f0f0f0;
    border-radius: 0.6rem;
    height: 0.56rem;
    overflow: hidden;

    .search_txt{
        height: 0.56rem;
        width: 100%;
        font-size: 0.28rem;
        border: 0 none;
        background-color: #f0f0f0;
        padding: 0 0.66rem;
        outline: none;
    }

    .clear_icon_wrap{
        position: absolute;
        right: 0.2rem;
        top: 0.12rem;
        z-index: 9;
    }

}
.search_icon_wrap{
    position: absolute;
    padding: 0 0.14rem 0 0.2rem;
    left: 0;
    top: 0.12rem;

   .iconfont{
        font-size:0.30rem !important;
    }
        
}
.iconfont{
    font-size:0.34rem !important;
    color:#d6d6d6;
}
.search_cancel{
    flex:3;
}
.search_cancel span{
    font-size: 0.32rem;
    line-height: 0.56rem;
    float: right;
}

</style>
