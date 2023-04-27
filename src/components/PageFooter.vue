<script>
import SectionEmail from './SectionEmail.vue';
import FooterTop from './FooterTop.vue'

export default {
    name: "PageFooter",
    components: {
        SectionEmail,
        FooterTop
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
        <div class="footer_bottom container">

        </div>
        <!-- /footer_bottom -->
    </footer>
    <!-- /footer -->
</template>

<style lang="scss" scoped></style>