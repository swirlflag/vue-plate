
<template>
    <div class="modal--alert" :class="{'st-show' : true }">
        <div class="alert__title">
            타이틀
        </div>
        <div class="alert__message">
            메시지
        </div>
        <div class="alert__button">
            <ButtonType1    text="확인1" 
                            @click="close"
            />
        </div>
    </div>
</template>

<script>

import ButtonType1 from '@/components/input/ButtonType1.vue';

export default {
    name : 'ModalAlert',
    components : {
        ButtonType1
    },
    methods  : {
        show(payload) {
            console.log(payload);
        },
        close() {
            console.log('close..');
        },
    },
    created() {
        this.$modal.$on('alert:open' , this.show);
        this.$modal.$on('alert:close', this.close);
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
    border: 2px solid $COLOR_theme;
    padding: 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;
    box-shadow: 0 5px 30px rgba(0,0,0,0.5);
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