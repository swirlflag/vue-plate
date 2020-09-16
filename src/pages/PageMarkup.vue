<template>
<div class="page__outer">
    <div class="page__inner">
        <div class="paragraph">
            <div class="paragraph__title size--1">
                마크업 기준
            </div>
            <div class="paragraph__divider"></div>
            <div class="paragraph__title size--3">
                 각 페이지
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
                <strong>
                    #app
                    <br>┣ #modal_plate
                    <br>┣ #spinner_plate
                    <br>┣ #nav_plate
                    <br>┣ #page_plate
                    <br>┗ #footer_plate
                </strong>
            </div>
            <div class="paragraph__title size--2">
                #modal_plate
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'PageMarkup'
}
</script>

<style>

</style>