<template>
    <div class="page__outer">
        <div class="page__inner">
            <button @click="test">
                지역 store alert호출 테스트
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        test () {
            this.$store.dispatch('showModalAlert' , '지역 store 모달 테스트');
        }
    }
}
</script>

<style>
button {
    padding: 20px;
    font-weight: 700;
    color: #d3d !important;
    border: 2px solid #d3d !important;
}
</style>