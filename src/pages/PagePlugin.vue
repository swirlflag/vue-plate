<template>
    <div class="page__outer">
        <div class="page__inner">

            <div class="paragraph">
                <div class="paragraph__title size--1">
                    플러그인 (작성중)
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    외부 로그인
                </div>
                <div class="paragraph__text st-italic">
                    현재 로그인 상태 : <strong>{{ this.$store.state.is_login }}</strong>
                    <template v-if="this.$store.state.is_login">
                        <br>로그인 타입 : <strong>{{ this.$store.state.loginType }}</strong>
                        <br>엑세스 토큰 : <strong>{{ this.$store.state.accessToken }}</strong>
                    </template>
                </div>
                <div class="paragraph__title size--3">
                    Google 
                </div>
                <div class="paragraph__text">
                    <ButtonGoogleLogin v-on:success="success" v-on:cancle="cancle"/>
                </div>
                <div class="paragraph__title size--3">
                    Kakao
                </div>
                <div class="paragraph__text">
                    <ButtonKakaoLogin v-on:success="success" v-on:cancle="cancle"/>
                    <br><button v-on:click="logouttest">로그아웃 테스트(카카오만)</button>
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
                    결제는 기본적으로 iamport가 등록되어있습니다.
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

import ButtonGoogleLogin from '@/components/input/ButtonGoogleLogin.vue';
import ButtonKakaoLogin from '@/components/input/ButtonKakaoLogin.vue';

export default {
    name : 'Analytics',
    components : {
        ButtonGoogleLogin, ButtonKakaoLogin,
    },

    methods : {
        success(){
            
        },
        cancle(){
            
        },
        logouttest() {
            this.$_Kakao.API.request({
                url: '/v1/user/unlink',
                success(res) {
                    console.dev(res);
                }
            });
        }
    },
    created() {
        
    },
}
</script>

<style>

</style>