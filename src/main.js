/*
    main.js의 내용은 최대한 간결하게 유지하고, 상세 로직들은 최대한 크게 묶어서 가져와 처리합니다.
    직접 작성시 프로젝트와 관련성이 적은, 구조를 건드리는 작업 위주로 기입합니다.
 */

import Vue from 'vue'
import App from './App.vue'

import '@/util/expansion.js';
import '@/style/_mixin.scss';

import { router }   from '@/router/router.js';
import { store }    from '@/store/store.js';
import plugin       from '@/init/plugin.js';
import initLogic    from '@/init/init.js';

Vue.use(plugin);
Vue.use(initLogic);

Vue.config.productionTip = false;

const vueApp = new Vue({
    render: h => h(App),
    router,
    store,
});

vueApp.$mount('#app');
