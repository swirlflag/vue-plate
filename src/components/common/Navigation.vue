<template>
    <!-- 
        Navigation 에선, 가로, 세로 100% 인 #gnb 라는 레이어에서 
        전역 성격으로 적절한 네비게이션들을 배치합니다
        #gnb 자체는 기본적으로 윈도우의 크기를 가집니다.
        #gnb 이하의 컴포넌트들은 자유롭게 배치할수 있습니다.
    -->

    <nav id="gnb">
        
        <!-- 예시 : 고정 영역인 네비게이션 -->
        <div class="gnb_fix">
            <div class="gnb_fix__wrap">
                <div class="gnb_fix__logo">로고</div>
                <ul class="gnb_fix__links">
                    <li class="gnb_fix__link"><router-link to="/A">PAGE A</router-link></li>
                    <li class="gnb_fix__link"><router-link to="/B">PAGE B</router-link></li>
                    <li class="gnb_fix__link"><router-link to="/C">PAGE C</router-link></li>
                </ul>
                <button class="gnb_fix__togglemenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <!-- 예시 : 메뉴로 열고닫는 네비게이션-->
        <div class="gnb_menu">
            <div class="gnb_menu__dimd"></div>
            <div class="gnb_menu__wrap">
                <ul class="gnb_menu__links">
                    <li class="gnb_menu__link"><router-link to="/A">PAGE A</router-link></li>
                    <li class="gnb_menu__link"><router-link to="/B">PAGE B</router-link></li>
                    <li class="gnb_menu__link"><router-link to="/C">PAGE C</router-link></li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
export default {
    name : 'Navigation',
}
</script>

<style lang="scss" scoped>
#gnb{
    position: fixed;
    width: 100vw; height: 100vh;
    pointer-events: none;
    background-color: transparent;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }
}
</style>


<style lang="scss" scoped>
// 더미용

@import '@/style/_mixin.scss';
$c_blue1 : rgb(84, 99, 230);
$c_blue2 : rgb(195, 184, 245);

$c_white : #fff;
$c_black : #000;

.gnb_fix {
    border: 4px dashed $c_blue1;
    color: $c_white;
    position: absolute;
    width: 100%;
    top: 0; left: 0;
    padding: $SIZE_PC_distanceContent;
    box-sizing: border-box;

    .gnb_fix__wrap{
        display: flex;
        justify-content: space-between;
        width: $SIZE_PC_maxWidth; 
        max-width:100%;
        height: 50px;
        margin: 0 auto;
        box-sizing: content-box;
        font-size: 18px;
        font-weight: 700;

        @include hardSelect {
            color: $c_blue1;
        }
        
        .gnb_fix__logo {
            display :flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            font-size: 30px;
            padding-top: 20px;
            padding-left: 15px;
            border-radius: 20px 6px 0 6px ;
            line-height: 1em;
            border: 4px solid $c_blue1;
            font-family: 'Black Han Sans', sans-serif; 
            font-weight: 400;
        }

        .gnb_fix__links {
            display: flex;
            align-items: center;

            .gnb_fix__link {
                box-sizing: border-box;
                border-bottom: 5px solid transparent;
                display: flex;
                align-items: center;
                position: relative;
                margin: 0 20px;
                &:hover {
                    border-color : $c_blue1;
                }
                &:after{
                    content:'';
                    width: 3px; height: 10px;
                    right: -20px;
                    background-color: $c_blue1;
                    opacity: 0.6;
                    position: relative;
                    display: inline-block;
                    position:absolute
                }
                &:last-child::after{
                    display: none;
                }
                
            }
        }

        .gnb_fix__togglemenu {
            width: 50px; height: 50px;
            border: 4px solid $c_blue1;
            box-sizing: border-box;
            position: relative;
            span {
                position: absolute;
                width : 25px; height : 4px;
                display: inline-block;
                background-color: $c_blue1;
                top : 50%; left: 50%;
                transform: translate(-50%,-50%);
                &:nth-child(1) {
                    top: 29%;
                }
                &:nth-child(2) {
                    top: 71%;
                }
            }
        }

    }
}


.gnb_menu {

    display: block;
    display: block;

    @include hardSelect {
        color: $c_blue2;
    };
    
    .gnb_menu__dimd {
        width: 100%; height: 100%;
        position: absolute;
        top: 0; left: 0;
        background-color: rgba(0,0,0,0.5);
    }

    .gnb_menu__wrap {
        position:absolute;
        top: 0; left: 0;
        width: 50%;
        height: 100%;
        border: 4px dashed $c_blue2;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background-color: rgba(0,0,0,0.9);
    }

    .gnb_menu__links {
        .gnb_menu__link {
            margin-top: 40px;
            margin-right: 50px;
            font-size: 50px;
            margin-left: auto;
            border-bottom: 4px solid transparent;
            &:nth-child(1){
                margin-top: 0;
            }
            &:hover {
                border-color:$c_blue2;
            }
        }
    }
}


</style>