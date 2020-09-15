<template>
<!-- 
    MEMO :
    NavigationPlate 에선, 기본적으로 가로, 세로 100% 인 #gnb 라는 레이어에서 
    전역 성격으로 적절한 네비게이션들을 배치합니다
    #gnb 자체는 기본적으로 윈도우(100%,100%)의 크기를 가지며 position : fixed입니다.
    #gnb 이하의 컴포넌트들은 자유롭게 배치할수 있습니다.
-->

    <nav id="gnb">
        
        <!-- 예시 : 고정 영역 네비게이션 컴포넌트 -->
        <div class="gnb_fix">
            <div class="gnb_fix__wrap">
                <router-link class="gnb_fix__logo" to="/">뷰 플레이트</router-link>
                <ul class="gnb_fix__links">
                    <li class="gnb_fix__link"><router-link to="/ia" exact>구조</router-link></li>
                    <li class="gnb_fix__link"><router-link to="/layout" exact>글로벌</router-link></li>
                    <li class="gnb_fix__link"><router-link to="/C" exact>PAGE C</router-link></li>
                </ul>
                <button class="gnb_fix__menubutton" v-on:click="toggleGlobalMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <!-- 예시 : 메뉴로 열고닫는 네비게이션 컴포넌트-->
        <div class="gnb_menu" v-bind:class="{'st-open' : isOpenMenu}">
            <div class="gnb_menu__dimd" v-on:click="closeGlobalMenu"></div>
            <div class="gnb_menu__wrap">
                <ul class="gnb_menu__links">
                    <li class="gnb_menu__link"><router-link to="/" exact>Home</router-link></li>
                    <li class="gnb_menu__link"><router-link to="/ia" exact>구조</router-link></li>
                    <li class="gnb_menu__link"><router-link to="/layout" exact>글로벌</router-link></li>
                    <li class="gnb_menu__link"><router-link to="/C" exact>PAGE C</router-link></li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
export default {
    name : 'NavigationPlate',
    data () {
        return {
            isOpenMenu : false,
        };
    },
    watch: {
        '$route' () {
            this.closeGlobalMenu();
        },
        'isOpenMenu' () {
            this.$emit('changeGnbState' , this.isOpenMenu);
        },
    },
    methods : {
        toggleGlobalMenu()  { this.isOpenMenu = !this.isOpenMenu },
        openGlobalMenu()    { this.isOpenMenu = true },
        closeGlobalMenu()   { this.isOpenMenu = false },
    },
    create() {
        
    },
}
</script>

<style lang="scss" scoped>

@import '@/style/_mixin.scss';

#gnb{
    position: fixed;
    z-index: 1000;
    width: 100vw; height: 100%;
    pointer-events: none;
    background-color: transparent;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }
}

.gnb_fix {
    border-bottom: 4px dashed $COLOR_theme;
    color: #fff;
    position: absolute;
    width: 100%;
    top: 0; left: 0;
    padding: 41px $SIZE_PC_distanceContent;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    
    @include phone {
        padding: $SIZE_MO_distanceContent;
        z-index: 10;
    }

    .gnb_fix__wrap{
        display: flex;
        // justify-content: space-between;
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
        
        .gnb_fix__logo {
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
            border-left-style: dashed;
            border-top-style: dashed;

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

        .gnb_fix__links {
            display: flex;
            margin-right: 50px;
            align-items: center;

            .gnb_fix__link {
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
                    border-bottom: 4px dashed transparent;
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

        .gnb_fix__menubutton {
            width: 48px; height: 48px;
            border: 4px solid $COLOR_theme;
            border-left-style: dashed;
            box-sizing: border-box;
            position: relative;
            z-index: 12;
            
            span {
                position: absolute;
                width : 25px; height : 4px;
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

.gnb_menu {
    display: block;
    z-index: 10;

    @include hardSelect {
        color: $COLOR_theme;
    };

    pointer-events: none;
    &.st-open {
        pointer-events: auto;
    }
    .gnb_menu__dimd {
        width: 100%; height: 100%;
        position: absolute;
        top: 0; left: 0;
        background-color: transparent;
        transition: background-color 0.5s ease ,backdrop-filter 1s ease;
        pointer-events: none;
    }
    &.st-open .gnb_menu__dimd {
        pointer-events: all;
        background-color: $COLOR_dimmed;
    }

    .gnb_menu__wrap {
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
    &.st-open .gnb_menu__wrap {
        transform: translate(0);
        transition: transform 650ms $EASE_outQuint, opacity 0ms ease;
        opacity: 1;
    }

    .gnb_menu__links {
        text-align: right;
        .gnb_menu__link {
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