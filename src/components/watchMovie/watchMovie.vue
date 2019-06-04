<template>
<div id="zzz">
    <div id="watchMovie">
        <div class="loopPic">
            <ul>
                <li><a href="#"><img src="../../../public/Camera Roll/fate28.jpeg" alt=""><span>哈哈哈哈</span></a></li>
                <li><a href="#"><img src="../../../public/Camera Roll/fate28.jpeg" alt=""><span>撒地方卡萨打发</span></a></li>
                <li><a href="#"><img src="../../../public/Camera Roll/fate28.jpeg" alt=""><span>阿斯顿发送到发生</span></a></li>
            </ul>
        </div> 
        <div id="two">
                <h1>正在售票</h1>
                <div>
                    <ul>
                        <li><a href="">
                            <img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                            </a>
                        </li>
                        <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                        </a></li>
                        <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                        </a></li>
                        <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                        </a></li>
                        <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                        </a></li>
                        <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                            <p>撒大声地撒地方撒大</p>
                            <p>阿士大夫撒打算的发生</p>
                        </a></li>
                    </ul>
                </div>
        </div>
        <div id="three">
            <h1>正在售票</h1>
            <div>
                <ul>
                    <li><a href="">
                        <img src="../../../public/Camera Roll/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                        </a>
                    </li>
                    <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                    <li><a href=""><img src="../../../public/Camera Roll/fate11.jpg" alt="">
                        <p>撒大声地撒地方撒大</p>
                        <p>阿士大夫撒打算的发生</p>
                    </a></li>
                </ul>
            </div>
        </div> 
    </div>    
</div>  
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"WatchMovie",
    components: {
  
    },
    mounted(){
        let FP = document.querySelector("#zzz");
        let scroll =new BScroll(FP)
    }
}
</script>
<style scoped>
#zzz{
    width:100%;
    height:14rem
}
#watchMovie{
    margin-top: 1.6rem
}
.loopPic{
    width:100%;
    height:auto;
    box-sizing:border-box
}
.loopPic ul{
    overflow: hidden;
    width:100rem;
}
.loopPic ul li{
    float:left;
    width:7.5rem;
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
#three,#three{
    width:100%;
    margin-bottom: 0.2rem;
}
#three h1,#three h2{
    height:0.9rem;
    line-height:0.9rem;
    padding-left:0.16rem;
    padding-right:0.24rem;
    font-size:0.32rem;
}
#three div{
    width:100%;

}
#three ul li {
    width:2.34376rem;
    height:4.576rem;
    float:left;
    margin-right:2%
}
#three ul{
    
    width:100%
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
#three,#three{
    width:100%;
    margin-bottom: 0.2rem;
}
#three h1,#three h2{
    height:0.9rem;
    line-height:0.9rem;
    padding-left:0.16rem;
    padding-right:0.24rem;
    font-size:0.32rem;
}
#three div{
    width:100%;
    overflow: hidden;
}
#three ul li {
    width:2.34376rem;
    height:4.576rem;
    float:left;
}
#three ul{
    display: flex;
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
