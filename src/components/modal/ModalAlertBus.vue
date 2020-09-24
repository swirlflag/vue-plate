
<template>
    <div class="modal--alert" :class="{'st-show' : this.$store.state.modal.is_modalAlertActive }">
        <div class="alert__title">
            타이틀
        </div>
        <div class="alert__message">
            메시지
        </div>
        <div class="alert__button">
            <ButtonType1    text="확인1" 
                            @click="close"
            />
        </div>
        <!-- {{ this.$store.state.modal.is_modalAlertActive }} -->
        <!-- {{this.$store.state.modal.s1}} -->
    </div>
</template>

<script>

import ButtonType1 from '@/components/input/ButtonType1.vue';

const alertStore = {
    state : {
        is_modalAlertActive         : false ,
        modalAlertTitle             : '알림',
        modalAlertMessage           : '알림 내용입니다.' ,
        modalAlertButtonConfirm     : '확인' ,
        modalAlertActionClose       : () => {},
    },
    mutations : {
        SHOW_modalAlertBus({modal})     { modal.is_modalAlertActive = true } ,  
        HIDE_modalAlert({modal})        { modal.is_modalAlertActive = false } ,

        // CHANGE_modalAlertTitle(state, title = '') {
        //     state.modalAlertTitle = title;
        // },
        // CHANGE_modalAlertMessage(state, message = '') {
        //     state.modalAlertMessage = message;
        // },
        // CHANGE_modalAlertButtonConfirm(state,confirmButtonText = '') {
        //     state.modalAlertButtonConfirm = confirmButtonText;
        // },
        // REGIST_modalAlertActionClose (state, action = () => {}) {
        //     state.modalAlertActionClose = action;
        // },
        // RESET_modalAlertActionClose (state) {
        //     state.modalAlertActionClose = () => {};
        // },

    },
    actions : {
        showModalAlert(context, payload = {}) {
            {context,payload}

            if(typeof payload === 'string'){
                context.commit('CHANGE_modalAlertMessage' , payload);
            }else {
                // const {
                //     title, message , close, confirmButton,
                // } = payload;      
                
                // if(title){
                //     context.commit('CHANGE_modalAlertTitle' , title);
                // }
                // if(message){
                //     context.commit('CHANGE_modalAlertMessage' , message);
                // }
                // if(confirmButton){
                //     context.commit('CHANGE_modalAlertMessage' , message);
                // }
                // if(close){
                //     context.commit('REGIST_modalAlertActionClose' , close);
                // }
            }

            context.dispatch('enableModal');
            context.commit('SHOW_modalAlert');
            
        },

        closeModalAlert(context) {
            {context}
            // context.state.modalAlertActionClose();
            // context.commit('RESET_modalAlertActionClose' , () => {});
            // context.dispatch('disableModal');
            // context.commit('HIDE_modalAlert');
        },
    },
}

export { alertStore };

export default {
    name : 'ModalAlert',
    components : {
        ButtonType1
    },
    methods  : {
        close() {
            this.$store.dispatch('closeModalAlert');
        },
    },
    created() {
        // this.$store.commit('SHOW_modalAlertBus');
    },
}
</script>

<style lang="scss">

@import '@/style/_mixin.scss';

.modal--alert {
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