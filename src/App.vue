<template>
    <div id="app">

        <!-- 모달 -->

        <!-- 네비게이션 -->
        <Navigation></Navigation>

        <!-- 백그라운드 fix -->

        <!-- 라우터 페이지 -->
        <router-view></router-view>

        <!-- 푸터 -->

    </div>
</template>

<script>

import { Navigation } from '@/components';

export default {
    name: 'App',
    components: {
        Navigation
    },
    created() {

    },
};
</script>

<style src="@/style/global/reset.css"></style>
<style src="@/style/global/normalize.css"></style>
<style src="@/style/global/global.scss" lang="scss"></style>
<style src="@/style/mixin/_test.scss" lang="scss"></style>


