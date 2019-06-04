export  default {
    path:'/discover',
    name:'discover',
    component:()=>import("@views/discover/Discover"),
    meta :{
        TabBarFlag:true
    }
}