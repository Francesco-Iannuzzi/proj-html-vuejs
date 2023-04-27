<script>
import HeaderNav from './HeaderNav.vue';
import LogoElement from './LogoElement.vue';
import SectionJumbo from './SectionJumbo.vue';

export default {
    name: "PageHeader",
    components: {
        LogoElement,
        HeaderNav,
        SectionJumbo
    },
    data() {
        return {

        };
    }
}
</script>

<template>
    <header id="site_header">
        <div class="container">
            <nav class="navbar navbar-expand">
                <div class="container">
                    <LogoElement></LogoElement>
                    <!-- /logo -->
                    <HeaderNav></HeaderNav>
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