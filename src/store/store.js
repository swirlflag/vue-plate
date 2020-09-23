import Vue from 'vue';
import Vuex from 'vuex';

import mutationsClient      from '@/store/mutationsClient.js';
import mutationsExternal    from '@/store/mutationsExternal.js';

import actionsClient        from '@/store/actionsClient.js';
import actionsExternal      from '@/store/actionsExternal.js';
import actionsRouter        from '@/store/actionsRouter.js';

Vue.use(Vuex);

const gloablState  = {
    is_dev          : false,
    use_coverdPlate : false,
    is_pageScrollLock : false,
}

const modalState = {

    use_clickDimmedThenCloseModal   : true,
    use_openModalWithLockScroll     : true,
    use_openModalWithShowDimmed     : true,

    is_modalActive                  : false,
    is_modalDimmedActive            : false,

    is_ModalAlertActive             : false,
    modalAlertTitle                 : '알림' ,
    modalAlertMessage               : '알림 내용입니다.' ,
    modalAlertButton                : '확인' ,
    modalAlertCloseAction           : () => {},
    
};

const fetchData = {
    newsList : [],
    jobsList : [],
};

const userData = {
    is_login    : false,
    loginType   : null,
    ua_visitor  : null,
    accessToken : null,
}

const store = new Vuex.Store({
    state : {
        ...gloablState,
        ...modalState,
        ...userData,
        ...fetchData,
    },
    mutations : {
        ...mutationsClient,
        ...mutationsExternal,
    },
    actions : {
        ...actionsClient,
        ...actionsRouter,
        ...actionsExternal,
    },
});

export {
    store,
};