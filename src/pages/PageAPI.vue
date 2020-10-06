<template>
    <div class="page__outer">
        <div class="page__inner">
            <div class="paragraph">
                <div class="paragraph__title size--1">
                    API체계 (작성중..)
                </div>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    외부 API
                </div>
                <div class="paragraph__text">
                    뷰 플레이트에서 api호출은 기본적으로 두 단계로 나뉘어 있습니다.
                    @/api/index.js 에서 api에 대한 직접적인 리퀘스트 내용을 작성하고, 실제 사용은 action에서 이루어지게 됩니다.
                    따라서 api actions들은 fetch(requset + write 로 가정) 의 기능을 기본적으로 가지고 있으며 return되는 then을 통해 지역적으로 로직을 추가할 수 있습니다. 
                </div>
                <div class="paragraph__text">
                    다음의 링크 리스트는 requset성공과 동시에 store의 api actions까지실행해(store state에 저장) 렌더링(store state 참조)합니다.
                </div>
                <ul class="paragraph__list">
                    <li v-for="item in newsList"
                        :key="item.id"
                    >
                        <a :href="item.url" target="_blank">{{ item.title }}</a>
                    </li>
                </ul>
                <div class="paragraph__text">
                    다음의 링크 리스트는 apiActions을 실행후 <strong>해당 페이지의 지역적인 라이프 사이클</strong> 내에서 결과값의 순서를 랜덤하게 변경해 store에 저장합니다.
                </div>
                <ul class="paragraph__list">
                    <li v-for="item in jobsList"
                        :key="item.id"
                    >
                        <a :href="item.url" target="_blank">{{ item.title }}</a>                
                    </li>
                </ul>
                <div class="paragraph__divider"></div>
                <div class="paragraph__title size--2">
                    다국어
                </div>
                <div class="paragraph__text">
                    다국어를 표현해 놓은 JSON 파일을 build될 프로젝트 플더(src)밖에 놓고, 필요할 때 가져와 본문을 교체합니다. 현재 프로젝트는 init시 모든 컨텐츠를 fetch해 클라이언트에 포함시킨 후, store의 languageType에 따라 선택 언어에 맞는 내용을 표기합니다. 메인만 적용되어 있습니다.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'PageAPI',
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