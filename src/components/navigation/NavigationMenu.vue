<template>
    <div class="nav__menu" :class="{'st-open' : isOpenMenu}">
        <div class="nav__menu__dimd" @click="closeGlobalMenu"></div>
        <div class="nav__menu__wrap">
            <ul class="nav__menu__links">
                <li     v-for="(route,idx) in gnbRoutesList" 
                        :key="idx"
                        class="nav__menu__link" 
                >
                    <router-link :to="route.path" exact>
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>

            <div class="language_select" v-if="$store.state.languageKinds">
                <ul class="language_select__list">
                    <li 
                        v-for="(item,idx) in Object.entries($store.state.languageKinds)" 
                        class="language_select__item"
                        v-bind:class="{ 'st-select' : $store.state.languageType  === item[0] }"
                        :key="idx"
                        @click="changeLanguage(item[0])"
                    >
                        {{ item[1] }}
                    </li>
                    
                </ul>
                <span>언어는 테스트로 메인페이지만 변경됩니다.</span>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    name : 'NavigationMenu',
    props : {
        isOpenMenu : Boolean,
        routesInfo : Array,
    },
    computed : {
        gnbRoutesList() {
            return this.routesInfo.filter(c =>  {
                return c.path !== '*'  
                    && c.path !== '/404'
            });
        },
    },
    
    methods : {
        closeGlobalMenu() {
            this.$emit('closeGlobalMenu');
        },
        changeLanguage(lang) {
            this.$store.commit('CHANGE_languageType' , lang);
        }
    },

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
        border-right: 3px solid $COLOR_theme;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        transform: translateX(-101%);
        transition: transform 300ms $EASE_outCubic, opacity 0ms 301ms ease ;
        opacity: 0;
        background-color : $COLOR_layer_background;
        backdrop-filter: blur(10px);
        @include phone {
            padding-top: 84px;
            border-right: none;
            border-bottom: 3px solid $COLOR_theme;
            transform: translateY(-101%);
            width: 100%; height: auto;
            padding: $SIZE_MO_distanceContent;
            padding-top: 100px;
        }
    }
    &.st-open .nav__menu__wrap {
        transform: translate(0);
        transition: transform 550ms $EASE_outQuint, opacity 0ms ease;
        opacity: 1;
    }

    .nav__menu__links {
        text-align: right;
        .nav__menu__link {
            margin-top: 40px; margin-bottom: 40px;
            margin-right: 50px;
            font-size: 50px;
            margin-left: auto;
            font-weight: 700;
        
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
                border-bottom: 4px solid transparent;
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

.language_select {
    display: inline-block;
    position: absolute;
    left: $SIZE_PC_distanceContent;
    bottom: $SIZE_PC_distanceContent;

    @include phone {
        left: $SIZE_MO_distanceContent;
        bottom: $SIZE_MO_distanceContent;
    }

    .language_select__list {
        display: flex;
        align-items: center;
    }

    .language_select__item {
        display: inline-block;
        cursor: pointer;
        @include hover {
            text-decoration: underline;
        }
        &.st-select {
            text-decoration: underline;
            font-weight: 700;
        }
        &:after {
            content : '';
            display: inline-block;
            background-color: $COLOR_theme;
            opacity: 0.55;
            width: 1px; height: 10px;
            margin: 0 10px;
        }
        &:last-child:after{
            display: none;
        }
    }

    > span {
        font-style: italic;
        display: inline-block;
        margin-top: 10px;
        font-size: 10px;
    }

}

</style>