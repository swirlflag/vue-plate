import Vue from 'vue'
import App from './App.vue'

import '@/util/expansion.js';

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
