
export default {
    path:'/FP',
    name:"FP",
    component:() => import("../../views/firstpage/firstPage.vue"),
    meta:{flag:true},
    children:[
        {
            path:"/watchMovie",
            name:"watchMovie",
            component:() => import("../../components/watchMovie/watchMovie.vue"),
            meta:{
                flag:true
            }
        },
        {
            path:"/mainContent",
            name:"mainContent",
            component:() => import("../../components/main/mainContent.vue"),
            meta:{
                flag:false
            }
        }
    ]
}