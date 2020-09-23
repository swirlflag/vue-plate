<template>
    <div class="page__outer">
        <div class="page__inner">
            <h1>
                <strong>404</strong>
                <br class="br-phone">
                Page Not Found
            </h1>
            <p>페이지를 찾을수 없습니다.</p>
            <div class="buttons">
                <ButtonType1    text="메인으로 돌아가기"
                                @click="gotoMain"
                />

                <ButtonType1    text="이전 페이지로"
                                @click="gotoBack"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    components : {
        ButtonType1 ,
    },
    methods : {
        gotoMain() {
            this.$router.push('/');
        },
        gotoBack() {
            this.$router.go(-1);
        },
    },
    created() {
        if(this.$route.path !== '/404'){
            this.$router.replace('/404');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';

.page__outer {
    height: 100%;
    @include phone {
        text-align: center;
    }
}
.page__inner {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > * {
        margin: 20px 0;
    }
}

h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 80px;
    strong  {
        font-weight: 700;
    }

    @include phone {
        font-size: 5vw;
        strong {
            font-weight: 700;
            font-size: 45vw;
        }
    }
}

p {
    font-size: 16px;
}
.buttons {
    display: flex;

    @include phone {
        flex-direction: column;
    }

    > * {
        margin-right: 20px;
        @include phone {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
}

button {
    font-size: 18px;
    border: 1px solid $COLOR_theme;
    display: inline-block;
}


</style>