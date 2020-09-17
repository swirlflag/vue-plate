<template>
    <ButtonType1 v-on:click="click">
        구글 로그인 ..?
    </ButtonType1>
</template>

<script>

import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    components : {
        ButtonType1 , 
    },
    data() {
        return {
           
        }
    },
    methods  : {
        async click () {

            this.$gAuth.signIn()
                .then((response) => {
                    this.onSuccess(response);
                })
                .catch((error) => {
                    this.onFailure(error);
                })
            ;
        },

        onSuccess (googleUser) {
            console.log(googleUser);
        },
        onFailure(error) {
            console.log(error);
        }
    }
}
</script>

<style>

</style>