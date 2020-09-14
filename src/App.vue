<template>
    <div id="app" v-bind:class="`page--${pageName}`">
        <!-- 모달 -->
        <ModalPlate></ModalPlate>  

        <!-- 네비게이션 -->
        <NavigationPlate></NavigationPlate>

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
    NavigationPlate ,
    ModalPlate,
    Footer ,
} from '@/components';

export default {
    name: 'App',
    data() {
        return {
            scrollPosition : 0,
        }
    },
    components: {
        NavigationPlate , ModalPlate , Footer
    },
    computed : {
        pageName () {
            return this.$route.name
        },
    },
    watch : {
        '$store.state.isPageScrollLock'(now){
            const body = document.body;
            if(now){
                body.classList.add('st-lockscroll');
            }else {
                body.classList.remove('st-lockscroll');
            }
        },
        '$store.state.isModalActive'(now) {
            if(now){
                if(this.$store.state.use_openModalWithLockScroll){
                    this.$store.commit('lock_scroll');
                }
            }else {
                this.$store.commit('unlock_scroll');
            }
        },
        '$route.path'() {
            window.scrollTo(0,0);
        },

    },
    methods : {
        justPreventDefault(e) {
            e.preventDefault();
        }
    },
    created() {
        // console.log(this.$store.state.isPageScrollLock);
        // console.log(this.$store.state.isPageScrollLock);
    },
};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


