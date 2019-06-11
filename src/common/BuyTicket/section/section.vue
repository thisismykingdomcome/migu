<template>
    <div>
        <section>
            <div class="movieNav">
                <router-link  v-bind:to="{name:'movieNow'}" tag="p">正在热映 </router-link>
                <router-link v-bind:to="{name:'movieComing'}" tag="p">即将上映 </router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 分化部分 */
    section{
        position: fixed;
        top: 1rem;
        width: 100%;
        font-size: .3rem !important;
        background: #fff;
        z-index: 55;
    }
    section .movieNav{
        display: flex;
        justify-content: space-around;
    }
    section .movieNav p{
        padding-top: .24rem;
        padding-bottom: .24rem;
    }
    .router-link-active{
        border-bottom:2px solid #f74444;
        color: #f74444;
    }

</style>
