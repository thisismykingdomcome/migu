<template>
<div>
<Top></Top> 
<div id="zzz">
    <div id="watchMovie">
        <div class="loopPic swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,index) in watchOne" :key="index">
                    <a href="#">
                        <img :src="'http://movie.miguvideo.com/publish' + item.imgSrc" alt="">
                        <span>{{item.name}}</span>
                    </a>
                </li>
            </ul>
            <div  class="fyq swiper-pagination"></div>
  
        </div> 
        <div id="two">
                <h1>热门推荐(免费)</h1>
                <div>
                    <ul>
                        <li v-for="(fire,index) in watchTwo" :key="index">
                            <a href="#">
                            <img :src="'http://movie.miguvideo.com' + fire.imgSrcV" alt="">
                            <p>{{fire.name}}</p>
                            <p>{{fire.LONG_NAME}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
        <div id="three">
            <h1>票房过亿的电影</h1>
            <div>
                <BScroll1>
                <ul>
                    <li v-for="(three,index) in watchThree" :key="index">
                        <a href="#">
                        <img :src="'http://movie.miguvideo.com' + three.imgSrcV" alt="">
                        <p>{{three.name}}</p>
                        <p>{{three.LONG_NAME}}</p>
                        </a>
                    </li>
                </ul>
                </BScroll1>
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
    name:"watchMovie",
    components: {
        Top,
        BScroll1
    },
    created(){
        this.actionsMovie()
    },
    mounted(){
        this.$nextTick(function(){
        let FP = document.querySelector("#zzz");
        let scroll =new BScroll(FP)
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
    computed:{
        ...Vuex.mapState({
            'watchOne':state => state.zdw.watchOne,
            'watchTwo':state => state.zdw.watchTwo,
            'watchThree':state => state.zdw.watchThree
        })
    },
    methods:{
        ...Vuex.mapActions({
            actionsMovie:"zdw/actionsMovie"
        }),
        
    },
    activated(){
        console.log(this)
    },
    deactivated(){
        console.log("watch deactivated")
    }
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
#two,#three{
    width:100%;
    margin-bottom: 0.2rem;
    height:100%
}
#two h1,#three h1{
    height:0.9rem;
    line-height:0.9rem;
    padding-left:0.16rem;
    padding-right:0.24rem;
    font-size:0.32rem;
}
#two div{
    width:100%;
    overflow: hidden;
}
#two ul li {
    width:2.34376rem;
    height:4.576rem;
    float:left;
    margin-right:2%
}
#two ul{
    
    width:100%
}
#two ul li p{
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
#two ul li img{
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
