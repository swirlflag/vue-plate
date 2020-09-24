<template>
    <div class="page__outer">
        <div class="page__inner">
            <button @click="alertTest">
                지역  alert호출 테스트
            </button>
            <br>
            <br>
            <br>
            <button @click="confirmTest">
                지역 confirm 호출 테스트
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        alertTest () {
            this.$store.dispatch('showModalAlert' , '지역 store alert 테스트');
        },
        confirmTest () {
            const payload = {
                close : (result) => {
                    console.log(result);
                }
            }
            this.$store.dispatch('showModalConfirm' , payload); 
        }
    }
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