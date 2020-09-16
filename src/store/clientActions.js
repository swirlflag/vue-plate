const clientActions =  {

    enableModal(context) {
        context.commit('ENABLE_modal');
        if(context.state.use_openModalWithShowDimmed){
            context.commit('SHOW_modalDimmed');
        }
        if(context.state.use_openModalWithLockScroll){
            context.commit('LOCK_scroll');
        }
    },

    disableModal(context) {
        context.commit('DISABLE_modal');
        context.commit('HIDE_modalDimmed');
        context.commit('UNLOCK_scroll');
    },

    showModalAlert(context, payload = {}) {
        if(typeof payload === 'string'){
            context.commit('CHANGE_modalAlertMessage' , payload);
        }else {
            const {
                title, message , close,
            } = payload;      
            
            if(message){
                context.commit('CHANGE_modalAlertMessage' , message);
            }
            if(title){
                context.commit('CHANGE_modalAlertTitle' , title);
            }
            if(close){
                context.commit('REGIST_modalAlertClose' , close);
            }
        }

        context.dispatch('enableModal');
        context.commit('SHOW_modalAlert');
        
    },

    closeModalAlert(context) {
        context.state.modalAlertCloseAction();
        context.commit('RESET_modalAlertClose' , () => {});
        context.dispatch('disableModal');
        context.commit('HIDE_modalAlert');
    },



}

export default clientActions;