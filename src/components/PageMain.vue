<script>
import SectionService from './SectionService.vue';
import SectionStart from './SectionStart.vue';
import SectionPortfolio from './SectionPortfolio.vue';
import SectionPrice from './SectionPrice.vue'
export default {
    name: "PageMain",
    components: {
        SectionService,
        SectionStart,
        SectionPortfolio,
        SectionPrice
    },
    data() {
        return {

        }
    },
    mounted() {
    }
}
</script>

<template>
    <main>
        <SectionService></SectionService>
        <!-- /our_services -->
        <SectionStart></SectionStart>
        <!-- /start_project -->
        <SectionPortfolio></SectionPortfolio>
        <!-- /portfolio -->
        <SectionPrice></SectionPrice>
        <!-- /price_list -->
    </main>
    <!-- /main -->
</template>

<style lang="scss" scoped></style>