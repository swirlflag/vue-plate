<template>
    <div class="modal--bottom_sheet" :class="{'st-show' : modal.is_bottomSheetActive }">
        <div class="bottom_sheet__list">
            <div    class="bottom_sheet__item"
                    v-for="(item,idx) in modal.bottomSheetList"
                    :key="idx"
                    @click="() => {close(item,idx)}"
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
        bottomSheetActionClose  : () => {} ,
        
    },
    
    mutations : {
        MODAL_showBottomSheet(state) {
            state.modal.is_bottomSheetActive = true;
        },
        MODAL_hideBottomSheet(state) {
            state.modal.is_bottomSheetActive = false;
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
                list , close  
            } = payload;

            if(!list){
                return;
            }

            commit('MODAL_registBottomSheetList', list);
            close && commit('MODAL_registBottomSheetActionClose' , close);
            dispatch('enableModal');
            commit('MODAL_showBottomSheet');
            
        },
        closeBottomSheet({state, commit, dispatch}, {selectItem , selectIndex} ) {
        
            dispatch('disableModal');
            commit('MODAL_hideBottomSheet');
            state.modal.bottomSheetActionClose(selectItem,selectIndex);
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
    
    opacity: 0.785;
    pointer-events: all !important;
    background: #fff;
    box-sizing: border-box;
    overflow:hidden;
    border-radius: 10px 10px 0 0 ;
    border: 2px solid $COLOR_theme;
    border-bottom: none;
    background-color: $COLOR_layer_background;
    background-color: #aaa;
    box-shadow: 0 3px 30px rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
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
        max-height: 45vh;
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
    
    button {
        text-align: left;
        
        width: 100%;
        height: 100%;
        padding: 20px 0;
        padding-left: $SIZE_PC_distanceContent;

        @include phone {
            padding-left: $SIZE_MO_distanceContent;
        }
    }
}

</style>