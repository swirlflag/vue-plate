/* 
    프로젝트 시작 단계에서 정의되어야할 행동들과 값을 Vue와 Vuex store에 등록해줍니다.     
    store의 값들을 init시에만 수정할경우 별도의 mutation을 등록해 사용하지 않고 직접 수정합니다.
*/
import Vue from 'vue';
import { store } from '@/store/store.js';
import { detectBrowser , detectOS , detectDevice , detectTouchdevice} from '@/util';

const $state = store.state;

$state.type_browser     = detectBrowser();
$state.type_os          = detectOS();
$state.type_device      = detectDevice();
$state.is_touchDevice   = detectTouchdevice();

$state.use_coverdPlate = $state.type_browser === 'ie' ;

$state.is_dev = process.env.NODE_ENV === 'development';

export default {
    // vue root에 등록
    install(vue) {
        // 필요한 만큼 bus를 발행합니다.
        vue.prototype.$modal = new Vue();
    }
}