/* 
    로직을 제외한 api에 대한 직접 호출을 정리합니다.
    api에 대한 사용과 결과에 따른 로직은 @/store/actionsExternal.js 에서 정의합니다.
*/

import axios from 'axios';

const config = {
    hackerNews : "https://api.hnpwa.com/v0",
}

export const request_newsList = () => axios.get(`${config.hackerNews}/news/1.json`);

export const request_jobsList = () => axios.get(`${config.hackerNews}/jobs/1.json`);

export const request_askList = () => axios.get(`${config.hackerNews}/ask/1.json`);

export const request_list = (pageName) => axios.get(`${config.hackerNews}/${pageName}/1.json`);