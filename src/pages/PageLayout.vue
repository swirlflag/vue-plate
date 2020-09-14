<template>
    <div class="page__outer">
        <div class="page__inner">
            <div class="paragraph">

                <div class="paragraph__title size--2">
                    Modal Syetem
                </div>

                <div class="paragraph__text st-italic">
                    기능 적용 상태 :
                    <br>모달 딤드 클릭시 딤드 해제 : {{ this.$store.state.use_clickDimmedThenCloseModal }}
                    <br>모달 오픈시 스크롤 잠금 : {{ this.$store.state.use_openModalWithLockScroll }}
                </div>

                <div>
                    <ButtonType1 v-on:click="showModalPopupAlert" >
                        모달 팝업 호출 테스트
                    </ButtonType1>
                </div>

                <div class="paragraph__title size--3">
                    기본 정보
                </div>

                <div class="paragraph__text">
                    모든 공통 모달은 ModalPlate.vue에 모아 관리되며 이는 router로 관리되는 page보다 상위에 위치해 있어, 
                    path에 관계없이 호출 및 변경할수 있습니다.
                </div>

                <div class="paragraph__title size--3">
                    깊이
                </div>

                <div class="paragraph__text">
                    뷰 플레이트에서는 , modal system을 1depth로 지정합니다.
                    즉, 모달 위에 새로운 모달이 뜨는 형태는 금지됩니다.
                    이는 개발이 아닌 디자인 관점에서의 UX에서 이미 허용되지 않는 흐름이기도 합니다.
                    컨텐츠 기획에 따라 중첩된 모달이 필요한경우, 새로운 컴포넌트로써 제작해
                    독립적인 스코프 내부에서 중첩 모달을 구현해야 할 것입니다.
                </div>

                <div class="paragraph__title size--3">
                    dimmed 
                </div>
                <div class="paragraph__text">
                    모든 모달의 컨텐츠는 각자가 아닌 #modal이 가지고 있는 .modal__dimmed를 공통으로 이용하여 딤드를 표시합니다.
                </div>

                <span class="paragraph__divider"></span>

                <div class="paragraph__title size--2">
                    Scroll Lock
                </div>

                <div class="paragraph__text st-italic">
                    기능 적용 상태 :
                    <br>현재 스크롤 잠금 : {{ this.$store.state.isPageScrollLock }}
                </div>

                <div>
                    <ButtonType1 v-on:click="toggleScrollLock" >
                        스크롤 lock/unlock 테스트
                    </ButtonType1>
                </div>

                <div class="paragraph__text">
                    스크롤 잠금 기능은 page의 컨텐츠를 주 대상으로 합니다. 
                    만약 모달 컨텐츠 내부의 내용이 많아서 스크롤 되어야 한다면, 해당 엘리먼트 내부의 스크롤로 처리합니다.
                    이때 스크롤 영역을 감싸는 엘리먼트는 window의 크기보다 작아야 합니다.
                </div>

            </div>

            <div v-if="false">
                <ButtonType1 v-on:click="TESTACTION" >
                    팝업 버튼
                </ButtonType1>

                <ButtonType1 v-on:click="TESTACTION2" >
                    LOCK
                </ButtonType1>
            </div>

        </div>
    </div>
</template>

<script>

import {
    ButtonType1,
} from '@/components';

export default {
    name : 'PageLayout',
    components : {
        ButtonType1,
    },
    methods : {
        showModalPopupAlert () {
            this.$store.commit('enable_modal' ,true);
            this.$store.commit('show_popupAlert');
            this.$store.commit('change_popupAlertMessage', '메인으로 돌아갑니다.');
            this.$store.commit('regist_popupAlertClose' , () => {
                this.$router.push('/')
            });
        },
        toggleScrollLock () {
            if(this.$store.state.isPageScrollLock){
                this.$store.commit('unlock_scroll');
            }else {
                this.$store.commit('lock_scroll');
            }
            
        }
    }
}
</script>

<style>

</style>