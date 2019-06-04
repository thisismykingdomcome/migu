export default{
   path:"/BuyTicket", 
   name:"BuyTicket",
   component: () => import("@views/BuyTicket/BuyTicket"),
   meta:{
       TabBarFlag:true
   },
   children:[
        {
           path:"/BuyTicket",
           redirect:"/BuyTicket/movieNow"
        },
        {
            path:"movieNow",
            name:"movieNow",
            component:()=>import("@components/BuyTicket/movie/movieNow"),
            meta: {
                TabBarFlag: true
            },
        },
        {
            path:"movieComing",
            name:"movieComing",
            component:()=>import("@components/BuyTicket/movie/movieComing"),
            meta: {
                TabBarFlag: true
            },
        }
   ]
}