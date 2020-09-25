
import {
    request_newsList ,
    request_jobsList ,
    request_language,
} from '@/api';


const apiActions = {
    
    async fetch_newsList(context){
        const response = await request_newsList();
        context.commit('WRITE_newsList', response.data);
        return response;    
    },

    async fetch_jobsList (context) {
        const response = await request_jobsList();
        context.commit('WRITE_jobsList', response.data);
        return response;    
    },

    async fetch_lanuage (context) {
        const response = await request_language();

        const {
            languageKinds , languageContents
        } = response.data;        
        
        context.commit('WRITE_languageKinds' , languageKinds);

        let result = {};

        for(const [key,list] of Object.entries(languageContents)){
            for(const lang of Object.keys(languageKinds)){
                if(!result[lang]){
                    result[lang] = {};
                }
                result[lang][key] = list[lang];
            }
        }

        context.commit('WRITE_language' , result);

        return response;
    },

};

const clientActions = {

}

const authActions = {

    login_google (context, googleUser) {
        console.dev('구글로 로그인을 시도합니다.');        
        context.commit('LOGIN');
        context.commit('RECORD_loginType' , 'google');
        context.commit('RECORD_accessToken' , googleUser.wc.access_token);
    },

    login_kakao (context, kakaoInfo) {
        console.dev('카카오로 로그인을 시도합니다.');        
        context.commit('LOGIN');
        context.commit('RECORD_loginType' , 'kakao');
        context.commit('RECORD_accessToken' , kakaoInfo.access_token);
    },

    login_cancle(context,error) {
        console.dev('로그인을 취소했습니다.');
        console.dev(error);
    },

    logout(context) {
        context.commit('LOGOUT');
        console.dev('로그아웃 합니다.');
    },
    
};

const actionsExternal = {
    ...apiActions,    
    ...authActions,
    ...clientActions,
};

export default actionsExternal;