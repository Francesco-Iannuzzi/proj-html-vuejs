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
            <section class="jumbo">
                <div class="row pb-5">
                    <div class="jumbo_left col-6">
                        <div class="pb-4">
                            <h1>
                                Business Planning
                            </h1>
                            <h1 class="fw-light">
                                Digital Technology
                            </h1>
                            <h1>
                                Modern Solution!
                            </h1>
                        </div>
                        <p>
                            When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                            surface
                        </p>
                        <div class="pt-4">
                            <button class="btn_secondary btn border-0 rounded-5 px-4 me-4">Try It Now</button>
                            <button class="btn_primary btn border-0 rounded-5 px-4">Explore More</button>
                        </div>
                    </div>
                    <!-- /jumbo_left -->

                    <div class="jumbo_right col-6 py-5">
                        <img class="img-fluid" src="../assets/img/header.png" alt="">
                    </div>
                    <!-- /jumbo_right -->
                </div>
            </section>
            <!-- /jumbo -->
        </div>
    </header>
    <!-- /header -->
</template>

<style lang="scss" scoped></style>