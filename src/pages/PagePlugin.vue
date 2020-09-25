<template>
    <div class="page__outer">
        <div class="page__inner">

            <div class="paragraph">
                <div class="paragraph__title size--1">
                    플러그인 (아 너무어렵다)
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    플러그인 설치법
                </div>
                <div class="paragraph__text">
                    플러그인 설치법 작성하기
                </div>
                <div class="paragraph__title size--2">
                    외부 로그인
                    <!-- 
                        TODO: 
                        구글 카카오 네이버 3사 기본적으로 연결하기
                        세션 유지하기
                        서비스 서버에 로그인정보 쏘는 모양까지??
                     -->
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
                    결제
                </div>
                <div class="paragraph__text">
                    결제는 기본적으로 iamport를 사용..
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
            if(this.user.is_login) {
                if(this.user.loginType === 'kakao') {
                    this.$_Kakao.API.request({
                        url: '/v1/user/unlink',
                        success(res) {
                            console.dev(res);
                        }
                    });
                }

                this.$store.dispatch('logout');
            }else {
                console.log('로그인 상태가 아닙니다');
            }

        }
    },
    created() {
        
    },
}
</script>

<style>

</style>