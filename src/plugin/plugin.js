/*
    전역적으로 자주 사용하는 플러그인은 vue에 직접 등록해 사용합니다.    
    cdn
*/

// TODO : 이곳의 하드코딩된 정보(url, accountId, key 등) 들을 나중에 따로 빼두기 

// import { store } from '@/store/store.js';
import UA           from 'universal-analytics';     // https://www.npmjs.com/package/universal-analytics
import GAuth        from 'vue-google-oauth2'        // https://www.npmjs.com/package/vue-google-oauth2
import VueCookies   from "vue-cookies";             // https://www.npmjs.com/package/vue-cookies

import { installCDN } from '@/util';

const cdns = {
    kakao : {
        // https://developers.kakao.com/docs/latest/ko/sdk-download/js
        url : "https://developers.kakao.com/sdk/js/kakao.js",  
        plugins : ['Kakao'],
        success : (Vue) => {
            // TEST KEY
            const KEY_JS    = "e12cf936f023ea586ba7fadfbfe0edac";
            // const KEY_REST  = "14c1c66572198f550f71ba8231fb2f29";
            Vue.prototype.$_Kakao.init(KEY_JS);
            console.dev("Kakao init :" , Vue.prototype.$_Kakao.isInitialized());
        },
    },
    iamport : {
        // https://www.iamport.kr/getstarted
        url : "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js",
        plugins : ['IMP'],
    }
}

export default {
    install(Vue) {        

        installCDN(Vue, cdns)

        Vue.prototype.$_ua = UA('UA-178128469-1');
    
        Vue.use(VueCookies);

        Vue.use(GAuth, {
                clientId: "374932594337-klgvja2sbfojouoovcq9osfbp25alti5.apps.googleusercontent.com",
                redirect_uri : 'https://google.co.kr',
                scope: 'profile email https://www.googleapis.com/auth/plus.login',
                response_type : 'token',
            },
        );

    }
}