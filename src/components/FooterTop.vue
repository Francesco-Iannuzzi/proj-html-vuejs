<script>
import LogoElement from './LogoElement.vue';
export default {
    name: "FooterTop",
    components: {
        LogoElement
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="footer_top container">
        <div class="row">
            <div class="col">
                <LogoElement class="pb-4"></LogoElement>
                <p>
                    When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable
                </p>
            </div>
            <!-- /col -->
            <div class="col">
                <ul>
                    <li>
                        <h4>Quick Links</h4>
                    </li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <!-- /col -->
            <div class="col">
                <ul>
                    <li>
                        <h4>Resources</h4>
                    </li>
                    <li><a href="#">Art Design</a></li>
                    <li><a href="#">Computer</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Networking</a></li>
                    <li><a href="#">Web Security</a></li>
                </ul>
            </div>
            <!-- /col -->
            <div class="col">
                <ul>
                    <li>
                        <h4>Contact Us</h4>
                    </li>
                    <li><span>Address:</span> Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</li>
                    <li><span>Phone:</span> +99(0)101 0000 888</li>
                    <li><span>Email:</span> info@yourdomain.com</li>
                </ul>
            </div>
            <!-- /col -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>