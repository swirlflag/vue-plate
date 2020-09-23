const mutationsClient = {

// scroll lock control
    LOCK_scroll(state) {
        state.is_pageScrollLock = true;
    },
    UNLOCK_scroll(state) {
        state.is_pageScrollLock = false;
    },

// modal plate
    ENABLE_modal (state) {
        state.is_modalActive = true;
    },
    DISABLE_modal (state) {
        state.is_modalActive = false;
    },
    ENABLE_modalDimmed (state) {
        state.is_modalDimmedActive = true;
    },
    DISABLE_modalDimmed (state) {
        state.is_modalDimmedActive = false;
    },

// modal alert
    SHOW_modalAlert(state){
        state.is_modalAlertActive = true;
    },
    HIDE_modalAlert(state){
        state.is_modalAlertActive = false;
    },
    CHANGE_modalAlertTitle(state, title = '') {
        state.modalAlertTitle = title;
    },
    CHANGE_modalAlertMessage(state, message = '') {
        state.modalAlertMessage = message;
    },
    CHANGE_modalAlertButtonConfirm(state,confirmButtonText = '') {
        state.modalAlertButtonConfirm = confirmButtonText;
    },
    REGIST_modalAlertActionClose (state, action = () => {}) {
        state.modalAlertActionClose = action;
    },
    RESET_modalAlertActionClose (state) {
        state.modalAlertActionClose = () => {};
    },

// modal confirm
    SHOW_modalConfirm(state) {
        state.is_modalConfirmActive = true;
    },
    HIDE_modalConfirm(state) {
        state.is_modalConfirmActive = false;
    },
    CHANGE_modalConfirmTitle(state, title = '') {
        state.modalConfirmTitle = title;
    },
    CHANGE_modalConfirmMessage(state, message = '') {
        state.modalConfirmMessage = message;
    },
    CHANGE_modalConfirmButtonConfirm(state,confirmButtonText = '') {
        state.modalConfirmButtonConfirm = confirmButtonText;
    },
    CHANGE_modalConfirmButtonCancle(state,cancleButtonText = '') {
        state.modalConfirmButtonCancle = cancleButtonText;
    },
    REGIST_modalConfirmActionClose(state,action = () => {}) {
        state.modalConfirmActionClose = action;
    },
    RESET_modalConfirmActionClose(state) {
        state.modalConfirmActionClose = () => {};
    },

};

export default mutationsClient;