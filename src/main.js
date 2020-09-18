import Vue from 'vue'
import App from './App.vue'

import '@/util/expansion.js';

import { router } from '@/router/router.js';
import { store } from '@/store/store.js';
import plugin from '@/plugin/plugin.js';

Vue.use(plugin);

Vue.config.productionTip = false;

const vueApp = new Vue({
    render: h => h(App),
    router,
    store,
});

vueApp.$mount('#app');
