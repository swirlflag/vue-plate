<template>
    <div class="page__outer">
        <div class="page__inner">
            <div class="paragraph">
                <div class="paragraph__title size--1">
                    API체계 (작성중..)
                </div>
                <div class="paragraph__divider"></div>

                <div class="paragraph__text">
                    뷰 플레이트에서 api호출은 기본적으로 두 단계로 나뉘어 있습니다.
                    @/api/index.js 에서 api에 대한 직접적인 호출에 대한 작성을 하고, 실제 사용은 action에서 이루어지게 됩니다.
                    따라서 apiActions들은 fetch(requset + write 로 가정) 의 기능을 기본적으로 가지고 있으며 return되는 then을 통해 지역적으로 로직을 추가할 수 있습니다. 
                </div>
                <div class="paragraph__text">
                    다음의 링크 리스트는 requset성공과 동시에 store에 기록하는 apiActions의 메소드를 실행해 렌더링합니다.
                </div>
                <ul class="paragraph__list">
                    <li v-for="item in newsList"
                        v-bind:key="item.id"
                    >
                        <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
                    </li>
                </ul>
                <div class="paragraph__text">
                    다음의 링크 리스트는 apiActions을 실행후 <strong>해당 페이지의 지역적인 라이프 사이클</strong> 내에서 결과값의 순서를 랜덤하게 변경해 store에 저장합니다.
                </div>
                <ul class="paragraph__list">
                    <li v-for="item in jobsList"
                        v-bind:key="item.id"
                    >
                        <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>                
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'PageApi',
    data() {
        return {
            newsListLength : 5,
            jobsListLength : 5,
        }
    },
    computed : {
        newsList() {
            return this.$store.state.newsList
                .filter((c,idx) => idx < this.newsListLength)
        },
        jobsList() {
            return this.$store.state.jobsList
                .filter((c,idx) => idx < this.jobsListLength)
        },
    },
    created() {
        this.$store.dispatch('fetch_newsList');
        this.$store.dispatch('fetch_jobsList')
            .then((response) => {
                this.$store.commit('WRITE_jobsList', response.data.sort(() => Math.random() - 0.5));
            });
    },
}


</script>

<style>

</style>