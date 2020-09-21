/* 
    프로젝트 시작 단계에서 정의되어야할 행동들과 값을 Vue와 Vuex store에 등록해줍니다.     
    store의 값들을 init시에만 수정할경우 별도의 mutation을 등록해 사용하지 않고 직접 수정합니다.
*/

import { store } from '@/store/store.js';
import { detect } from 'detect-browser';

const browser = detect();

const $state = store.state;

$state.use_coverdPlate = browser.name === 'IE' ;

$state.is_dev = process.env.NODE_ENV === 'development';

export default {
    // vue root에 등록
    install(Vue) {
        {Vue}
    }
}