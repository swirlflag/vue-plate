<template>
    <div    id="page_plate" 
            :class="{'st-pressdown' : isPagePressDown}"
            :style="{'transform-origin' : `50% ${scrollPercent}%`}"
    >
        <transition name="page_transition">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
// 페이지 등록은 router.js로 

export default {
    name : 'PlatePage',
    data() {
        return {
            scrollPercent : 0 , 
        }
    },
    watch : {
        isPagePressDown(now) {
            if(now){
                this.scrollPercent = (100/document.scrollingElement.scrollHeight * (window.scrollY + window.innerHeight)) * 0.9;
            }
        }   
    },
    computed : {
        isPagePressDown () {
            return this.$store.state.modal.is_bottomSheetActive
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/_mixin.scss';
#page_plate {
    flex: 1;
    flex-basis: 100%;
    
    transition: transform 400ms $EASE_outCubic;

    &.st-pressdown {
        transform: scale(0.98);
        @include phone {
            transform: scale(0.95);
        }
    }
}
</style>
<style lang="scss">
@import '@/style/_mixin.scss';
.page__outer {
    padding-top: 136px;
    @include phone {
        padding-top: 84px;
    }
}

.page__inner {
    max-width: $SIZE_PC_maxWidth;
    padding-left: $SIZE_PC_distanceContent;
    padding-right: $SIZE_PC_distanceContent;
    margin: 50px auto;
    position: relative;    
    @include phone {
        padding-left: $SIZE_MO_distanceContent;
        padding-right: $SIZE_MO_distanceContent;
    }
}

/* transition */
// .page_transition-enter-active {
//     transition: all 300ms ease 300ms;
//     position: absolute;
//     top: 0;
// }
// .page_transition-leave-active {
//     transition: all 300ms ease;
//     position: absolute;
//     top: 0;
// }
// .page_transition-enter, .page_transition-leave-to{
//     transform: translateY(10px);
//     opacity: 0;
// }
</style>