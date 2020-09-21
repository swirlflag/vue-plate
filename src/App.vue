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
            <PlateCover/>
        </template>

        <template v-else>
            <!-- 모달 -->
            <PlateModal/>

            <!-- 네비게이션 -->
            <PlateNavigation/>

            <!-- 백그라운드 fix -->
            <!-- <PlateBackground/> -->

            <!-- 스피너 -->
            <!-- <PlateSpinner/> -->

            <!-- 라우터 페이지 -->
            <PlatePage/>
            
            <!-- 공통 footer-->
            <PlateFooter/>

        </template>

    </div>
</template>

<script>

import PlateNavigation      from '@/plate/PlateNavigation.vue';
import PlateModal           from '@/plate/PlateModal.vue';
import PlatePage            from '@/plate/PlatePage.vue';
import PlateFooter          from '@/plate/PlateFooter.vue';
import PlateCover           from '@/plate/PlateCover.vue';

export default {
    name: 'App',
    components: {
        PlateNavigation , PlateModal , PlatePage , PlateFooter , PlateCover
    },
    data() {
        return {
            scrollPosition : 0,
        }
    },
    computed : {
        pageName () {
            return this.$route.name || ''
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
        '$route.path'() {
            window.scrollTo(0,0);
        },

    },

};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


