/*
    전역적으로 자주 사용하는 플러그인은 vue에 직접 등록해 사용합니다.    
*/

import { store } from '@/store/store.js';

import ua from 'universal-analytics';

export default {
    install(Vue) {
        const visitor = ua(store.state.UA_accountID);
        Vue.prototype.$_ua = visitor;
    }
}