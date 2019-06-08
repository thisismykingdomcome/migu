<template>
    <div>
        <Header/>
        <!--分化区域-->
        <Section  v-if="$route.meta.SectionFlag"/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Vuex from "vuex"
import Header from "@common/BuyTicket/header/header"
import Section from "@common/BuyTicket/section/section"
export default {
    name:"BuyTicket",
    components:{
        Header,
        Section
    }
}
</script>

<style>
</style>
