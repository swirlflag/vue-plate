<template>
    <div id="app" v-bind:class="`page--${pageName}`">

        <!-- 모달 -->

        <!-- 네비게이션 -->
        <Navigation></Navigation>

        <!-- 백그라운드 fix -->

        <!-- 스피너 -->

        <!-- 라우터 페이지 -->
        <div id="page">
            <router-view></router-view>
            <!-- 페이지 푸터 -->
        </div>

        <!-- 공통 푸터 -->
        <Footer></Footer>
    </div>
</template>

<script>

import { 
    Navigation ,
    Footer ,
} from '@/components';

export default {
    name: 'App',
    components: {
        Navigation , Footer
    },
    computed : {
        pageName () {
            return this.$route.name
        },
    },
    created() {
        console.log(this.$store.state.pageScrollLock);
        this.$store.commit('lock_scroll');
        console.log(this.$store.state.pageScrollLock);
        // window.addEventListener('scroll' ,  (e) => {
        //     console.log(e);
        // })
        // document.querySelector('html').addEventListener('scroll' , (e) => {
        //     console.log(e);
        // })
    },
};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


