
export default {
    path:'/FP',
    name:"FP",
    component:() => import("@views/firstpage/firstPage.vue"),
    meta:{
        flag:0,
        TabBarFlag:true,
    },
    props:true,
    children:[
        {
            path:"watchMovie",
            name:"watchMovie",
            component:() => import("@components/watchMovie/watchMovie.vue"),
            meta:{
                flag:false
            }
        },
        {
            path:"mainContent",
            name:"mainContent",
            component:() => import("@components/main/mainContent.vue"),
            meta:{
                flag:false
            }
        }
    ]
}