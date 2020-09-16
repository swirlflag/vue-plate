<template>
    <div class="modal--alert" v-bind:class="{'st-show' : this.$store.state.is_ModalAlertActive }">
        <div class="alert__title">
            {{ modalAlertTitle }}
        </div>
        <div class="alert__message">
            {{ modalAlertMessage }}
        </div>
        <div class="alert__button">
            <ButtonType1 v-on:click="closeModalAlert">
                {{ modalAlertButton }}
            </ButtonType1>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import ButtonType1 from '@/components/input/ButtonType1.vue'

export default {
    name: 'ModalAlert',
    components : {
        ButtonType1,
    },
    methods : {
        closeModalAlert() {
            this.$store.dispatch('closeModalAlert');
        }
    },
    computed : {
        ...mapState([
            'modalAlertTitle',
            'modalAlertMessage',
            'modalAlertButton',
        ]),
    },
    created() {
        
    },
}
</script>

<style lang="scss">

@import '@/style/_mixin.scss';

.modal--alert {
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
    padding: 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;
    transition: transform 260ms $EASE_inCubic , 
                opacity 250ms ease
                ;

    &.st-show  {
        opacity: 1;
        transform :translate(-50% ,calc(-50% - 30px));
        pointer-events: all;
        transition: transform 400ms $EASE_outQuint , 
                    opacity 300ms ease
                    ;
    }
    
    > * {
        margin-top: 30px;
        &:nth-child(1) {
            margin-top: 0;
        }
    }

    .alert__title {
        font-size: 26px;
        font-weight: 700;
    }
    .alert__message {
        
    }
    .alert__check {

    }

}

</style>