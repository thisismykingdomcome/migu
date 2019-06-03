<template>
<div id="zzz">
    <div id="main">
        <div id="one">
            <div class="one">
                <ul>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate02.jpeg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate02.jpeg" alt=""></a></li>
                </ul>
            </div>
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
                </ul>
            </div>
        </div>
        <div id="three">
            <h1>精彩活动</h1>
            <div>
                <ul>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate37.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate37.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../../../public/Camera Roll/fate37.jpg" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>     -->

    </div>
</div>
</template>
<script>
import BScroll from "better-scroll"
import mainContent from "../../api/mainContent"
export default {
    name:"mainContent",
    mounted(){
        let FP = document.querySelector("#zzz");
        let scroll =new BScroll(FP)
    }
}
</script>
<style scoped>
#zzz{
    width:100%;
    overflow: hidden;
    height:14rem
}
#main{
    margin-top:1.6rem;
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
#three ul li{
    float:left;
    width:7.5rem;
}
</style>

