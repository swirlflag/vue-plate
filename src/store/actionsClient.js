/* 
    클리이언트 내부 상태 변경과 로직에 연관된 동작들을 정의합니다.    
*/

const actionsClient =  {

    enableModal(context) {
        context.commit('ENABLE_modal');
        if(context.state.use_openModalWithShowDimmed){
            context.commit('ENABLE_modalDimmed');
        }
        if(context.state.use_openModalWithLockScroll){
            context.commit('LOCK_scroll');
        }
    },

    disableModal(context) {
        context.commit('DISABLE_modal');
        context.commit('DISABLE_modalDimmed');
        context.commit('UNLOCK_scroll');
    },

    showModalAlert(context, payload = {}) {
        if(typeof payload === 'string'){
            context.commit('CHANGE_modalAlertMessage' , payload);
        }else {
            const {
                title, message , close, confirmButton,
            } = payload;      
            
            if(title){
                context.commit('CHANGE_modalAlertTitle' , title);
            }
            if(message){
                context.commit('CHANGE_modalAlertMessage' , message);
            }
            if(confirmButton){
                context.commit('CHANGE_modalAlertMessage' , message);
            }
            if(close){
                context.commit('REGIST_modalAlertActionClose' , close);
            }
        }

        context.dispatch('enableModal');
        context.commit('SHOW_modalAlert');
        
    },

    closeModalAlert(context) {
        context.state.modalAlertActionClose();
        context.commit('RESET_modalAlertActionClose' , () => {});
        context.dispatch('disableModal');
        context.commit('HIDE_modalAlert');
    },

    showModalConfirm(context,payload) {
        if(typeof payload === 'string'){
            context.commit('CHANGE_modalConfirmMessage' , payload);
        }else {
            const {
                title, message , close, confirmButton, cancleButton
            } = payload;      

            if(title){
                context.commit('CHANGE_modalConfirmTitle' , title);
            }
            if(message){
                context.commit('CHANGE_modalConfirmMessage' , message);
            }
            if(confirmButton){
                context.commit('CHANGE_modalConfirmButtonConfirm' , confirmButton);
            }
            if(cancleButton){
                context.commit('CHANGE_modalConfirmButtonCancle' , cancleButton);
            }
            if(close){
                context.commit('REGIST_modalConfirmActionClose' , close);
            }
        }

        context.dispatch('enableModal');
        context.commit('SHOW_modalConfirm');
    },

    closeModalConfirm(context, confirmResult = false) {
        context.state.modalConfirmActionClose(confirmResult);
        context.commit('RESET_modalConfirmActionClose' , () => {});
        context.dispatch('disableModal');
        context.commit('HIDE_modalConfirm');
    },

}

export default actionsClient;