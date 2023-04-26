<script>
import LogoElement from './LogoElement.vue';

export default {
    name: "PageHeader",
    components: {
        LogoElement,
    },
    data() {
        return {};
    },
    mounted() {
    },
    components: { LogoElement }
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand">
                <div class="container">
                    <LogoElement></LogoElement>
                    <!-- /logo -->
                    <div class="navbar" id="navbarSupportedContent">
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
                        <button class="btn border-0 rounded-5 px-4">Sign In</button>
                        <!-- /sign In button -->
                    </div>
                    <!-- /navbar -->
                </div>
            </nav>
        </div>
    </header>
    <!-- /header -->
</template>

<style lang="scss" scoped></style>