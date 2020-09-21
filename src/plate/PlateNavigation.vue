<template>
<!-- 
    MEMO :
    PlateNavigation 에선, 기본적으로 가로, 세로 100% 인 #nav 라는 레이어에서 
    전역 성격으로 적절한 네비게이션들을 배치합니다
    #nav 자체는 기본적으로 윈도우(100%,100%)의 크기를 가지며 position : fixed입니다.
    #nav 이하의 컴포넌트들은 자유롭게 배치할수 있습니다.
-->

    <nav id="nav_plate">        

        <!-- 예시 : gnb 영역 네비게이션 컴포넌트 -->
        <NavigationGnb  v-on:toggleGlobalMenu="toggleGlobalMenu"
                        v-bind:routesInfo="routesInfo"
                        
        />            

        <!-- 예시 : 메뉴로 열고닫는 네비게이션 컴포넌트-->

        <NavigationMenu     v-bind:isOpenMenu="isOpenMenu"
                            v-on:closeGlobalMenu="closeGlobalMenu"
                            v-bind:routesInfo="routesInfo"
        />
        
    </nav>
</template>

<script>
import { routerInfo }   from '@/router/router.js';

import NavigationGnb    from '@/components/navigation/NavigationGnb.vue';
import NavigationMenu   from '@/components/navigation/NavigationMenu.vue';

export default {
    name : 'PlateNavigation',
    components : { NavigationGnb , NavigationMenu },
    data () {
        return {
            isOpenMenu : false,
            routesInfo : routerInfo.routes
        };
    },
    watch: {
        '$route' () {
            this.closeGlobalMenu();
        },
    },
    methods : {
        toggleGlobalMenu() {
            this.isOpenMenu = !this.isOpenMenu;
            this.$store.commit(this.isOpenMenu ? 'LOCK_scroll' : 'UNLCOK_scroll');
        },
        openGlobalMenu() { 
            this.isOpenMenu = true;
            this.$store.commit('LOCK_scroll');
        },
        closeGlobalMenu() { 
            this.isOpenMenu = false;
            this.$store.commit('UNLOCK_scroll');
        },
    },
    created() {
        
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

#nav_plate{
    position: fixed;
    z-index: 1000;
    width: 100vw; height: 100%;
    pointer-events: none;
    background-color: transparent;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }
}
</style>