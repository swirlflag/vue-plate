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
        state.user.is_login = true;
    },
    LOGOUT(state) {
        state.user.is_login = false;
    },
    
    RECORD_accessToken(state,token = '') {
        state.user.accessToken = token;
    }, 
    RECORD_loginType(state,type = '') {
        state.user.loginType = type;
    },

    WRITE_language(state,language = {}) {
        state.language = language;
    },
    WRITE_languageKinds(state, languageKinds = []) {
        state.languageKinds = languageKinds;
    },
    CHANGE_languageType (state , languageType = 'ko') {
        state.languageType = languageType;
    }

}

export default mutations;