<script>
import LogoElement from './LogoElement.vue';
import SectionJumbo from './SectionJumbo.vue';

export default {
    name: "PageHeader",
    components: {
        LogoElement,
        SectionJumbo
    },
    data() {
        return {};
    }
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand">
                <div class="container">
                    <LogoElement></LogoElement>
                    <!-- /logo -->
                    <div class="menu_nav navbar" id="navbarSupportedContent">
                        <ul class="navbar-nav me-4 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                        </ul>
                        <!-- /menu sections -->
                        <button class="btn_primary btn border-0 rounded-5 px-4">Sign In</button>
                        <!-- /sign In button -->
                    </div>
                    <!-- /navbar menu -->
                </div>
            </nav>
            <!-- /navbar -->
            <SectionJumbo></SectionJumbo>
            <!-- /jumbo -->
        </div>
    </header>
    <!-- /header -->
</template>

<style lang="scss" scoped></style>