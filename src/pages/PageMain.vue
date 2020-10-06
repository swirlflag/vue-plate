<template>
<div class="page__outer">
    <div class="page__inner">
        <div class="paragraph">
            <div class="paragraph__title size--1">
                HELLO, VUE PLATE.
            </div>
            <div class="paragraph__text">
                {{ $L['page-main:text_1'] }}
                {{ $L["page-main:translate_notice"] }}
            </div>
            <span class="paragraph__divider"></span>
            <div class="paragraph__title size--2">
                {{ $L['page-main:title_2'] }}
            </div>
            <div class="paragraph__text">
                {{ $L['page-main:text_2'] }}
            </div>
            <div class="paragraph__title size--3">
                dependencies
            </div>
            <ul class="paragraph__list">
                <li v-for="(item,idx) in dependencies" :key="idx">
                    {{ item }}
                </li>
            </ul>
            <div class="paragraph__title size--3">
                dev-dependencies
            </div>
            <ul class="paragraph__list">
                <li v-for="(item,idx) in devDependencies" :key="idx">
                    {{ item }}
                </li>
            </ul>
            <div class="paragraph__title size--2">
                {{ $L['page-main:title_3'] }}
            </div>
            <div class="paragraph__text">
                {{ $L["page-main:text_3"] }}
            </div>
            <ul class="paragraph__list">
                <li v-for="(item,idx) in packageScripts" :key="idx">
                    npm run {{ item[0] }} : {{ item[1] }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

import packageData from '../../package.json';

export default {
    name : 'page_main',
    data() {
        return {
            dependencies : Object.keys(packageData.dependencies),
            devDependencies : Object.keys(packageData.devDependencies),
            packageScripts : Object.entries(packageData.scripts),
        }
    },
    computed : {
        $L() { return this.$store.getters.$L },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/_mixin.scss';
</style>