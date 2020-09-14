<template>
    <button     class="button--type1" 
                v-on:click="buttonClick"
                
    >
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name : 'ButtonType1',
    computed : {
        buttonText() {
            return this.$slots.default[0].text;
        },
    },
    created() {
        
    },
    methods : {
        buttonClick(){
            this.$emit('click');
        },
    },

}
</script>

<style scoped lang="scss">
@import '@/style/_mixin.scss';
.button--type1 {
    border: 1px solid #fff;
    min-width : 100px;
    border: 4px dashed $COLOR_theme;
    padding: 8px 16px 6px;
    font-weight: 700;
    font-size: 18px;
    box-sizing : border-box;
    display: inline-block;

    @include hover {
        color:$COLOR_theme_highlight;
        border-color : $COLOR_theme_highlight;
    }
}
</style>