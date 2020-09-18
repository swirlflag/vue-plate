// data 유형은 WRITE
// state 유형은 RECORD로 해보자

const mutationsExternal = {
    WRITE_newsList(state,news = Object) {
        state.newsList = news;
    },
    WRITE_jobsList(state,jobs = Object) {
        state.jobsList = jobs;
    },

    LOGIN(state,) {
        state.is_login = true;
    },
    LOGOUT(state) {
        state.is_login = false;
    },
    RECORD_accessToken(state,token = String) {
        state.accessToken = token;
    }, 
    RECORD_loginType(state,type = String) {
        state.loginType = type;
    },

}

export default mutationsExternal;