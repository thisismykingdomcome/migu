<template>
<div id="zzz">
    <div id="main">
        <div id="one">
            <div class="one">
                <ul>
                    <li><a href="#" ><img src="'http://movie.miguvideo.com/publish/i_www'+this.$store.state.zdw.mainData[0].list[0].imgSrc" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate02.jpeg" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div id="two">
            <h1>正在售票</h1>
            <div id="better">
                <ul>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/imgers/img-zdw/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                </ul>
            </div>
        </div>
        <div id="three">
            <h1>精彩活动</h1>
            <div id="better1">
                <ul>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate37.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate37.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/imgers/img-zdw/fate37.jpg" alt=""></a></li>
                </ul>
            </div>
        </div>
         

    </div>
</div>
</template>
<script>
import Vuex from "vuex"
import BScroll from "better-scroll"
import mainContent from "../../api/mainContent"
export default {
    name:"mainContent",
    created(){
        this.actionsMain()
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
        //console.log(this.$store.state.zdw.mainData[0][0].list)
    },
    methods: {
        ...Vuex.mapActions({
            actionsMain:"zdw/actionsMainOne"
        })
    }
}
</script>
<style scoped>
#zzz{
    width:100%;
    overflow: hidden;
    height:11.7rem;
    margin-top:1.67rem
}
#main{
    margin-top:1.67rem;
    width:100%;
    
    background:#efefef;
}
#one{
    width:100%;
    background:pink
}
.one{
    padding-top:0.6rem;
    padding-bottom:0.6rem;
    overflow: hidden;
}
.one ul{
    width:max-content;
}
.one ul li{
    width:3.75rem;
    float:left;
}
.one ul li img{
    width:100%;
    height:5.555rem;
}
#two,#three{
    width:100%;
    margin-bottom: 0.2rem;
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
    width:22.5rem;
}
#three ul li{
    float:left;
    width:7.5rem;
        flex-shrink: 0
}
#three ul li img{
    width:100%;
    border:none;
}
</style>

