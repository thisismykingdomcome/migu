import mainContent from "../../components/main/mainContent.vue"
import watchMovie from "../../components/watchMovie/watchMovie.vue"
import FP from "../../views/firstpage/firstPage.vue"
export default {
    path:'/FP',
    name:"FP",
    component:FP,
    children:[
        {
            path:"/watchMovie",
            name:"/watchMovie",
            component:() => {"../../components/watchMovie/watchMovie.vue"}
        },
        {
            path:"/mainContent",
            name:"/mainContent",
            component:() => {"../../components/main/mainContent.vue"}
        }
    ]
}