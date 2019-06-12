<template>
    <div id="hhh">
<Top></Top> 
<div id="zzz">
    <div id="watchMovie">
        <div class="loopPic swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,index) in movieListOne" :key="index">
                    <a href="#">
                        <img :src="'http://movie.miguvideo.com/publish' + item.imgSrc" alt="">
                        <span>{{item.name}}</span>
                    </a>
                </li>
            </ul>
            <div  class="fyq swiper-pagination"></div>
  
        </div> 
        <div class="two">
            <h1>影史100个经典角色</h1>
            <div id="better">
                <ul>
                    <li v-for="(sell1,index) in movieListTwo" :key="index">
                        <a href="#">
                        <img class="swiper-lazy" :src="'http://movie.miguvideo.com/publish/i_www'+ sell1.imgSrc" alt="">
                        <p>{{sell1.name}}</p>
                        <p>{{sell1.LONG_NAME}}</p>   
                    </a></li>               
                </ul>
            </div>
        </div>
        <div class="two">
            <h1>影史100人</h1>
            <div id="better1">
                <ul>
                    <li v-for="(sell,index) in movieListThree" :key="index">
                        <a href="#">
                        <img class="swiper-lazy" :src="'http://movie.miguvideo.com/publish/i_www'+ sell.imgSrc" alt="">
                        <p>{{sell.name}}</p>
                        <p>{{sell.LONG_NAME}}</p>   
                    </a></li>               
                </ul>
            </div>
        </div>
    </div>    
</div> 
</div> 
</template>
<script>
import Swiper from "swiper"
import BScroll1 from "@common/BScroll/BScroll.vue"
import Vuex from "vuex"
import BScroll from "better-scroll"
import Top from "@common/top/top";
export default {
    name:"movieList",
    components: {
        Top,
        BScroll1
    },
    created(){
        
    },
    mounted(){
        this.actionsList()

        let better =document.querySelector('#better');
        let scroll1 = new BScroll(better,{
            scrollX:true
        })
        let better1 =document.querySelector('#better1');
        let scroll2 = new BScroll(better1,{
            scrollX:true
        });  
        this.$nextTick(function(){
        let FP = document.querySelector("#zzz");
        let scroll = new BScroll(FP)
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                            disableOnInteraction: false,
                },
                width:750,
                pagination: {
                    el: '.swiper-pagination',
                },
            
            });
              
        })
    },
    methods:{
        ...Vuex.mapActions({
            actionsList:"zdw/actionsList"
        })
    },
    computed:{

        ...Vuex.mapState({
            'movieListOne':state => state.zdw.movieListOne,
            'movieListTwo':state => state.zdw.movieListTwo,
            'movieListThree':state => state.zdw.movieListThree
        })
    },

}
</script>
<style scoped>
.fyq{
    width:0.3rem;
    height:0.3rem;
    border-radius: 50%;
position:absolute;
background:white;
left:50%;
bottom:0;
}
#zzz{
    width:100%;
    height:11.7rem
}
#watchMovie{
    margin-top: 1.7rem;
    height:max-content;
    padding-bottom:1.0rem
}
.loopPic{
    width:100%;
    height:auto;
    box-sizing:border-box;
    overflow: hidden;
    position: relative;
}
.loopPic ul{
    
    width:max-content;
}
.loopPic ul li{
    float:left;
    width:7.5rem!important;
    position: relative;
} 
.loopPic a img{
    width:100%;
}
.loopPic a span{
    position: absolute;
    color:white;
    left:0.24rem;
    bottom:0.24rem;
    font-size:0.4rem;
} 
.two{
    width:100%;
    margin-bottom: 0.2rem;
    background-color:white;
}
.two h1{
    height:0.9rem;
    line-height:0.9rem;
    padding-left:0.16rem;
    padding-right:0.24rem;
    font-size:0.32rem;
}
.two div{
    width:100%;
    overflow: hidden;
}
.two ul li {
    width:2.34376rem;
    height:4.576rem;
    float:left;
    margin-left:2px
}
.two ul{
    display: flex;
    width:max-content
}
.two ul li p{
    width:100%;
    line-height:1.7em;
    padding-left:0.24rem;
    padding-right:0.24rem;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    color:#ccc;
    float:left
}
.two ul li img{
    width:100%;
    height:3.5rem;
}


#three div{
    width:100%;
    overflow: hidden;
}
#three ul li {
    width:2.34376rem;
    height:4.576rem;
    float:left;
    padding-right:2px
}
#three ul{
    display: flex;
    width:max-content
}
#three ul li p{
    width:100%;
    line-height:1.7em;
    padding-left:0.24rem;
    padding-right:0.24rem;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    color:#ccc;
    float:left
}
#three ul li img{
    width:100%;
    height:3.5rem;
}
</style>
