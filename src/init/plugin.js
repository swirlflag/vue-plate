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
    /*
        cdn컨텐츠를 vue에 가져와 확장하는 객체입니다.
        cdn의 A 객체를 가져온다면, vue내에서 this.$_A로 접근해 사용할수 있습니다.
        이하 작성 내용

        [ cdn이름 ] : {

            url : cdn 스크립트 태그에 들어갈 url,

            plugins : ['리스트1' , '리스트2'] 형태의 배열. cdn에서 import 하려는 메소드나 객체의 이름.

            success : cdn이 불러와지고 vue에 등록된 이후의 성공 콜백. cdn컨텐츠가 init등을 요구할시 이곳에 적어줍니다.

        }
          
    */    

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
    // vue root에 등록
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