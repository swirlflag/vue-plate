<template>
    <div class="button--type1">

        <button     v-if="!to"
                    v-on:click="buttonClick"
        >
            {{ buttonText }}
        </button>

        <router-link    v-if="to"
                        v-bind:to="to"
                        v-on:click="buttonClick"
        >
            {{ buttonText }}
        </router-link>

    </div>
    
    
</template>

<script>
export default {
    props : ['to'],
    name : 'ButtonType1',
    computed : {
        buttonText() {
            return this.$slots.default[0].text;
        },
    },
    created() {
        console.log(this.to);
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