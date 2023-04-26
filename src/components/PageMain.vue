<script>
import SectionService from './SectionService.vue';
import SectionStart from './SectionStart.vue'
export default {
    name: "PageMain",
    components: {
        SectionService,
        SectionStart
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
    </main>
    <!-- /main -->
</template>

<style lang="scss" scoped></style>