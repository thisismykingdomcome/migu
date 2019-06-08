export default{
   path:"/BuyTicket", 
   name:"BuyTicket",
   component: () => import("@views/BuyTicket/BuyTicket"),
   meta:{
       TabBarFlag:true,
       SectionFlag:true
       
   },
   children:[
        {
            path:"movie",
            name:"movie",
            component: () => import("@views/BuyTicket/BuyTicket"),
            meta: {
                TabBarFlag: true,
                SectionFlag: true
            },
            children:[
                {
                    path: "movieNow",
                    name: "movieNow",
                    component: () => import("@components/BuyTicket/movie/movieNow"),
                    meta: {
                        TabBarFlag: true,
                        SectionFlag: true
                    },
                },
                {
                    path: "movieComing",
                    name: "movieComing",
                    component: () => import("@components/BuyTicket/movie/movieComing"),
                    meta: {
                        TabBarFlag: true,
                        SectionFlag: true
                    },
                }    
            ]
        },
        {
            path:"cinema",
            name:"cinema",
            component: () => import("@components/BuyTicket/cinema/cinema"),
            meta: {
                TabBarFlag: true,
                SectionFlag: false
            },
        },
         {
           path: "/",
           redirect: "/BuyTicket/movie/movieNow"
       },
      
   ]
}