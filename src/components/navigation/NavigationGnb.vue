<template>
    <div class="nav__gnb">
        <div class="nav__gnb__wrap">
            <router-link class="nav__gnb__logo" to="/">뷰 플레이트</router-link>
            <ul class="nav__gnb__links">
                <template   v-for="(route,idx) in gnbRoutesList">
                    <li     v-bind:key="idx"
                            class="nav__gnb__link" 
                    >
                        <router-link v-bind:to="route.path" exact>
                            {{ route.name }}
                        </router-link>
                    </li>
                </template>
            </ul>
            <button class="nav__gnb__menubutton" v-on:click="toggleGlobalMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        routesInfo : Array,
    },
    name : 'NavigationGnb',
    computed : {
        gnbRoutesList() {
            return this.routesInfo.filter(c => {
                return c.path !== '*'
                    && c.path !== '/'
                    && c.path !== '/404'
            });
        }
    },
    methods : {
        toggleGlobalMenu() {
            this.$emit('toggleGlobalMenu');
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

.nav__gnb {
    border-bottom: 3px solid $COLOR_theme;
    color: #fff;
    position: absolute;
    width: 100%;
    top: 0; left: 0;
    padding: 41px $SIZE_PC_distanceContent;
    box-sizing: border-box;
    backdrop-filter: blur(30px);
    
    @include phone {
        padding: $SIZE_MO_distanceContent;
        z-index: 10;
    }

    .nav__gnb__wrap{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: $SIZE_PC_maxWidth; 
        max-width:100%;
        height: 50px;
        margin: 0 auto;
        box-sizing: content-box;
        font-size: 18px;
        font-weight: 700;

        @include hardSelect {
            color: $COLOR_theme;
        }
        
        .nav__gnb__logo {
            margin-right: auto;
            display :inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            font-size: 30px;
            padding-top: 13px;
            padding-left: 20px;
            padding-right: 5px;
            border-radius: 23px 5px 0px 5px;
            line-height: 1em;
            border: 4px solid $COLOR_theme;
            border-left-width: 2px;
            border-top-width: 2px;

            font-family: 'Black Han Sans', sans-serif; 
            font-weight: 400;
            transition: padding-left 300ms $EASE_outCubic, padding-right 500ms ease 50ms;
            cursor : pointer;

            @include hover {
                padding-left: 40px;
                padding-right: 15px;
                color:$COLOR_theme_highlight;
                border-color :$COLOR_theme_highlight;
            }
        }

        .nav__gnb__links {
            display: flex;
            margin-right: 50px;
            align-items: center;

            .nav__gnb__link {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                position: relative;
                margin: 0 20px;

                &:after{
                    content:'';
                    width: 3px; height: 10px;
                    right: -20px;
                    background-color: $COLOR_theme;
                    opacity: 0.6;
                    position: relative;
                    display: inline-block;
                    position:absolute
                }
                &:last-child::after{
                    display: none;
                }
                @include phone {
                    display: none;
                }
                > a {
                    color: $COLOR_theme;
                    border-bottom: 3px solid transparent;
                    &.router-link-active {
                        border-color : $COLOR_theme;
                    }
                    @include hover {
                        color:$COLOR_theme_highlight;
                        border-color :$COLOR_theme_highlight;
                    }
                }
            }
        }

        .nav__gnb__menubutton {
            width: 48px; height: 48px;
            border: 3px solid $COLOR_theme;
            box-sizing: border-box;
            position: relative;
            z-index: 12;
            
            span {
                position: absolute;
                width : 25px; height : 3px;
                display: inline-block;
                background-color: $COLOR_theme;
                top : 50%; left: 50%;
                transform: translate(-50%,-50%);
                &:nth-child(1) {top: 29%;}
                &:nth-child(2) {top: 71%;}
            }

            @include hover {
                border-color:$COLOR_theme_highlight;
                span {
                    background-color:$COLOR_theme_highlight;
                }
            }
            
        }

    }
}
</style>