const mutations = {
    lock_scroll(state){
        state.pageScrollLock = true
    },
    unlock_scroll(state){
        state.pageScrollLock = false
    },
};

export default mutations;