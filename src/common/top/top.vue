<template>
    <header>
       <div class="top">
            <div class="t-left">
                <a class="a" href="https://passport.migu.cn/login?sourceid=203004&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&callbackURL=https://movie.miguvideo.com/lovev/miguMovie/index.jsp&relayState=login">
                        <img class="imgs" src="http://movie.miguvideo.com/lovev/miguMovie/images/icon/wallet.png"/>
                        <span>0元</span>
                </a>
            </div>
            <div class="t-right">
                <a href="https://passport.migu.cn/login?sourceid=203004&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&callbackURL=https://movie.miguvideo.com/lovev/miguMovie/index.jsp&relayState=login">
                <img class="imgs" src="http://movie.miguvideo.com/lovev/miguMovie/images/icon/history-btn.png"/>
                </a>
                <a href="http://movie.miguvideo.com/lovev/miguMovie/search.jsp">
                    <img class="imgs" id="" src="http://movie.miguvideo.com/lovev/miguMovie/images/icon/search_grey.png"/>
                </a>
            </div>
        </div>

        <div class="down">
            <div class="d-left ">
            <BScroll>
                <ul class="d-list" >
                        <router-link  tag="li" :to="item.link" @click="getColor(index)" v-for="(item,index) in items"
                          :key="index" :class="activeIndex == index?active : ''">{{item.name}}</router-link>
                        <!-- <li @click="getColor">免费看片</li>
                        <li @click="getColor">影单</li>
                        <li @click="getColor">小视频</li>
                        <li @click="getColor">影评</li> -->
                </ul>
            </BScroll>
            </div>
            <div class="d-right">
                <a href="#">
                    <img src="http://movie.miguvideo.com/lovev/miguMovie/images/icon/nav-list.png" alt=""/>
                </a>
            </div>
        </div>
    </header>    

</template>

<script>
import BScroll from "@common/BScroll/BScroll.vue"

export default {
    name:'Top',
    data(){
        return {
            activeIndex:this.$route.meta.flag,
            items: [
                {name:'推荐',link:"/FP"},{name:'免费看片',link:"/watchMovie"},
                {name:'影单',link:"/movieList"},{name:'小视频',link:"/smallVideo"},{name:'影评',link:"/filmReview"}
            ],
            active:'active'
        }
    },
    methods: {
        getColor(index){
            
        }
    },
    components:{
        BScroll
    }
}
</script>

<style scoped>
header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 11111;
    background:white
}
.top{
    width:100%;
    padding:0.16rem 0.24rem;
    overflow: hidden;
    
}
.t-left{
    float:left;

}
.t-left>.imgs{
    width:0.48rem;
    height:0.48rem;
    float:left;
    margin-right:0.066666rem;
}
.t-left>.a{
    display:flex;
    
}
.a>span{
    display:block;
    padding-top:0.1rem;
    color:black;
    font-size:0.3rem;
    float:left;
    padding-left:0.1rem
}
.t-right{
    float:right;

}
.t-right{
    float:right;
    
}
.t-right a{
    display: inline-block;
}
.t-right .imgs{
    margin-left:0.3rem;
    width:0.48rem;
    height:0.48rem
}
.down{
    width:100%;
    
    color:black;
    font-weight: 700;
    position: relative;
}
.d-left{
    width:88%;
    overflow-x: hidden;
    float:left;
    
}
.d-list {  
    font-size:0.3rem;
    float:left;
    text-align:center;
    width:max-content 
}
.d-list li{
    width:1.6rem;
    padding-top: 0.16rem;
    padding-bottom: 0.24rem;
    float:left;
    
}
.d-right{
    width:12%;
    padding-top: 0.16rem;
    padding-bottom: 0.24rem;
    float:right;
    position: absolute;;
    z-index:1000;
    top:0;
    right:0
}
.d-right img{
    width:0.42rem;
    height:0.42rem;
}
.active{
    border-bottom:0.04rem solid red;
    color:red;
}
</style>

