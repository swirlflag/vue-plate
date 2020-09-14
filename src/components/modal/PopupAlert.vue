<template>
    <div class="popup--alert" v-bind:class="{'st-show' : this.$store.state.isPopupAlertActive }">
        <div class="popup__title">
            {{ popupAlertTitle }}
        </div>
        <div class="popup__message">
            {{ popupAlertMessage }}
        </div>
        <div class="popup__button">
            <ButtonType1 v-on:click="closePopupAlert">
                {{ popupAlertButton }}
            </ButtonType1>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import ButtonType1 from '@/components/input/ButtonType1.vue'

export default {
    name: 'PopupAlert',
    components : {
        ButtonType1,
    },

    methods : {
        closePopupAlert() {
            this.$store.commit('hide_popupAlert');
            this.$store.commit('disable_modal');
            this.$store.commit('trigger_popupAlertClose');
        }
    },
    computed : {
        ...mapState([
            'popupAlertTitle',
            'popupAlertMessage',
            'popupAlertButton',
        ]),
    },
    created() {
        
    },
}
</script>

<style lang="scss">

@import '@/style/_mixin.scss';

.popup--alert {
    max-width: 500px; min-width : 300px; 
    height: auto;
    position: absolute;
    top: 50%; left: 50%; 
    transform: translate(-50%,-50%);
    backdrop-filter: blur(10px);
    opacity: 0;
    z-index: 1020;
    background-color: $COLOR_layer_background;
    border: 4px dashed $COLOR_theme;
    transition: transform 300ms ease , 
                opacity 300ms ease
                ;
    pointer-events: none;
    padding: 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.st-show  {
        opacity: 1;
        transform :translate(-50% ,calc(-50% - 20px));
        pointer-events: all;
    }
    
    > * {
        margin-top: 30px;
        &:nth-child(1) {
            margin-top: 0;
        }
    }

    .popup__title {
        font-size: 26px;
        font-weight: 700;
    }
    .popup__message {
        
    }
    .popup__check {

    }

}

</style>