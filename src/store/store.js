import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations.js';
// import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        pageScrollLock : false,
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