import axios from 'axios';

const config = {
    baseUrl : "https://api.hnpwa.com/v0",
}

const request_newsList = () => axios.get(`${config.baseUrl}/news/1.json`);

const request_jobsList = () => axios.get(`${config.baseUrl}/jobs/1.json`);

const request_askList = () => axios.get(`${config.baseUrl}/ask/1.json`);

const request_list = (pageName) => axios.get(`${config.baseUrl}/${pageName}/1.json`);


export {
    request_newsList,
    request_jobsList,
    request_askList,
    request_list
}
