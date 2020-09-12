<template>
<div class="page__outer">
    <div class="page__inner">

        <div class="paragraph">

            <div class="paragraph__title">
                HELLO, VUE PLATE.
            </div>

            <span class="paragraph__divider"></span>

            <div class="paragraph__text">
                "뷰 플레이트" 는 vue.js로 제작하는 프론트엔드 환경에서 
                웹앱이 담아야 하는 클라이언트 사이드의 기본적인 기능들을 미리 만들어 준비해 둔 보일러 플레이트 입니다.
                기본적인 기능들의 정리와 약간의 폴더링이 되어있으므로 바로 수정,확장을 통해 제작을 시작할수 있습니다.
                뷰 플레이트로 아주 다양한 페이지를 만들수는 없지만 주어진 기획이 잘 맞는다면
                빠르게 초기 틀 제작과 설정을 건너뛰어 일관된 형태의 컨벤션을 유지할 수 있을 것입니다.
            </div>
            
            <div class="paragraph__title size--2">
                환경
            </div>
            <div class="paragraph__text">
                vue-cli v4.x버전의 vue-create를 사용해 프로젝트 생성후 아래의 항목을 설치했습니다.
            </div>
            <div class="paragraph__title size--3">
                dependencies
            </div>
            <ul class="paragraph__list">
                <li>axios</li>
                <li>sass</li>
                <li>vue-router</li>
                <li>vuex</li>
            </ul>
            <div class="paragraph__title size--3">
                dev-dependencies
            </div>
            <ul class="paragraph__list">
                <li>node-sass</li>
                <li>sass-loader</li>
            </ul>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    name : 'page_main',
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

.page__inner {
    margin: 100px auto;
}

</style>