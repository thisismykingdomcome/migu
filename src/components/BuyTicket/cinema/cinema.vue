<template>
    
    <div class="all">
        <Header/>
        <div class="navSecond">
            <p class="active">附近</p>
            <p class="iconfont">&#xe65d;</p>
        </div>
        <div class="cinema"> 
            <BScroll>
                <div class="second">
                    <!--影院地址-->
                    <div class="cinemaAddress" v-for="(item,index) in cinemaList" :key="index">
                        <p>{{item.cinemaName}}</p>
                        <p>{{item.cinemaAdd}}</p>
                        <p></p>
                    </div>
                </div>
            </BScroll>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import Header from "@common/BuyTicket/header/header"
export default {
    name:"cinema",
    components:{
        Header
    },
    methods:{
        ...Vuex.mapActions({
            actionsCinema:"BuyTicket/actionsCinema",
        })
    },
    computed:{
        ...Vuex.mapState({
            cinemaList:state=>state.BuyTicket.cinemaList,
        })
    },
    created(){
        this.actionsCinema();
    }

}
</script>

<style scoped>
    /* 二级导航 */
        .all{
            font-size: .3rem !important;
    		margin-top: 2rem;
        }
        .second{
            position: absolute;
            width: 100%;
            height: max-content;
        }
    	.navSecond{
            width: 100%;
            top: 1rem;
            position: fixed;	
            background: #fff;
            z-index: 999;
    	}
    	.navSecond p{
    		padding: .2rem;
    		float: left;
    	}
    	.navSecond p:last-child{
    		padding: .1rem;
    		float: right; 
    		margin-right: .5rem;
    		margin-top: .1rem;
    		border: 1px solid #ccc;
    		border-radius: 50%;
    	}
        .navSecond .active{
            background: #fff;
            color: #f74444;
            border-bottom: 2px solid #f74444;
        }

        /**影院地址**/
        .cinemaAddress{
            width: 100%;
            padding:.1rem .24rem .2rem;
            font-size: .28rem;
            border-bottom: 1px solid #ccc;
        }
        .cinemaAddress p{
            width: 80%;
            padding-top: .1rem;
            padding-bottom:.1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
</style>
