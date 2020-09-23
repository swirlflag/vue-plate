/* 
    전역에서 사용할 state들을 작성하며 vue에서 권장하는대로 mutation을 통해서만 변경합니다.
    store를 직접 변경하는 경우는 최대한 피하며 예외인 대표적인 예시는 @/init/init.js입니다.
    컨텐츠가 전역적 성격을 띄더라도 제어가 지역적이면 컴포넌트에서 값을 관리합니다. 
    현재 네비게이션의 여닫기 조작이 대표적인 예시이며 만약 페이지에서 네비게이션 조작에 관여한다면 store를 사용하는게 좋습니다.
*/

import Vue from 'vue';
import Vuex from 'vuex';

import mutationsClient      from '@/store/mutationsClient.js';
import mutationsExternal    from '@/store/mutationsExternal.js';

import actionsClient        from '@/store/actionsClient.js';
import actionsExternal      from '@/store/actionsExternal.js';
import actionsRouter        from '@/store/actionsRouter.js';

Vue.use(Vuex);
const globalState  = {
    is_dev              : false,
    is_touchDevice      : false,
    use_coverdPlate     : false,

    type_device         : '',
    type_browser        : '',
    type_os             : '',
};

const appState = {
    is_pageScrollLock   : false,
}

const modalState = {

    use_clickDimmedThenCloseModal   : true,
    use_openModalWithLockScroll     : true,
    use_openModalWithShowDimmed     : true,

    is_modalActive                  : false,
    is_modalDimmedActive            : false,

    // Modal Alert
    is_modalAlertActive             : false,
    modalAlertTitle                 : '알림' ,
    modalAlertMessage               : '알림 내용입니다.' ,
    modalAlertButtonConfirm         : '확인' ,
    modalAlertActionClose           : () => {},

    // Modal Confirm     
    is_modalConfirmActive           : false,
    modalConfirmTitle               : '확인 알림' ,
    modalConfirmMessage             : '확인 내용입니다.' ,
    modalConfirmButtonConfirm       : '확인' ,
    modalConfirmButtonCancle        : '취소' ,
    modalConfirmActionClose         : () => {} ,
    
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
        ...globalState,
        ...appState,
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