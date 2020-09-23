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
    name : "PlateFooter",
}
</script>

<style lang="scss" scoped>

@import '@/style/_mixin.scss';

#footer_plate {
    margin-top: 100px;
}

.footer__outer {
    padding: $SIZE_PC_distanceContent;
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