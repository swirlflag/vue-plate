import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations.js';
import clientActions from '@/store/clientActions.js';
// import actions from './actions.js';

Vue.use(Vuex);

const modalState = {
    is_modalActive : false,
    is_modalDimmedActive : false,

    is_ModalAlertActive : false,
    modalAlertTitle        : '알림' ,
    modalAlertMessage      : '알림 내용입니다.' ,
    modalAlertButton       : '확인' ,
    modalAlertCloseAction : () => {},
}

const store = new Vuex.Store({
    state : {
        
        use_clickDimmedThenCloseModal : true,
        use_openModalWithLockScroll : true,
        use_openModalWithShowDimmed : true,

        is_pageScrollLock : false,
        ...modalState,
    },
    // getters : {
    //     list : ({list}) => list,
    //     userItems : ({userItems}) => userItems,
    //     itemInfo : ({itemInfo}) => itemInfo,
    // },
    mutations,
    actions : {
        ...clientActions,
    },
});

export {
    store,
};