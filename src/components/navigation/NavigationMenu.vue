<template>
    <div class="nav__menu" v-bind:class="{'st-open' : isOpenMenu}">
        <div class="nav__menu__dimd" v-on:click="closeGlobalMenu"></div>
        <div class="nav__menu__wrap">
            <ul class="nav__menu__links">
                <li class="nav__menu__link"><router-link to="/" exact>Home</router-link></li>
                <li class="nav__menu__link"><router-link to="/ia" exact>구조</router-link></li>
                <li class="nav__menu__link"><router-link to="/layout" exact>글로벌</router-link></li>
                <li class="nav__menu__link"><router-link to="/C" exact>PAGE C</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'NavigationMenu',
    props : {
        isOpenMenu : Boolean,
    },
    methods : {
        closeGlobalMenu() {
            this.$emit('closeGlobalMenu');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

.nav__menu {
    display: block;
    z-index: 10;

    @include hardSelect {
        color: $COLOR_theme;
    };

    pointer-events: none;
    &.st-open {
        pointer-events: auto;
    }
    .nav__menu__dimd {
        width: 100%; height: 100%;
        position: absolute;
        top: 0; left: 0;
        background-color: transparent;
        transition: background-color 0.5s ease ,backdrop-filter 1s ease;
        pointer-events: none;
    }
    &.st-open .nav__menu__dimd {
        pointer-events: all;
        background-color: $COLOR_dimmed;
    }

    .nav__menu__wrap {
        position:absolute;
        top: 0; left: 0;
        width: 50%;
        height: 100%;
        border-right: 4px dashed $COLOR_theme;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        transform: translateX(-101%);
        transition: transform 300ms $EASE_inCubic, opacity 0ms 401ms ease ;
        opacity: 0;
        background-color : $COLOR_layer_background;
        backdrop-filter: blur(10px);
        @include phone {
            padding-top: 84px;
            border-right: none;
            border-bottom: 4px dashed $COLOR_theme;
            transform: translateY(-101%);
            width: 100%; height: auto;
            padding: $SIZE_MO_distanceContent;
            padding-top: 100px;
        }
    }
    &.st-open .nav__menu__wrap {
        transform: translate(0);
        transition: transform 650ms $EASE_outQuint, opacity 0ms ease;
        opacity: 1;
    }

    .nav__menu__links {
        text-align: right;
        .nav__menu__link {
            margin-top: 40px; margin-bottom: 40px;
            margin-right: 50px;
            font-size: 50px;
            margin-left: auto;
        
            @include phone {
                margin-right: 0;
                margin-top: 0;
                font-size: 22px;
                font-weight: 700;
                margin: 20px 0;
                padding-right: 20px;
            }

            > a {
                display: inline-block;
                border-bottom: 4px dashed transparent;
                &.router-link-active {
                    border-color: $COLOR_theme;
                }
                @include hover {
                    color: #fff;
                    border-color: #fff;
                }
            }

        }
    }

}

</style>