<template>
    <div id="cover_plate">
        <div class="cover_content"> 
            <h2>
                이 페이지는 Internet Explorer를 지원하지 않습니다.
            </h2>
            <h1>Vue Plate</h1>
            <p>
                뷰 플레이트는 vue.js를 기반의 빠른 정적 프로젝트 시작을 위한 초기 셋팅이 담긴 보일러 플레이트입니다.
                plate 라는 임의의 개념을 사용하여 분류, 큼직한 덩어리의 UI 후보군을 정리했으며 이에 대응하는 폴더링이 되어있습니다.
                이 화면은 프로젝트에서 지정한 서비스 대상에 포함되지 않는 조건에 표시되는 화면입니다.
                이곳에서 제공자는 사용자에게 서비스와 컨텐츠, 그리고 현재 환경에 맞는 설명을 해주어야 하며
                서비스 조건에 맞는 환경으로 접근할수 있도록 정보를 제공해주어야 합니다.
            </p>
            <p>
                서비스를 이용하시려면 다른 브라우저를 이용해 주세요.
                <br><strong>아래의 브라우저들을 추천합니다.</strong> 클릭하면 다운로드 페이지로 이동합니다.
                <br><br>
                <a href="https://www.google.com/intl/ko/chrome/" target="_blank">Google Chrome</a>
                <a href="https://whale.naver.com/ko/" target="_blank">Naver whale</a>
                <a href="https://www.microsoft.com/ko-kr/edge" target="_blank">Microsoft Edge</a>
            </p>
        </div>    
    </div>
</template>

<script>
export default {
    name : 'PlateCover',
    created() {
        window.scrollTo(0,0);
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';
#cover_plate {
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vw;
    box-sizing: border-box;

    @include phone {
        display: inline-block;
        padding: 0 0;
        margin: $SIZE_MO_distanceContent 0;
    }
} 
.cover_content {
    display: flex;
    flex-direction: column;
    border: 1px solid $COLOR_theme;
    max-width : 680px;
    margin : 0 auto;
    align-items: flex-start;
    padding: 100px;
    box-sizing: border-box;

    @include phone {
        min-height: 100%;
        overflow : scroll;
        padding: $SIZE_MO_distanceContent;
        margin: 0 $SIZE_MO_distanceContent;
        margin-bottom: $SIZE_MO_distanceContent;
    }
    
    > * {
        line-height:1em;
        margin: 0;
        margin-top: 40px;
        &:nth-child(1) {
            margin-top:0;
        }
    }
    
    h1 {
        font-size: 50px;
        font-weight: 700;
    }
    h2 {
        display: inline-block;
        background-color: $COLOR_theme;
        color: $COLOR_theme_background;
        font-weight: 700;
        font-size: 20px;
        padding: 7px;
    }
    p {
        line-height: 1.6em;
    }
    a {
        padding: 5px 10px;
        display: inline-block;
        border: 1px solid $COLOR_theme;
        margin-top: 5px; margin-right: 5px;
        text-decoration: underline;
        cursor: pointer;
        @include hover {
            background-color: $COLOR_theme;
            color: $COLOR_theme_background;
        }
    }
}
</style>