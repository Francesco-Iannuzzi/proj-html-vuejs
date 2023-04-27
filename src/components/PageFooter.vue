<script>
import SectionEmail from './SectionEmail.vue';
import FooterTop from './FooterTop.vue';

export default {
    name: "PageFooter",
    components: {
        SectionEmail,
        FooterTop,
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
        <div class="footer_bottom container d-flex justify-content-between">
            <div class="copyright">
                <span> &copy; 2023 Phlox All Rights Reserved</span>
            </div>
            <div class="social me-5">
                <ul class=" list-unstyled d-flex gap-3">
                    <li>
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </li>
                </ul>
            </div>
        </div>
        <!-- /footer_bottom -->
    </footer>
    <!-- /footer -->
</template>

<style lang="scss" scoped></style>