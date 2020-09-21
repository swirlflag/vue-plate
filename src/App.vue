<template>
    <div id="app" v-bind:class="`page--${pageName.toLowerCase()}`">

        <!-- 
            TODO: 
            구글 로그인
            카카오 로그인
            라우터 가드 
            스피너
            API 셋팅
            smoothscroll
            table
            IE
         -->

        <template v-if="this.$store.state.use_coverdPlate">
            <!-- IE 및 기타 환경 대체 화면 -->
            <CoverPlate/>
        </template>

        <template v-else>
            <!-- 모달 -->
            <ModalPlate/>

            <!-- 네비게이션 -->
            <NavigationPlate/>

            <!-- 백그라운드 fix -->
            <!-- <BackgroundPlate/> -->

            <!-- 스피너 -->
            <!-- <SpinnerPlate/> -->

            <!-- 라우터 페이지 -->
            <PagePlate/>
            
            <!-- 공통 footer-->
            <FooterPlate/>
        </template>

    </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>

import NavigationPlate      from '@/plate/NavigationPlate.vue';
import ModalPlate           from '@/plate/ModalPlate.vue';
import PagePlate            from '@/plate/PagePlate.vue';
import FooterPlate          from '@/plate/FooterPlate.vue';
import CoverPlate           from '@/plate/CoverPlate.vue';

export default {
    name: 'App',
    components: {
        NavigationPlate , ModalPlate , PagePlate , FooterPlate , CoverPlate
    },
    data() {
        return {
            scrollPosition : 0,
        }
    },
    computed : {
        pageName () {
            return this.$route.name
        },
    },
    watch : {
        '$store.state.is_pageScrollLock'(now){
            const body = document.body;
            if(now){
                body.classList.add('st-lockscroll');
            }else {
                body.classList.remove('st-lockscroll');
            }
        },
        '$route.path'(now) {
            window.scrollTo(0,0);
        },

    },
    methods : {
    },
    created() {
        // console.log(this.$store.state.use_coverdPlate);
    },
};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


