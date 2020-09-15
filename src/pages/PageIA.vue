<template>
<div class="page__outer">
    <div class="page__inner">
        <div class="paragraph">
            <div class="paragraph__title size--1">
                기본 구조
            </div>
            <div class="paragraph__divider"></div>
            <div class="paragraph__title size--2">
                html,body
            </div>
            <div class="paragraph__text">
                html, body는 아래의 app 위로 바로 맞닿은 document root 입니다. <br>
                html > body > #app 의 형태로 구조화 되어있으며 이런 구조때문에 공식적으로 뷰 내부에서는 body를 refs할수 없습니다.
                따라서 문서 전체를 대상으로 하는 특수한 경우(IOS포함한 스크롤 잠금)가 아니라면 
                언제나 하위의 #app을 root 기준으로 합니다. 
            </div>
            <div class="paragraph__title size--2">
                #app
            </div>
            <div class="paragraph__text">
                #app은 vue에서 권장하는 render root component입니다. 
                vue내부에서 최상위로 취급하며 바로 아래에 필요한 plate들이 나열되어 있습니다. 
                뷰 플레이트에서 미리 준비된 plate들은 아래와 같으며 필요시 App.vue내부에서 늘려갈 수 있습니다.
            </div>
            <div class="paragraph__text">
                <strong>#app</strong>
                <br><strong>┣ #modal</strong> → 모달로 분류되는 레이어팝업, 전체 레이어 등
                <br><strong>┣ #spinner</strong> → 화면 전환이나 전역적 로딩을 표현하는 스피너
                <br><strong>┣ #gnb</strong> → fixed상태를 띄는 네비게이션들
                <br><strong>┣ #page</strong> → router 형태로 관리할 본문 페이지들
                <br><strong>┗ #footer</strong> → 공통 footer
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>