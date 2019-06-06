<template>
    <!-- 公共返回头部 -->
    <header>
        <div class="head">
            <router-link to="/discover" tag="i">
                <img class="backBtn" src="../../../../public/imgers/icon/hisBack.png" alt="" />
            </router-link>
            <span class="top">{{title}}</span> 
        </div>
    </header>
</template>

<script>
export default {
    name:'discoverBack',
   
    props:{
        title:{
            type:String,
            default:"商城"
        }
    }
}
</script>

<style lang="scss" scoped>

.head{
    border-bottom: 1px solid #E6E6E6;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0;
    position: relative; 
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    width: 100%;
    .top{
        font-size: 0.34rem;
    }
}
.backBtn{
    position: absolute;
    top: 0.2rem;
    left: 0.24rem;
    width: 0.48rem;
}
</style>
