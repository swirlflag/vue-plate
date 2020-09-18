import Vue from 'vue';
import Vuex from 'vuex';
// import ua from 'universal-analytics';

import mutationsClient      from '@/store/mutationsClient.js';
import mutationsExternal    from '@/store/mutationsExternal.js';

import actionsClient        from '@/store/actionsClient.js';
import actionsExternal      from '@/store/actionsExternal.js';

Vue.use(Vuex);

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

const userState = {
    is_login    : false,
    loginType   : null,
    ua_visitor  : null,
    accessToken : null,
}


const store = new Vuex.Store({
    state : {
        is_pageScrollLock : false,

        ...modalState,
        ...userState,
        ...fetchData,
    },
    mutations : {
        ...mutationsClient,
        ...mutationsExternal,
    },
    actions : {
        ...actionsClient,
        ...actionsExternal,
    },
});

export {
    store,
};