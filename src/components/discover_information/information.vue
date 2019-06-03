<template>
    <div class="information">
        <div class="information_module">
               <!-- 资讯模块时间 -->
               <div class="date">2019年06月01日</div>
               <!-- 资讯模块详情 -->
               <div class="module_details">
                  <!-- 资讯模块详情头部 -->
                  <div class="module_name">
                     <span>资讯</span>
                     <a href="#">
                        <span class="information_enter"></span>
                     </a>
                  </div>
                  <!-- 资讯模块详情内容 -->
                  <div class="module_content">
                     <ul>
                        <li>
                           <a href="#">
                              <div class="article_top">
                                 <div class="article_left">“X战警：黑凤凰”主创体验中国京剧</div>
                                 <div class="article_right">
                                    <img class="lazy" alt="" src="http://movie.miguvideo.com/publish/poms/image/1502/842/425/201906021238_32_HSJ720H.jpg">
                                 </div>
                              </div>
                           </a>
                           <div class="article_bottom">
                              <div class="article_from">来源：时光网</div>
                              <div class="article_praise">
                                 <i onclick="commentInfos(this,657306907)" class="iconfont">&#xe62a;</i>
                                 <span style="margin-left:5px;">0</span>
                              </div>
                           </div>
                        </li>
                        <li>
                           <a href="#">
                              <div class="article_top">
                                 <div class="article_left">“X战警：黑凤凰”主创体验中国京剧</div>
                                 <div class="article_right">
                                    <img class="lazy" alt="" src="http://movie.miguvideo.com/publish/poms/image/1502/842/425/201906021238_32_HSJ720H.jpg">
                                 </div>
                              </div>
                           </a>
                           <div class="article_bottom">
                              <div class="article_from">来源：时光网</div>
                              <div class="article_praise">
                                 <i onclick="commentInfos(this,657306907)" class="iconfont">&#xe62a;</i>
                                 <span style="margin-left:5px;">0</span>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
    </div>

</template>


<script>
import Vuex from 'vuex'
export default {
    name:'discoverInformation'
}
</script>


<style lang="scss" scoped>

/* 资讯模块 */
.information_module{
    background: #fff;
}
/* 资讯模块时间 */
.date{
    height: 0.7rem;
    line-height: 0.7rem;
    padding: 0 0.24rem;
    background: #efefef;
    font-size: 0.32rem;
    color: #1a1a1a;
}
/* 资讯模块详情头部 */
.module_name{
    height: 0.9rem;
    line-height: 0.9rem;
    background: url(../../../public/imgers/icon/module-icon.png) no-repeat 0 0.22rem;
    background-size: 0.06rem 0.46rem;
    padding-left: 0.16rem;
    padding-right: 12px;
    font-size: 0.32rem;
    .information_enter{
        background: url(../../../public/imgers/icon/moreCon.png) no-repeat 0 0.32rem;
        display: block;
        float: right;
        background-size: 0.12rem 0.24rem;
        width: 0.2rem;
        line-height: 0.9rem;
        height: 0.9rem;
    }
}

/* 资讯模块详情内容 */

.module_content{
    width: 100%;

    ul li{
        width: 100%;
        height:auto;
        padding: 0.16rem 0.24rem;
        border-top: 1px solid #e7e7e7;
    }
}


/* 资讯模块文章 */
.article_top{
    width: 100%;
    display: flex;

    .article_left{
        flex:2;
        font-size: 0.28rem;
        color: #666;
        padding-right: 0.28rem;
    }

    .article_right{
        flex:1;
    }

    .article_right img{
        width: 100%;
    }
}


/* 文章来源 */
.article_bottom{
    width: 100%;
    line-height: 0.5rem;
    display: flex;
    justify-content: space-between;

    .article_from{
        float: left;
        font-size: 0.24rem;
        color: #333;
    }

    .article_praise{
        float: right;
        font-size: 0.3rem;
    }
}

.iconfont{
    font-size: 0.34rem !important;
}
</style>
