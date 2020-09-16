const mutations = {

    LOCK_scroll(state) {
        state.is_pageScrollLock = true;
    },
    UNLOCK_scroll(state) {
        state.is_pageScrollLock = false;
    },
    ENABLE_modal (state) {
        state.is_modalActive = true;
    },
    DISABLE_modal (state) {
        state.is_modalActive = false;
    },
    SHOW_modalDimmed (state) {
        state.is_modalDimmedActive = true;
    },
    HIDE_modalDimmed (state) {
        state.is_modalDimmedActive = false;
    },
    SHOW_modalAlert(state){
        state.is_ModalAlertActive = true;
    },
    HIDE_modalAlert(state){
        state.is_ModalAlertActive = false;
    },
    CHANGE_modalAlertTitle(state, title = '') {
        state.modalAlertMessage = title;
    },
    CHANGE_modalAlertMessage(state, message = '') {
        state.modalAlertMessage = message;
    },
    REGIST_modalAlertClose (state, action) {
        state.modalAlertCloseAction = action;
    },
    RESET_modalAlertClose (state) {
        state.modalAlertCloseAction = () => {};
    },

};

export default mutations;