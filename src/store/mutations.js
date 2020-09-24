const mutations = {
// scroll lock control
    SCROLL_lock(state) {
        state.is_pageScrollLock = true;
    },
    SCROLL_unlock(state) {
        state.is_pageScrollLock = false;
    },

// api test
    WRITE_newsList(state,news = {}) {
        state.newsList = news;
    },
    WRITE_jobsList(state,jobs = {}) {
        state.jobsList = jobs;
    },

    LOGIN(state) {
        state.is_login = true;
    },
    LOGOUT(state) {
        state.is_login = false;
    },
    
    RECORD_accessToken(state,token = '') {
        state.accessToken = token;
    }, 
    RECORD_loginType(state,type = '') {
        state.loginType = type;
    },

}

export default mutations;