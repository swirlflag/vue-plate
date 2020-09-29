<template>
    <div class="page__outer">
        <SelectOption v-on:changeValue="changeSelectTeacher" :height='40' v-if="false">
            <select placeholder="placeholder">
                <option value="1">1번</option>
                <option value="2">2번</option>
                <option value="3">3번</option>
            </select>
        </SelectOption>

        <SelectOption2 @change="changeValue">
            <select>
                <option id="o0" value="0">0</option>
                <option id="o1" value="1" :selected="true">1</option>
                <option id="o2" value="2">2</option>
            </select>
        </SelectOption2>

        <p>{{now}}</p>

        <!-- <select slot="select" placeholder="Select Coach" v-bind:data-id="item.id">
                <option v-for="(coachItem) in coachesSelect" 
                        v-bind:key="coachItem.id"
                        v-bind:value="coachItem.id"
                        v-bind:select="item.teacherName === coachItem.name"
                >
                    {{coachItem.name}}
                </option>
            </select> -->
    </div>
</template>

<script>

import SelectOption from '@/components/input/SelectOption.vue';
import SelectOption2 from '@/components/input/SelectOption2.vue';

export default {
    components : {
        SelectOption , SelectOption2
    },
    data() {
        return {
            now : 0,
        }
    },
    methods : {
        changeSelectTeacher() {
            // console.log(1);
        },
        changeValue (idx) {
            this.now = idx
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