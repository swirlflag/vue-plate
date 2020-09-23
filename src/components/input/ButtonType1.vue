<template>
    <div class="button--type1">

        <button     v-if="!to"
                    @click="buttonClick"
        >
            {{ text }}
        </button>

        <router-link    v-if="to"
                        :to="to"
                        @click="buttonClick"
        >
            {{ text }}
        </router-link>

    </div>
    
    
</template>

<script>
export default {
    props : ['to' , 'text' ],
    name : 'ButtonType1',
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
    border: 2px solid $COLOR_theme;
    box-sizing : border-box;
    display: inline-block;
    text-align: center;

    button, a {
        padding: 8px 16px 6px;
        font-weight: 700;
        font-size: 18px;
        box-sizing : border-box;
        display: inline-block;
        width: 100%; height: 100%;
        line-height: 1em;
    }

    @include hover {
        border-color : $COLOR_theme_highlight;
        button , a {
            color:$COLOR_theme_highlight;
        }
    }
}
</style>