<template>
    <button     class="button--kakao_login" 
                v-on:click="click"
    >
        <!-- <img src="@/assets/icon/googleAuth.svg" alt="구글 로그인 아이콘"> -->
        <span>{{ buttonText }}</span>
    </button>
</template>

<script>
export default {
    props : {
        value : String,
    },
    data() {
        return {
            buttonText : this.value || "카카오로 로그인",
        }
    },
    methods : {
        click () {
            this.$emit('click');
            this.tryLoginKakao();
        },

        tryLoginKakao () {

            console.log(this.$_Kakao.Auth);
        
            const _this = this;
            {_this}

            // this.$_Kakao.Auth.authorize({
            //     redirectUri : 'http://localhost:8080/plugin',
            // });

            this.$_Kakao.Auth.login({
                success : (response) => {
                    _this.$store.dispatch('login_kakao', response);
                    _this.$emit('success');

                    _this.$_Kakao.API.request({
                        url: '/v2/user/me',
                        success	: (res) => {
                            console.log(res);
                        }
                    });

                    _this.$_Kakao.API.request({
                        url: '/v1/api/talk/profile',
                        success	: (res) => {
                            console.log(res);
                        },
                    });
                },
                fail() {
                    _this.$emit('fail');
                }
            });
        },

        login() {

        },

    },
    mounted () {
          
    },
        
}
</script>

<style lang="scss">
@import '@/style/_mixin.scss';

.button--kakao_login {
    padding: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 50px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    transition: box-shadow 218ms ease;
    border-radius: 3px;
    overflow:hidden;
    @include hover {
        box-shadow: 0 0 3px 3px rgba(248,216,3,0.3);
    }
    img {
        // height: 100%;
        // border: 1px solid #4285f4;
        // box-sizing: border-box;
        // background-color: #fff;
    }
    span {
        display: inline-block;
        background-color: rgba(248,216,3,1);
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #3B1C1C;
        font-weight: bold;
        white-space: nowrap;
        text-align: center;
    }
}

</style>

