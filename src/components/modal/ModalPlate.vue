<template>
<!-- 
    MEMO :
    ModalPlate 에선, 가로, 세로 100% 인 #modal 이라는 레이어에서 
    전역 성격으로 적절한 모달 윈도우들(레이어 팝업, 풀 디스플레이 팝업)을 배치합니다.
    #modal 자체는 기본적으로 윈도우(100%,100%)의 크기를 가지며 position : fixed입니다.
    #modal 이하의 컴포넌트들을 자유롭게 수정 확장할수 있습니다.
-->
    <div id="modal" v-bind:class="{'st-active': this.$store.state.isModalActive}">

        <div    class="modal__dimmed" 
                v-bind:class="{'st-show' : this.$store.state.isModalDimmedActive}"
                v-on:click="clickModalDimmed"
        ></div>

        <PopupAlert></PopupAlert>

    </div>
</template>

<script>

import { mapState } from 'vuex';
import PopupAlert from '@/components/modal/PopupAlert.vue';

export default {
    computed : {
        ...mapState([
            'use_clickDimmedThenCloseModal',
            'use_openModalThenLockScroll',

            'isModalActive',
            'isPopupAlertActive',
        ]),
    },
    components: {
        PopupAlert
    },

    methods : {
        clickModalDimmed() {
            if(!this.use_clickDimmedThenCloseModal){
                return;
            }
            if(this.isModalActive){
                this.$store.commit('disable_modal');
            }
            if(this.isPopupAlertActive){
                this.$store.commit('hide_popupAlert');
                this.$store.commit('trigger_popupAlertClose');
            }
        }
    }
}
</script>

<style lang="scss">

@import '@/style/_mixin.scss';

#modal {
    z-index: 1020;
    width: 100vw; height: 100%; 
    position: fixed;
    display: inline-block;
    box-sizing: border-box;
    pointer-events: none;
    &.st-active {
        > * {
            pointer-events: all;
        }
    }
}

.modal__dimmed {
    width: 100%; height: 100%;
    position: absolute;
    background-color: $COLOR_dimmed;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease;
    z-index: 1000;
    &.st-show {
        opacity: 1;
        display : block;
    }
}

</style>