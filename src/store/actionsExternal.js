// import { 
//     fetchUserInfo, 
//     fetchItemInfo , 
//     fetchList , 
//     fetchNewsList, 
//     fetchAskList, 
//    //  fetchAskList , 
//    //  fetchJobsList , 
// } from '../api/index.js';

// const actions = {

//    FETCH_USER({ commit }, username) {
//        return fetchUserInfo(username)
//            .then(({data}) => {
//                commit('SET_USER' , data);
//            })
//            .catch((error) => {
//                console.log(error);
//            })
//        ;
//    },
//    FETCH_ITEM({ commit } , id) {
//        return fetchItemInfo(id)
//            .then(({ data }) => {
//                commit('SET_ITEM' , data);
//            })
//            .catch((error) => {
//                console.log(error);
//            })
//        ;
//    },

//    async FETCH_NEWS(context) {
//        const response = await fetchNewsList();
//        context.commit('SET_NEWS', response.data);
//        return response;
//    },

//    async FETCH_ASK(context){
//        const response = await fetchAskList();
//        context.commit('SET_ASK' , response.data);
//        return response;
//    },
   
//    async FETCH_LIST(context , pageName) {
//        const response = await fetchList(pageName);
//        context.commit('SET_LIST', response.data);
//        return response;    
//    },

// };

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
}

const authActions = {

    async auth_google(context) {
        
        console.log(context.state);
        // const googleAcount = await context.$gAuth.signIn();
        // console.log(googleAcount);
        // context.commit('RECORD_login');
        // context.commit('RECORD_loginType', 'google');
        // return googleAcount;
    }
}

const actionsExternal = {
    ...apiActions,    
    ...authActions,
};
export default actionsExternal;