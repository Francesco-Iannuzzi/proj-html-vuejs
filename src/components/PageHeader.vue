<script>
export default {
    name: "PageHeader",
    data() {
        return {

        }
    },
    mounted() {
    }
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand">
                <div class="container">
                    <div class="logo">
                        <a class="navbar-brand d-flex" href="#">
                            <img src=".././assets/img/cropped-cropped-icon-270x270.png" alt="Phlox_Corporate_logo"
                                width="40" height="40">
                            <div class="ms-2">
                                <h4 class="my-0">Phlox</h4>
                                <h4 class="my-0">Corporate</h4>
                            </div>
                        </a>
                    </div>
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