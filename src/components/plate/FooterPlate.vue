<template>
    <footer id="footer_plate">
        <div class="footer__outer">
            <div class="footer__inner">
                Vue Plate Footer.
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/style/_mixin.scss';

#footer_plate {
    
}

.footer__outer {
    padding: $SIZE_PC_distanceContent;
    border-top: 4px dashed $COLOR_theme_background;
    background-color:$COLOR_theme;
    box-sizing: border-box;
    color:$COLOR_theme_background;
}

.footer__inner {
    width : auto;
    max-width : $SIZE_PC_maxWidth;
    margin: 0 auto;
    box-sizing: border-box;
}

</style>