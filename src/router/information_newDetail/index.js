export default {
    path:"/newDetail/:movieId",
    name:"details",
    component:()=>import("@components/informations/newDetail/newDetail"),
    props:true,
    meta:{

    }
}