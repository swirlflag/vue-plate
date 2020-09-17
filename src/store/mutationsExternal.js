// data 유형은 WRITE
// state 유형은 RECORD로 해보자

const mutationsExternal = {
    WRITE_newsList(state,news = Object) {
        state.newsList = news;
    },
    WRITE_jobsList(state,jobs = Object) {
        state.jobsList = jobs;
    },

    LOGIN(state,token = String) {
        state.accessToken = token;
    },
    LOGOUT(state) {
        state.accessToken = null;  
    },
    RECORD_loginType(state,type = String) {
        state.loginType = type;
    },

}

export default mutationsExternal;