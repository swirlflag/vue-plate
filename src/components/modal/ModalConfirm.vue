<template>
    <div class="modal--alert" :class="{'st-show' : modal.is_confirmActive }">
        <div class="alert__title">            
            {{ modal.confirmTitle }}
        </div>
        <div class="alert__message">
            {{ modal.confirmMessage }}
        </div>
        <div class="alert__button">
            <ButtonType1    :text="modal.confirmButtonConfirm" 
                            @click="confirm" 
            />
            &nbsp;
            <ButtonType1    :text="modal.confirmButtonCancle"
                            @click="cancle"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonType1 from '@/components/input/ButtonType1.vue';
export default {
    name: 'ModalConfirm',
    components : {
        ButtonType1,
    },
    computed : {
        ...mapState(['modal'])
    },
    methods : {
        confirm() {
            this.$store.dispatch('closeModalConfirm' , true);
        },
        cancle() {
            this.$store.dispatch('closeModalConfirm' , false);
        },
    },
    created() {
        this.$store.commit('MODAL_addDimmedClickAction' , () => {
            if(this.modal.is_confirmActive) {
                this.cancle();
            }
        });
    },
};

export const confirmStore = {

    state : {

        is_confirmActive           : false,
        confirmTitle               : '확인 알림' ,
        confirmMessage             : '확인 내용입니다.' ,
        confirmButtonConfirm       : '확인' ,
        confirmButtonCancle        : '취소' ,
        confirmActionClose         : () => {} ,

    },

    mutations : {

        MODAL_showConfirm(state) {
            state.modal.is_confirmActive = true;
        },
        MODAL_hideConfirm(state) {
            state.modal.is_confirmActive = false;
        },
        MODAL_changeConfirmTitle(state, title = '') {
            state.modal.confirmTitle = title;
        },
        MODAL_changeConfirmMessage(state, message = '') {
            state.modal.confirmMessage = message;
        },
        MODAL_changeConfirmButtonConfirm(state,confirmButtonText = '') {
            state.modal.confirmButtonConfirm = confirmButtonText;
        },
        MODAL_changeConfirmButtonCancle(state,cancleButtonText = '') {
            state.modal.confirmButtonCancle = cancleButtonText;
        },
        MODAL_registConfirmActionClose(state,action = () => {}) {
            state.modal.confirmActionClose = action;
        },
        MODAL_resetConfirmActionClose(state) {
            state.modal.confirmActionClose = () => {};
        },

    },

    actions : {

        showModalConfirm({commit, dispatch},payload = {}) {
            if(typeof payload === 'string') {
                commit('MODAL_changeConfirmMessage' , payload);
            }else {
                const {
                    title, message , close, confirmButton, cancleButton
                } = payload;

                title           && commit('MODAL_changeConfirmTitle' , title);
                message         && commit('MODAL_changeConfirmMessage' , message);
                confirmButton   && commit('MODAL_changeConfirmButtonConfirm' , confirmButton);
                cancleButton    && commit('MODAL_changeConfirmButtonCancle' , cancleButton);
                close           && commit('MODAL_registConfirmActionClose' , close);
            }

            dispatch('enableModal');
            commit('MODAL_showConfirm');
        },

        closeModalConfirm({state, commit, dispatch}, confirmResult = false) {
            dispatch('disableModal');
            commit('MODAL_hideConfirm');
            state.modal.confirmActionClose(confirmResult);
            commit('MODAL_resetConfirmActionClose' , () => {});
        },
        
    },
};

</script>

<style lang="scss">
@import '@/style/_mixin.scss';

.modal--confirm {
    max-width: 500px; min-width : 300px; 
    height: auto;
    position: absolute;
    top: 50%; left: 50%; 
    transform: translate(-50%,-50%);
    backdrop-filter: blur(10px);
    opacity: 0;
    z-index: 1020;
    background-color: $COLOR_layer_background;
    border: 2px solid $COLOR_theme;
    padding: 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;
    box-shadow: 0 5px 30px rgba(0,0,0,0.5);
    transition: transform 260ms $EASE_inCubic , 
                opacity 250ms ease
                ;

    &.st-show  {
        opacity: 1;
        transform :translate(-50% ,calc(-50% - 30px));
        pointer-events: all;
        transition: transform 400ms $EASE_outQuint , 
                    opacity 300ms ease
                    ;
    }
    
    > * {
        margin-top: 30px;
        &:nth-child(1) {
            margin-top: 0;
        }
    }

    .alert__title {
        font-size: 26px;
        font-weight: 700;
    }
    .alert__message {
        
    }
    .alert__check {

    }

}

</style>