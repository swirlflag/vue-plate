/*
    전역적으로 자주 사용하는 플러그인은 vue에 직접 등록해 사용합니다.    
*/

import { store } from '@/store/store.js';

import UA           from 'universal-analytics';     // https://www.npmjs.com/package/universal-analytics
import GAuth        from 'vue-google-oauth2'        // https://www.npmjs.com/package/vue-google-oauth2
import VueCookies   from "vue-cookies";             // https://www.npmjs.com/package/vue-cookies

// import 'https://developers.kakao.com/sdk/js/kakao.js';

// console.log(KaKao);

export default {
    install(Vue) {

        Vue.use(VueCookies);

        Vue.prototype.$_ua = UA(store.state.UA_accountID);

        Vue.use(GAuth, {
                clientId: "374932594337-klgvja2sbfojouoovcq9osfbp25alti5.apps.googleusercontent.com",
                redirect_uri : 'https://google.co.kr',
                scope: 'profile email https://www.googleapis.com/auth/plus.login',
                response_type : 'token',
            }
        );

    }
}