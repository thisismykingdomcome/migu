<template>
   <div id="footer">
		<router-link v-for="(item,index) in nav" v-bind:key="index" v-bind:to="item.path" tag="div">
			<p>{{item.title}}</p>
			<span class="iconfont" v-html="item.icon"></span>
		</router-link>
    </div>
</template>

<script>
export default {
	name:"TabBar",
	data(){
		return{
			nav:[
				{
					title:"看片",
					icon:"&#xe679;",
					path:"/FP"
				},
				{
					title:"购票",
					icon:"&#xe626;",
					path:"/BuyTicket"
				},
				{
					title:"发现",
					icon:"&#xe68c;",
					path:"/discover"
				},
				{
					title:"我的",
					icon:"&#xe659;",
					path:"/mine"
				}
			]
		}
	}
}
</script>


<style scoped>
/* 底部 */
		#footer{
			margin-top: 2.4rem;
			width: 100%;
			position:fixed;
			bottom: 0;
			font-size: .28rem !important;
			display: flex;
			justify-content: space-around;
			border-top: 1px solid #dadada;
			padding: .2rem 0;
			background-color: #fff; 
		}
		#footer div{
			display: flex;
			flex-direction: column-reverse;
		}
		#footer div span{
			text-align: center;
			font-size: .28rem;
			margin-bottom: .1rem;
		}
		#footer .router-link-active{
			color: #F74444;
		}
</style>
