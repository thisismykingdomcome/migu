export  default {
    path:'/shopping',
    name:'shopping',
    component:()=>import("@components/shopping/shopping"),
    meta :{
        TabBarFlag:true
    },
    props:true
}