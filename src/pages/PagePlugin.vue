<template>
    <div class="page__outer">
        <div class="page__inner">

            <div class="paragraph">
                <div class="paragraph__title size--1">
                    플러그인
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    플러그인 설치법
                </div>
                <div class="paragraph__text">
                    이곳에서 설명하는 플러그인 설치는 패키지 관리자로 프로젝트 모듈에 설치하는것이 아닌 
                    app root, 혹은 vue 생성자 prototype에 직접 설치하는 것을 의미합니다.
                    따라서 npm으로 설치후 사용하는 것에는 영향이 없으며 그대로 혼용해서 사용해도 됩니다.
                </div>
                <div class="paragraph__text">
                    init/plugin.js 에서 최초 실행시 필요한 요소들을 설치합니다.
                    cdn script의 경우 window 전역과 렌더링될 public/index.html에 요소를 넣지 않기 위해 이곳에서 설치해줍니다.
                    plugin.js내 존재하는 cdns라는 객체형식에 맞추어 작성해주면, url에 맞는 스크립트를 동적으로 생성해 가져온 후 window에서 삭제합니다. 가져온 아이템들은 vue root로 들어가며 접두로 $_가 붙습니다. ( 예) slider => $_slider )
                </div>
                <div class="paragraph__title size--2">
                    외부 로그인 (미구현)
                </div>
                <div class="paragraph__text st-italic">
                    현재 로그인 상태 : <strong>{{ this.$store.state.user.is_login }}</strong>
                    <template v-if="this.$store.state.user.is_login">
                        <br>로그인 타입 : <strong>{{ this.$store.state.user.loginType }}</strong>
                        <br>엑세스 토큰 : <strong>{{ this.$store.state.user.accessToken }}</strong>
                    </template>
                </div>
                <div class="paragraph__title size--3">
                    Google 
                </div>
                <div class="paragraph__text">
                    <ButtonGoogleLogin @success="success" @cancle="cancle"/>
                </div>
                <div class="paragraph__title size--3">
                    Kakao
                </div>
                <div class="paragraph__text">
                    <ButtonKakaoLogin @success="success" @cancle="cancle"/>
                    <br><button @click="logouttest">로그아웃 테스트(카카오만)</button>
                </div>
                <div class="paragraph__title size--3">
                    Naver
                </div>

                <div class="paragraph__text">
                    
                </div>

                <div class="paragraph__title size--2">
                    결제 (미구현)
                </div>
                <div class="paragraph__text">
                    결제는 기본적으로 iamport를 사용해서 제작합니다
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import ButtonGoogleLogin from '@/components/input/ButtonGoogleLogin.vue';
import ButtonKakaoLogin from '@/components/input/ButtonKakaoLogin.vue';

export default {
    name : 'PagePlugin',
    components : {
        ButtonGoogleLogin, ButtonKakaoLogin,
    },
    computed : {
        ...mapState(['user'])
    },

    methods : {
        success(){
            
        },
        cancle(){
            
        },
        logouttest() {
            this.$store.dispatch('logout');
            // if(this.user.is_login) {
            //     if(this.user.loginType === 'kakao') {
            //         this.$_Kakao.API.request({
            //             url: '/v1/user/unlink',
            //             success(res) {
            //                 console.dev(res);
            //             }
            //         });
            //     }

            //     this.$store.dispatch('logout');
            // }else {
            //     console.log('로그인 상태가 아닙니다');
            // }

        }
    },
    created() {
        
    },
}
</script>

<style>

</style>