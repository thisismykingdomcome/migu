<template>
<div>
    <Top></Top> 
    <div id="zzz">
        <div id="parent">
            <div class="smallbox" v-for="(item,index) in VideoOne" :key="index">
                <a href="#">
                    <img :src="'http://movie.miguvideo.com/publish' + item.picList[0].imgSrc" alt="">
                    <span>{{item.name}}</span>
                </a>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
import Vuex from "vuex"
import BScroll from "better-scroll"
import Top from "@common/top/top";
import BScroll1 from "@common/BScroll/BScroll.vue"
export default {
    name:"smallVideo",
    components:{
        Top,
        BScroll1
    },
    created(){
        this.actionsVideo()
    },
    methods:{
        ...Vuex.mapActions({
            actionsVideo:"zdw/actionsVideo"
        })
    },
    computed:{
        ...Vuex.mapState({
            'VideoOne':state=>state.zdw.VideoOne
        })
    },
    mounted(){
        this.$nextTick(function(){
            let FP = document.querySelector("#zzz");
            let scroll = new BScroll(FP)
        })
    }   
}
</script>
<style scoped>
#zzz{
    width:100%;
    height:11.7rem;
    overflow: hidden;
    margin-top:1.7rem;
    
}
#parent{
    height:max-content;
    width:100%;
padding-bottom:1.2rem
}
.smallbox{
    position: relative;
    width:100%;
    margin-bottom:0.1rem
}
.smallbox img{
    width:100%
}
.smallbox span{
    position: absolute;
    left: 0.24rem;
    bottom: 0.24rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color:white;
    font-size:0.28rem
}
</style>