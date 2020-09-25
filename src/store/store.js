/* 
    전역에서 사용할 state들을 작성하며 vue에서 권장하는대로 mutation을 통해서만 변경합니다.
    store를 직접 변경하는 경우는 최대한 피하며 예외인 대표적인 예시는 @/init/init.js입니다.
    컨텐츠가 전역적 성격을 띄더라도 제어가 지역적이면 컴포넌트에서 값을 관리합니다. 
    현재 네비게이션의 여닫기 조작이 대표적인 예시이며 만약 페이지에서 네비게이션 조작에 관여한다면 store를 사용하는게 좋습니다.

    다른 파일에서 store를 정의해서 이곳에 등록할수 있습니다. 이경우에 combineStore를 사용해 vuex를 선언해야 하며 
    name 속성을 추가하면 stroe.stage 아래에 객체로 값을 관리할수 있습니다. 중첩 구조는 불가능합니다.
    name을 사용했다면 값을 불러올때도 this.$store.state[name]까지 접근해야 내부에 선언한 값을 볼수있습니다.
*/

import Vue from 'vue';
import Vuex from 'vuex';

import { combineStore } from '@/util';

import state            from '@/store/state.js';
import getters          from '@/store/getters.js';
import mutations        from '@/store/mutations.js';
import actions          from '@/store/actions.js';

import { 
    userStore 
} from '@/store/miniStore.js';

import { modalStore }   from '@/plate/PlateModal.vue';

Vue.use(Vuex);

const store = new Vuex.Store(
    combineStore(
        {
            state,
            getters,
            mutations,
            actions,
        },
        modalStore,
        userStore,
    )
);

export {
    store,
};