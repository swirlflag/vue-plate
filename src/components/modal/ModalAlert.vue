<template>
    <div class="modal--alert" :class="{'st-show' : modal.is_alertActive }">
        <div class="alert__title">
            {{ modal.alertTitle }}
        </div>
        <div class="alert__message">
            {{ modal.alertMessage }}
        </div>
        <div class="alert__button">
            <ButtonType1    :text="modal.alertButtonConfirm" 
                            @click="close"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    name : 'ModalAlert',
    components : {
        ButtonType1
    },
    computed : {
        ...mapState(['modal'])
    },
    methods  : {
        close() {
            this.$store.dispatch('closeModalAlert');
        },
    },
    created() {
        this.$store.commit('MODAL_addDimmedClickAction',() => {
            if(this.modal.is_alertActive){
                this.close();
            }
        });
    },
}

export const alertStore = {
    state : {
        is_alertActive         : false ,
        alertTitle             : '알림',
        alertMessage           : '알림 내용입니다.' ,
        alertButtonConfirm     : '확인' ,
        alertActionClose       : () => {},
    },
    mutations : {
        MODAL_showAlert(state) { 
            state.modal.is_alertActive = true;
        },  
        MODAL_hideAlert(state) { 
            state.modal.is_alertActive = false;
        },
        MODAL_changeAlertTitle(state, title = '') {
            state.modal.alertTitle = title;
        },
        MODAL_changeAlertMessage(state, message = '') {
            state.modal.alertMessage = message;
        },
        MODAL_changeAlertButtonConfirm(state,confirmButtonText = '') {
            state.modal.alertButtonConfirm = confirmButtonText;
        },
        MODAL_registAlertActionClose (state, action = () => {}) {
            state.modal.alertActionClose = action;
        },
        MODAL_resetAlertActionClose (state) { 
            state.modal.alertActionClose = () => {};
        },
    },
    actions : {
        showModalAlert({commit, dispatch}, payload = {}) {

            if(typeof payload === 'string'){
                commit('MODAL_changeAlertMessage' , payload);
            }else {
                const {
                    title, message , close, confirmButton,
                } = payload;    
                    
                title           && commit('MODAL_changeAlertTitle' , title);
                message         && commit('MODAL_changeAlertMessage' , message);
                confirmButton   && commit('MODAL_changeAlertButtonConfirm' , confirmButton);
                close           && commit('MODAL_registAlertActionClose' , close);
            }

            dispatch('enableModal');
            commit('MODAL_showAlert');
            
        },

        closeModalAlert({state,commit, dispatch}) {
            dispatch('disableModal');
            commit('MODAL_hideAlert');
            state.modal.alertActionClose();
            commit('MODAL_resetAlertActionClose' , () => {});
        },

    },
}

</script>

<style lang="scss" scoped>

@import '@/style/_mixin.scss';

.modal--alert {
    max-width: 500px; min-width : 360px; 
    height: auto;
    position: absolute;
    top: 50%; left: 50%; 
    transform :translate(-50% , calc(-50% + 30px));
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
    box-sizing: border-box;
    transition: transform 260ms $EASE_inCubic , 
                opacity 250ms ease
                ;

    @include phone {
        min-width: unset;
        max-width: 360px;
        width : calc(100% - 30px)
    }

    &.st-show  {
        opacity: 1;
        transform: translate(-50%,-50%);
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