<template>
    <div id="page_plate">
        <transition name="page_transition">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
// 페이지 등록은 router.js로 

export default {
    name : 'PlatePage',
}
</script>

<style scoped lang="scss">
#page_plate {
    flex: 1;
    flex-basis: 100%;
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