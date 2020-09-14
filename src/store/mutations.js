const mutations = {
    lock_scroll(state){
        state.isPageScrollLock = true;
    },
    unlock_scroll(state){
        state.isPageScrollLock = false;
    },

    enable_modal(state,withDimmed) {
        state.isModalActive = true;
        if(withDimmed){
            state.isModalDimmedActive = true;
        }
    },
    disable_modal(state) {
        state.isModalActive = false;
        state.isModalDimmedActive = false;
    },

    show_popupAlert(state){
        state.isPopupAlertActive = true;
    },
    hide_popupAlert(state){
        state.isPopupAlertActive = false;
    },

    change_popupAlertTitle() {

    },
    change_popupAlertMessage(state, message) {
        state.popupAlertMessage = message;
    },    

    regist_popupAlertClose (state, action) {
        state.popupAlertAction = action;
    },

    trigger_popupAlertClose (state) {
        state.popupAlertAction();
        state.popupAlertAction = () => {}
        // state.popupAlertTitle = '알림';
        // state.popupAlertMessage = '알림 내용입니다.';
    }
};

export default mutations;