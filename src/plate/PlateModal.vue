<template>
<!-- 
    MEMO :
    PlateModal 에선, 가로, 세로 100% 인 #modal 이라는 레이어에서 
    전역 성격으로 적절한 모달 윈도우들(레이어 팝업, 풀 디스플레이 팝업)을 배치합니다.
    #modal 자체는 기본적으로 윈도우(100%,100%)의 크기를 가지며 position : fixed입니다.
    #modal 이하의 컴포넌트들을 자유롭게 수정 확장할수 있습니다.
-->
    <div id="modal_plate" v-bind:class="{'st-active': this.$store.state.is_modalActive}">

        <div    class="modal__dimmed" 
                v-bind:class="{'st-show' : this.$store.state.is_modalDimmedActive}"
                v-on:click="clickModalDimmed"
        ></div>

        <ModalAlert/>

    </div>
</template>

<script>

import { mapState } from 'vuex';
import  ModalAlert  from '@/components/modal/ModalAlert.vue';

export default {
    computed : {
        ...mapState([
            'use_clickDimmedThenCloseModal',
            'use_openModalThenLockScroll',

            'is_modalActive',
            'is_ModalAlertActive',
        ]),
    },
    components: {
        ModalAlert
    },

    methods : {
        clickModalDimmed() {
            if(!this.use_clickDimmedThenCloseModal && !this.is_modalActive){
                return;
            }
            if(this.is_ModalAlertActive){
                this.$store.dispatch('closeModalAlert');
            }
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/style/_mixin.scss';

#modal_plate {
    z-index: 1020;
    width: 100vw; height: 100%; 
    position: fixed;
    display: inline-block;
    box-sizing: border-box;
    pointer-events: none;
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
        pointer-events: all;
        opacity: 1;
        display : block;
    }
}

</style>