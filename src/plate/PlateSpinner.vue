<template>
    <div id="spinner_plate">
        
    </div>
</template>

<script>
export default {
    name : 'PlateSpinner'
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

#spinner_plate{
    position: fixed;
    z-index: 1000;
    width: 100vw; height: 100%;
    pointer-events: none;
    background-color: transparent;
    pointer-events: none;
    box-sizing: border-box;
}
</style>