<template>
    <div class="modal--bottom_sheet" :class="{'st-show' : modal.is_bottomSheetActive }">
        <div class="bottom_sheet__list">
            <div    v-for="(item,idx) in modal.bottomSheetList" :key="idx"
                    class="bottom_sheet__item" :class="{'st-select' : idx === modal.bottomSheetAlready}"
                    @click="() => { close(item,idx) }"
            >   
                <button>
                    {{item}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ModalBottomSheet',
    computed : {
        modal() {
            return this.$store.state.modal
        },
        
    },
    methods: {
        close(selectItem, selectIndex) {
            this.$store.dispatch('closeBottomSheet', {selectItem, selectIndex});
        },
    },
    created() {
        this.$store.commit('MODAL_addDimmedClickAction' , () => {
            if(this.modal.is_bottomSheetActive) {
                this.close();
            }
        });
    }
}

export const bottomSheetStore = {

    state : {
        is_bottomSheetActive    : false,
        bottomSheetTitle        : '선택해주세요' ,
        bottomSheetList         : [],
        bottomSheetAlready      : -1,
        bottomSheetActionClose  : () => {} ,
    },
    
    mutations : {
        MODAL_showBottomSheet(state) {
            state.modal.is_bottomSheetActive = true;
        },
        MODAL_hideBottomSheet(state) {
            state.modal.is_bottomSheetActive = false;
        },
        MODAL_recordBottomSheetAlreadyIndex(state, index) {
            state.modal.bottomSheetAlready = index;
        },
        MODAL_changeBottomSheetTitle(state,title = '') {
            state.modal.bottomSheetTitle = title;
        },
        MODAL_registBottomSheetList(state,list = []) {
            state.modal.bottomSheetList = list;
        },
        MODAL_registBottomSheetActionClose(state,action = () => {}) {
            state.modal.bottomSheetActionClose = action;
        },
        MODAL_resetBottomSheetActionClose(state) {
            state.modal.bottomSheetActionClose = () => {};
        },
    },

    actions : {
        openBottomSheet({commit, dispatch}, payload = {}) {

            const {
                list , close  , already
            } = payload;

            if(!list){
                return;
            }

            if(already + 1){
                if(typeof already === 'number'){
                    commit('MODAL_recordBottomSheetAlreadyIndex' , already)
                }else if(typeof already === 'string') {
                    commit('MODAL_recordBottomSheetAlreadyIndex', list.indexOf(already))
                }
            }

            commit('MODAL_registBottomSheetList', list);

            if(close){
                commit('MODAL_registBottomSheetActionClose' , close);
            }

            dispatch('enableModal');
            commit('MODAL_showBottomSheet');

        },

        closeBottomSheet({state, commit, dispatch}, {selectItem , selectIndex} ) {

            dispatch('disableModal');
            commit('MODAL_hideBottomSheet');

            if(selectItem){
                state.modal.bottomSheetActionClose(selectItem,selectIndex);
            }else {
                console.dev('선택이 취소되었습니다.')
            }

            commit('MODAL_resetBottomSheetActionClose');

        },
    }
}

</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

.modal--bottom_sheet {
    z-index: 1020;
    border: 1px solid #000;
    bottom: 0;
    position: absolute;
    width: calc(100% - 20px); max-height : 500px;
    max-width : $STANDARD_mobile;
    left: 50%; 
    pointer-events: all !important;
    background: #fff;
    box-sizing: border-box;
    overflow:hidden;
    border-radius: 10px 10px 0 0 ;
    border: 2px solid $COLOR_theme;
    border-bottom: none;
    background-color: $COLOR_theme_background;
    box-shadow: 0 3px 30px rgba(0,0,0,0.5);
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease;

    overflow-y:scroll;
    &::-webkit-scrollbar {
        display:none;
    }

    transform: translate(-50%,100%);
    &.st-show {
        transform: translate(-50%, 0%);
    }

    @include phone {
        max-height: 50vh;
    }

}

.bottom_sheet__list {
    width: 100%; 
    height: 100%;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
}
.bottom_sheet__item {
    width: 100%;
    border-top: 2px solid $COLOR_theme;

    &:nth-child(1) {
        border-top: none;
    }

    &.st-select button {
        background: $COLOR_theme;
        color: $COLOR_theme_background;
    }

    button {
        text-align: left;
        
        width: 100%;
        height: 100%;
        padding: 20px 0;
        padding-left: $SIZE_PC_distanceContent;

        @include phone {
            padding-left: $SIZE_MO_distanceContent;
        }
        @include hover {
            background: $COLOR_theme;
            color: $COLOR_theme_background;
        }
    }
}

</style>