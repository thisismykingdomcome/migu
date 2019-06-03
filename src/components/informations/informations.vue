<template>
    <div class="zixun">
        <banner title="资讯"/>
        <information />
    </div>
</template>


<script>
import Vuex from 'vuex'
import banner from '@components/discover/discover_back/back'
import information from '@components/discover/discover_information/information'
export default {
    name:'informations',
    components:{
        banner,
        information
    }
}
</script>


<style lang="scss" scoped>

</style>
