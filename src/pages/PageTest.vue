<template>
    <div class="page__outer">
        <div class="page__inner">
            <button @click="alertTest">
                지역 alert 테스트
            </button>
            <br>
            <br>
            <br>
            <button @click="confirmTest" data-l="page-test:confirm_test_button">
                지역 confirm 테스트
            </button>
        </div>
    </div>
</template>

<script>

export default {
    methods : {
        alertTest () {
            this.$store.dispatch('showModalAlert' );
        },
        confirmTest () {
            const payload = {
                close : (result) => {
                    console.log(result);
                }
            }
            this.$store.dispatch('showModalConfirm' , payload); 
        },
    },
}
</script>

<style scoped>
button {
    padding: 20px;
    font-weight: 700;
    color: #d3d !important;
    border: 2px solid #d3d !important;
}
</style>