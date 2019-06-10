<template>
<div class="page">
    
    <!-- 滑动区域外边框 -->
    <div class="wrapper" ref="wrapper">
    <!-- 滑动区域内容 -->
    <div class="content">
        <banner title="中国内地10月影视" />
        <div class="page_head">
            <h4>{{detailData.title}}</h4>
            <div class="page_from">
                <span class="pull_left">新浪微博</span>
                <span class="pull_right">{{detailData.CreateTime}}</span>
            </div>
            <div class="article_wrap" style="padding: 0 10px;" v-html="detailData.Detail">
                
            </div>
            <div class="have_lick">
                <button type="button" onclick="Fabulous1(this,5)">
                    <i class="iconfont">&#xe62a;</i>
                    <span>0</span>
                </button>
            </div>
        </div>

        <div class="page_main">
            <div class="correlation">
                <div class="correlation_title">
                    <span>相关影片</span>
                </div>
                <div class="correlation_movie">
                    <ul>
                        <li>
                            <div class="movie_img">
                                <a href="">
                                    <img src="http://movie.miguvideo.com/publish/poms/image/3009/356/383/201901291439_zaicichufa_HSJ720V.jpg">
                                </a>
                                <span class="movie_grade">
                                    <span class="font_17">8</span>.<span class="font_12">5</span>
                                </span>
                                </div>
                            <div class="movie_name">
                                <p>再次出发之纽约遇见你</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="good_comments_wrap">
                <div class="comments_hand">
                    <span>精彩评论</span>
                </div>
                <div id="good_comment">
                    <ul></ul>
                </div>
            </div>
        </div>

   
    </div>
    <!-- 滑动区域内容结束 -->
    </div>
    <!-- 滑动区域外边框结束 -->

    <!-- 尾部开始 -->
     <div class="page_foot">
        <div class="clearfix">
            <input class="input_comment" type="text" placeholder="说点什么吧~">
            <button type="button" class="send_comment" >发送</button>
        </div>
    </div>
    <!-- 尾部结束 -->
</div>
</template>


<script>
import Vuex from 'vuex'
import betterScroll from 'better-scroll'//引入btter-scroll 插件 
import banner from '@components/discover/discover_back/back'
export default {
    name:'newDetail',
    props:["movieId"],
    components:{
        banner
    },


    created(){
        this.NewDetails(this.movieId); //进入页面，触发此函数，往函数传电影ID，actions.js接收
       
    },
    methods:{
        ...Vuex.mapActions({
            NewDetails:'discover/NewDetails'  //从actions引入newDetails函数
        })
    },
    computed:{
        ...Vuex.mapState({
            detailData:state=>state.discover.informationsData
        })

    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll = new betterScroll(this.$refs.wrapper, {
            click:true, //设置可点击
            })
        })
        
    }
}


</script>



<style lang="scss" scoped>
.page{
    height: 100%;
}
.wrapper{
    height: 100%;
   
}

/* 资讯详情头部 */
.page_head{
    padding: 0.2rem 0 0.5rem;
    background-color: #fff;

    h4{
        font-size: 0.42rem;
        padding: 0 0.2rem;
    }

    .page_from{
        font-size: 0.24rem;
        color: #999;
        padding: 0.2rem;

        .pull_left{
            float: left;
        }

         .pull_right{
            float: right;
        }
    }

    .article_wrap{
        padding: 0 0.2rem;
        font-size: 0.32rem;
    }
    .article_wrap p {
        font-size: 0.32rem;
    }

}


.have_lick{
    margin-top: 0.2rem ;
    text-align: center;
    box-sizing: border-box;

    button{
        background: #ccc;
        border: 0;
        padding: 0.16rem 0.4rem;
        font-size: 0.32rem;
        border-radius: 0.06rem;
        color: #fff;

        .iconfont{
        font-size: 0.32rem !important;
        margin-right: 0.28rem;
        }
    }
}


/* 相关影片 */

/* 相关影片头部 */
.page_main{
     padding-bottom:0.96rem;
}

.correlation{
    background: #fff
}
.correlation_title{
    position: relative;
    font-size: 0.3rem;
    color: #1a1a1a;
    padding: 0.2rem 0;
    border-bottom: 1px solid #f0f0f0;
    background: url(../../../../public/imgers/icon/module-icon.png) no-repeat 0 0.22rem;
    background-size: 0.06rem 0.34rem;

    span{
        margin-left: 10px;
    }
}
/* 相关影片主体 */
.correlation_movie ul li{
    width: 33.33%
}
.movie_img{
    position: relative;

    img{
        width: 100%;
    }
}


.movie_grade{
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: 0;
    color: #f74444;
    padding: 0 4px;
    background-color: rgba(0,0,0,0.6);

    .font_17{
        font-size: 0.34rem;
    }
    .font_12{
        font-size: 0.24rem;
    }
}

.movie_name{
    font-size:0.26rem;
    padding: 0.1rem 0.2rem 0.2rem;
    text-align: center;
    line-height: 0.34rem;
    font-weight: 600;
}

/* 精彩评论 */

.good_comments_wrap{
    background: #fff
}
.comments_hand{
    position: relative;
    font-size: 0.3rem;
    color: #1a1a1a;
    padding: 0.2rem 0;
    border-bottom: 1px solid #f0f0f0;
    background: url(../../../../public/imgers/icon/module-icon.png) no-repeat 0 0.22rem;
    background-size: 0.06rem 0.34rem;

    span{
        margin-left: 10px;
    }
}




/* 评论 */

.page_foot{
    margin-top: 0.96rem;
    .clearfix{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0.2rem;
        background-color: #f0f0f0;
        border-top: 1px solid #d9d9d9;

        .input_comment{
            width: 82%;
            background-color: #fff;
            font-size: 0.28rem;
            color: #999;
            padding: 0.14rem 0 0.14rem 0.14rem;
            border: 0 none;
            border-radius: 0.6rem;
            float: left;
            outline: none;
        }

        .send_comment{
            width: 15%;
            padding: 0.08rem 0.08rem 0.1rem;
            color: #fff;
            border: 0 none;
            border-radius: 0.06rem;
            font-size: 0.36rem;
            float: right;
            background: rgb(247, 68, 68);
        }
    }
}

</style>
