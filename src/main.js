import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
import VueCookies from "vue-cookies";

import { router } from '@/router/router.js';
import { store } from '@/store/store.js';
import plugin from '@/plugin/plugin.js';


// 임시 저장
const googleClientId =  "374932594337-klgvja2sbfojouoovcq9osfbp25alti5.apps.googleusercontent.com";
const googleClientPassword = "UJT9icUJ0ßJi1rh_svKeZ8vQr";
{googleClientPassword,googleClientId}

Vue.use(VueCookies);

Vue.use(plugin);

Vue.use(GAuth, {
        clientId: googleClientId,
        redirect_uri : 'https://google.co.kr',
        scope: 'profile email https://www.googleapis.com/auth/plus.login',
        response_type : 'token',
    }
);

Vue.config.productionTip = false;

const vueApp = new Vue({
    render: h => h(App),
    router,
    store,
});

vueApp.$mount('#app');
