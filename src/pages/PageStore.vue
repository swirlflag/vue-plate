<template>
    <div class="page__outer">
        <div class="page__inner">
            <div class="paragraph">
                <div class="paragraph__title size--1">
                    상태 관리(내용정리중)
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__text">
                    Vue에서 제공하는 상태관리 모듈인 Vuex를 사용해 전역 상태를 관리합니다.
                    공식으로 권장하는 방법인 mutations에서 state변경을, actions에서 로직을 담당하는 틀을 가지고 있습니다.
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    기본 Store
                </div>
                <div class="paragraph__title size--3">
                    state
                </div>
                <div class="paragraph__text">
                    전역으로 쓰일 상태들을 선언합니다.
                    state.js가 선언되는 시점에 유효한 값을 판단할 수 없다면 느슨하게 타입을 설정해줍니다. (ex) null , " " ,  0 ,  [ ] , { } , false)
                </div>
                <div class="paragraph__title size--3">
                    getters
                </div>
                <div class="paragraph__text">
                    state에서 computed return 할 값들을 선언합니다.
                </div>
                <div class="paragraph__title size--3">
                    mutations 
                </div>
                <div class="paragraph__text">
                    state를 직접 조작할 트리거를 등록합니다.
                    일반 로직에선 mutation만이 state를 변경할 수 있는 immutable 컨셉을 유지합니다.
                </div>
                <div class="paragraph__title size--3">
                    actions
                </div>
                <div class="paragraph__text">
                    전역적으로 사용할 mutation실행을 포함한 로직을 등록합니다.
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    miniStore
                </div>
                <div class="paragraph__text">
                    miniStore는 지역에서 공통 store에 등록할 수 있는 방법입니다.
                    지역적으로 작성해 유지보수를 원활하게 하고, 전역으로 사용해 호환성을 기대할 수 있습니다.
                    기존에는 지역 상태를 전역(정확히는 의존관계가 없는 두 컴포넌트)으로 이용하기 위해 event bus를 사용하지만 최근 이러한 사용성을 소화하는데 bus보다 vuex를 권장하는 추세입니다. 
                    <a href="https://tkacz.pro/vue-js-why-event-bus-is-bad-idea/" target="_blank">링크 : why event bus is bad idea</a>
                </div>
                <div class="paragraph__title size--3">
                    등록
                </div>
                <div class="paragraph__text">
                    vue확장자를 포함해 export가 가능한 스크립트 환경에서 store형태의 모듈을 내보내고, 메인 관리자인 @/store/store.js에서 가져와 combineStore에 전달해 Vuex를 생성합니다. 내보낼 store의 형태는 기존의 store와 동일하게 { state , getters , mutations , actions } 로 구성합니다. 4가지 모두 선택요소입니다.
                </div>
                <div class="paragraph__title size--3">
                    name
                </div>
                <div class="paragraph__text">
                    4가지 store 구성요소와 함께 name 속성을 추가할 수 있습니다. name을 추가하면 해당 store에 등록한 구성요소중 'state'만이 전역 state에서 name의 이름의 객체로 들어가게 됩니다. 만약 store가 { name : "fruit", state : { apple : 100 , banana : 200 } } 와 같은 상황이라면 최종적으로 vue 파일 기준에서 apple을 this.$store.state.fruit.apple 로 호출할 수 있습니다.
                </div>
                <div class="paragraph__text">
                    name을 포함한 state를 제외하면 모든 값은 store의 전역으로 등록되므로 기존 store를 등록하고 사용하던대로 사용하면 됩니다. 지역 작성이지만 전역에 모아 등록하기 때문에 이름의 유일성을 유지해야합니다.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'PageStore',
    
}
</script>

<style>

</style>