import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations.js';
// import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        
        use_clickDimmedThenCloseModal : true,
        use_openModalWithLockScroll : true,

        isPageScrollLock : false,

        isModalActive : false,
        isModalDimmedActive : false,
        isPopupAlertActive : false,

        popupAlertTitle        : '알림' ,
        popupAlertMessage      : '알림 내용입니다.' ,
        popupAlertButton       : '확인' ,
        
        popupAlertAction : () => {},


    },
    // getters : {
    //     list : ({list}) => list,
    //     userItems : ({userItems}) => userItems,
    //     itemInfo : ({itemInfo}) => itemInfo,
    // },
    mutations,
    // actions,
});

export {
    store,
};