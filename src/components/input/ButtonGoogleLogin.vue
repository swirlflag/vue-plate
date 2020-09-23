<template>
    <button     class="button--google_login" 
                @click="click"
    >
        <img src="@/assets/icon/googleAuth.svg" alt="구글 로그인 아이콘">
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
            buttonText : this.value || "Sign in With Google",
        }
    },
    methods  : {

        click () {
            this.$emit('click');
            this.tryLoginGoogle();
        },

        tryLoginGoogle () {
            this.$gAuth.signIn()
                .then((response) => {
                    this.$store.dispatch('login_google',response);
                    this.$emit('success');
                })
                .catch((error) => {
                    this.$store.dispatch('login_cancle',error)
                    this.$emit('cancle');
                })
            ;
        },
        
    },    

}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';
.button--google_login {
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
        box-shadow: 0 0 3px 3px rgba(66,133,244,.3);
    }
    img {
        height: 100%;
        border: 1px solid #4285f4;
        
        box-sizing: border-box;
        background-color: #fff;
    }
    span {
        display: inline-block;
        background-color: #4285f4;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #fff;
        white-space: nowrap;
        text-align: center;
    }
}

</style>