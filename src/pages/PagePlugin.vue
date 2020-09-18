<template>
    <div class="page__outer">
        <div class="page__inner">

            <div class="paragraph">
                <div class="paragraph__title size--1">
                    플러그인
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    외부 로그인
                </div>
                <div class="paragraph__text st-italic">
                    현재 로그인 상태 : {{ this.$store.state.is_login}}
                </div>
                <div class="paragraph__title size--3">
                    Google 
                </div>
                <div class="paragraph__text">
                    <ButtonGoogleAuth/>
                </div>
                <div class="paragraph__title size--3">
                    Naver
                </div>
                <div class="paragraph__title size--3">
                    Kakao
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ButtonGoogleAuth from '@/components/input/ButtonGoogleAuth.vue';

export default {
    name : 'Analytics',
    components : {
        ButtonGoogleAuth,
    },
    data() {
        return {
            
        }
    },

    methods : {
    },
    created() {
        
    },
}
</script>

<style>

</style>