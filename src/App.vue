<template>
    <div 
        id="app" 
        :class="`
            ${appClassNamePage} 
            ${appClassNameDevice} 
            ${appClassNameOS} 
            ${appClassNameBrowser} 
            ${appClassNameLanguage} 
            ${appClassNameTouchdevice}
        `"
    >
    
        <template v-if="this.$store.state.use_coverdPlate">
            <!-- IE 및 기타 환경 대체 화면 -->
            <PlateCover/>
        </template>

        <template v-else>
            <!-- 모달 -->
            <PlateModal/>

            <!-- 네비게이션 -->
            <PlateNavigation/>

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
        appClassNamePage() {
            return `page--${(this.$route.name || 'error').toLowerCase()}`;
        },
        appClassNameBrowser() {
            return `browser--${this.$store.state.type_browser}`;
        },
        appClassNameOS() {
            return `os--${this.$store.state.type_os}`;
        },
        appClassNameDevice() {
            return `device--${this.$store.state.type_device}`;
        },
        appClassNameLanguage() {
            return `language--${this.$store.state.languageType}`;
        },
        appClassNameTouchdevice() {
            return this.$store.state.is_touchDevice ? 'use_touch' : 'unuse_touch';
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
    created() {
        
    }

};
</script>

<style src="@/style/global/font.css"></style>
<style src="@/style/global/reset.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


