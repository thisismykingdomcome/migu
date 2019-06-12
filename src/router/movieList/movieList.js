export default{
    path:"/movieList",
    name:"movieList",
    component:() => import("@components/movieList/movieList.vue"),
    meta:{
        flag:2,
        TabBarFlag:true
    }
}