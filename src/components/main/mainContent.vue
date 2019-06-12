<template>

<div id="zzz">
    <div id="main">
        <div id="one">
            <div class="one swiper-container" >
                <ul class="swiper-wrapper" >
                    <li class="swiper-slide" style="width:3.75rem" v-for="(item,index) in loopPic" :key="index"><a href="#" >
                        <img :src="'http://movie.miguvideo.com/publish/i_www'+ item.imgSrc" 
                         alt="">
                    </a></li>
                </ul>
            </div>
        </div>
        <div id="two">
            <h1>正在售票</h1>
            <div id="better">
                <ul>
                    <li v-for="(sell,index) in sellTicket" :key="index">
                        <a href="#">
                        <img class="swiper-lazy" :src="'http://movie.miguvideo.com/publish/i_www'+ sell.imgSrc" alt="">
                        <p>{{sell.name}}</p>
                        <p>{{sell.LONG_NAME}}</p>   
                    </a></li>               
                </ul>
            </div>
        </div>
        <div id="three">
            <h1>精彩活动</h1>
            <div id="better1">
                <ul>
                    <li v-for="(activity,index) in wonderfulActivity" :key="index">
                        <a href="#">
                            <img :src="'http://movie.miguvideo.com/publish/i_www'+ activity.imgSrc" alt="">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
         

    </div>
</div>

</template>
<script>
import Swiper from "swiper"
import Vuex, { mapState } from "vuex"
import BScroll from "better-scroll"
import mainContent from "@api/mainContent"

export default {
    name:"mainContent",
    created(){
this.actionsMain();
    },
    computed:{    
            ...Vuex.mapState({
            'loopPic': state => state.zdw.loopPic,
            'sellTicket':state => state.zdw.sellTicket,
            'wonderfulActivity':state => state.zdw.wonderfulActivity

        })
    
    },
    mounted(){    
        let FP = document.querySelector("#zzz");
        let scroll = new BScroll(FP);
        let better =document.querySelector('#better');
        let scroll1 = new BScroll(better,{
            scrollX:true
        })
        let better1 =document.querySelector('#better1');
        let scroll2 = new BScroll(better1,{
            scrollX:true
        });  
        this.$nextTick(function(){    
            var mySwiper = new Swiper('.swiper-container',{
                autoplay: {
                    disableOnInteraction: false,
                },
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                lazyLoading : true,
                observer:true,
                observeParents:true,
                width:1125 ,               
                coverflowEffect: {
                    rotate: 40,
                    stretch: 30,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                } ,
                onSlideChangeEnd: function(swiper){ 
                    swiper.update() 
                },
            })
        })
        
    },
    methods: {
        ...Vuex.mapActions({
            actionsMain:"zdw/actionsMainOne"
        })
    },
    activated(){
        
    },
    deactivated(){
        console.log("main deactivated")
    }
}
</script>
<style scoped>
.mainslide-enter-active {
    transition: all 1s ease;
}
.mainslide-enter-leave-active {
    transition: all 2s cubic-bezier(1.0,0.5,0.8,1.0);
}
.mainslide-enter,.mainslide-leave-to{
    transform:translateX(0.1rem);
    opacity:0;
}
#zzz{
    width:100%;
    overflow: hidden;
    height:11.7rem;
    margin-top:1.67rem;
    padding-bottom:1rem
}
#main{
    /* margin-top:1.67rem; */
    width:100%;
    
    background:#efefef;
}
#one{
    width:100%;

}
.one{
    padding-top:0.6rem;
    padding-bottom:0.6rem;
    overflow: hidden;
    width:100%;
    position: relative;
    height:100%;
    
    margin:0 auto
   
}
.one ul{
    white-space:nowrap;
    height:100%;
    width:max-content;
    overflow: hidden;
    position: relative;
    left:-2rem;
    margin:0 auto
}
.one ul li{
    width:max-content;
    display: inline-block;
    
}
.one ul li img{
    width:3.75rem;
    position: relative;
}
#two,#three{
    width:100%;
    margin-bottom: 0.2rem;
    background-color:white;
}
#two h1,#three h2{
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
}
#two ul{
    display: flex;
    width:28.12512rem
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
#three ul{
    overflow: hidden;
    display: flex;
    width:max-content;
}
#three ul li{
    float:left;
    width:7.5rem;
        flex-shrink: 0
}
#three ul li img{
    width:100%;
    height:2.8rem;
    border:none;
}
</style>

