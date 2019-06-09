<template>
  <div id="app">
      <keep-alive>
        <transition :name="this._data.fade" >
          <router-view></router-view>
        </transition>
      </keep-alive>
      <TabBar v-if="$route.meta.TabBarFlag"/>
  </div>
</template>
<script>
import TabBar from "@common/BuyTicket/tabBar/tabbar";
  export default {
    name:"App",
    data(){
      return {
        fade: ""
      }
    },
    components:{
      TabBar
    },
    watch:{
      $route(to,from) {
        
        if(to.meta.flag > from.meta.flag){
          this._data.fade = "slide-left"
        }else{
          this._data.fade = "slide-right"
        } 
        
      }
    },
  }
</script>
<style>

  #app{
    height:100%
  }
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {/*离开中或插入中的动画时间为1s*/
  will-change: transform;
  transition: all 1000ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-14rem, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(14rem, 0, 0);
}
 .slide-left-enter {/*在元素被插入前生效，插入后的下一帧移除 */
  opacity: 0;
  transform: translate3d(14rem,0, 0);/*要插入的组件瞬移到14rem的位置，花费1帧的时间*/
}
.slide-left-leave-active {/*在整个离开的过渡阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除*/
  opacity: 0;
  transform: translate3d(-14rem, 0, 0);/*当前的slide-left组件离开，从0位移到-14rem的位置 花费1s*/
}

/* .fade-enter-active{
  transition:opacity .5s
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s
} */
</style>
