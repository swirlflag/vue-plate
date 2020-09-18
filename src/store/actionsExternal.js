/* 
    클리이언트 외부 연동 기능과 로직에 연관된 동작들을 정의합니다.    
*/

import {
    request_newsList ,
    request_jobsList ,
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

};

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

    logout() {
        console.dev('로그아웃 합니다.');
    },
    
};

const actionsExternal = {
    ...apiActions,    
    ...authActions,
};
export default actionsExternal;