<template>
    <div id="app" v-bind:class="`page--${pageName.toLowerCase()}`">

        <!-- 
            todo: 
            구글 로그인
            카카오 로그인
            라우터 가드 셋팅
            스피너
            API 셋팅
         -->

        <!-- 모달 -->
        <ModalPlate/>

        <!-- 네비게이션 -->
        <NavigationPlate/>

        <!-- 백그라운드 fix -->

        <!-- 스피너 -->

        <!-- 라우터 페이지 -->
        <PagePlate/>
        
        <!-- 공통 footer-->
        <FooterPlate/>

    </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>

import NavigationPlate      from '@/components/plate/NavigationPlate.vue';
import ModalPlate           from '@/components/plate/ModalPlate.vue';
import PagePlate            from '@/components/plate/PagePlate.vue';
import FooterPlate          from '@/components/plate/FooterPlate.vue';

export default {
    name: 'App',
    components: {
        NavigationPlate , ModalPlate , PagePlate , FooterPlate
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
            this.$_ua.pageview(now).send();
        },

    },
    methods : {
    },
    created() {
        
    },
};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


