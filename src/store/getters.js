const languageGetters = {
    // 현재 설정된 언어에 맞는 컨텐츠를 반환
    $L(state) {
        return state.language[state.languageType] || {}
    },
}

const getters = {
    ...languageGetters,
}

export default getters