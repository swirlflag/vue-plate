<template>
    <div class="page__outer">
        <div class="page__inner">
            <div class="paragraph">
                <div class="paragraph__title size--1">
                    기본구조와 Plate
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--3">
                    html,body
                </div>
                <div class="paragraph__text">
                    html, body는 아래의 app 위로 바로 맞닿은 document root 입니다. <br>
                    html > body > #app 의 형태로 구조화 되어있으며 이런 구조때문에 공식적으로 뷰 내부에서는 body를 refs할수 없습니다.
                    따라서 문서 전체를 대상으로 하는 특수한 경우(IOS포함한 스크롤 잠금)가 아니라면 
                    언제나 하위의 #app을 root 기준으로 합니다. 
                </div>
                <div class="paragraph__title size--3">
                    #app
                </div>
                <div class="paragraph__text">
                    #app은 vue에서 권장하는 render root component입니다. 
                    vue내부에서 최상위로 취급하며 바로 아래에 필요한 plate들이 나열되어 있습니다. 
                    뷰 플레이트에서 미리 준비된 plate들은 아래와 같으며 필요시 App.vue내부에서 늘려갈 수 있습니다.
                    fixed성격의 plate들은 z-index가 1000부터 관리됩니다.
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
                <div class="paragraph__title size--3">
                    #modal_plate
                </div>
                <div class="paragraph__text">
                    <ButtonType1 to="/global">
                        링크
                    </ButtonType1>
                    <br>
                    #modal_plate에 들어가는 컨텐츠의 성격은 다음과 같으며 자세한 내용은 global페이지에서 설명합니다.
                </div>
                <ul class="paragraph__list">
                    <li>position : fixed</li>
                    <li>주 컨텐츠보다 상위로 레이어드 포커스</li>
                    <li>공통의 상황에 등장 가능</li>
                </ul>

                <div class="paragraph__title size--3">
                    #page_plate
                </div>
                <div class="paragraph__text">
                    page_plate에서는 router.js에서 관리되는 router-view를 가지고 있습니다.
                    라우팅을 따로 관리하므로 이 플레이트에선 페이지 전역의 스타일과 로직을 관리합니다.
                </div>
                <div class="paragraph__title size--3">
                    #footer_plate
                </div>
                <div class="paragraph__text">
                    웹 하단의 공통 footer plate입니다. 
                    스타일 표현 방식에 따라 page_plate에 올려진 각 페이지 컴포넌트로 위치를 이동시킬수도 있습니다.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    name : 'PageAboutPlate',
    components : { ButtonType1 },
}
</script>

<style scoped>

</style>