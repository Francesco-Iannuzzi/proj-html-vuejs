<script>
import SectionEmail from './SectionEmail.vue';
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
    name: "PageFooter",
    components: {
        SectionEmail,
        FooterTop,
        FooterBottom,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <footer>
        <SectionEmail></SectionEmail>
        <!-- /email -->
        <FooterTop></FooterTop>
        <!-- /footer_top -->
        <FooterBottom></FooterBottom>
        <!-- /footer_bottom -->
    </footer>
    <!-- /footer -->
</template>

<style lang="scss" scoped></style>