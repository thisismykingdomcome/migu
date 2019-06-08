<template>
<div class="start">
    <div class="wrapper" ref="wrapper">
        <div class="movieComingContent">
            <p class="movieTime">05月31日<span>周五</span></p>
            <ul>
                <li v-for="(item,index) in movieComingList" :key="index" >
                    <div class="comingPicture">
                        <img :src="'http://movie.miguvideo.com/'+item.picAddr">
                    </div>
                    <div class="comingContent">
                        <p>{{item.filmName}}</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>{{item.director}}</span></p>
                            <p class="actor">{{item.actor}}</p>	
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i :class="item.isPreSale==0? 'wish':'intendPay' ">{{item.isPreSale==0? '想看':'预售'}}</i>
                    </div>
                </li>
            </ul>
        </div>
    </div>  
</div> 
</template>

<script>
import Vuex from "vuex";
import betterScroll from "better-scroll"
import { createDecipher } from 'crypto';
export default {
    name:"movieComing",
    methods:{
        ...Vuex.mapActions({
            actionsMovieComing:"BuyTicket/actionsMovieComing"
        })
    },
    computed:{
        ...Vuex.mapState({
            movieComingList:state => state.BuyTicket.movieComingList,
        })
    },
    created(){
        this.actionsMovieComing();
    },
    mounted(){
        this.$nextTick(() => {
        this.scroll = new betterScroll(this.$refs.wrapper, {
            click:true,
        })
      })
    }

}
</script>

<style scoped>
    .wrapper{
        height:10.2rem;
        width: 100%;
        overflow: hidden;
    }
    *{
        box-sizing: border-box;
    }
    .start{
        font-size: .28rem !important;
        margin-top: 2rem;
    }
    .movieComingContent{
        position: absolute;
        width:100%;
        height: max-content;
    }
    .movieComingContent .movieTime{
        padding: .1rem .2rem;
        background: #ccc;
    }
    .movieComingContent img{
        width: 100%;
        height: 100%;
    }    
    .movieComingContent ul li{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        padding-bottom: .1rem; 
        padding-top: .2rem; 
        overflow: hidden;
    }
    .movieComingContent ul li .comingPicture{
        width: 1.32rem;
        height: 2rem;
    }
    .movieComingContent ul li .comingContent{
        width:55%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .movieComingContent ul li .movieBtn{
        display: flex;
        align-self: center;
    }
    .actor{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .wish{
        color: #f74444;
        padding:.1rem .2rem;
        border: 1px solid #F74444;
        border-radius: 5px;
    }
    .intendPay{
        border: 1px solid skyblue;
        padding: .1rem .2rem;
        border-radius: 5px;
        color: skyblue;
    }
</style>
