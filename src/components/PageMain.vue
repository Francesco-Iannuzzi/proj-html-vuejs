<script>
import SectionService from './SectionService.vue';
import SectionStart from './SectionStart.vue';
import SectionPortfolio from './SectionPortfolio.vue';
import SectionPrice from './SectionPrice.vue';
import SectionBlog from './SectionBlog.vue';
export default {
    name: "PageMain",
    components: {
        SectionService,
        SectionStart,
        SectionPortfolio,
        SectionPrice,
        SectionBlog,
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
        <SectionBlog></SectionBlog>
        <!-- /blog -->
        <section class="testimonial py-5">
            <div class="container">
                <div class="testimonial_title text-center">
                    <h5>
                        Testimonials
                    </h5>
                    <div class="d-flex justify-content-center">
                        <h2>
                            <strong>What</strong> People Say
                        </h2>
                    </div>
                    <p>
                        When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                        surface.
                    </p>
                </div>
                <!-- /testimonial_title -->
                <div class="testimonial_staff row">
                    <div class="col">
                        <div class="card border-0 text-center">
                            <div class="container">
                                <img class="img-fluid w-25" src="../assets/img/szabo-viktor-1266895-unsplash-1024x1024.png"
                                    alt="">
                            </div>
                            <span class="star py-5"> &starf; &starf; &starf; &star; &star; </span>
                            <p>
                                When, while the lovely valley teems with vapour around meand the meridian sun strikes the
                                upper impenetrable foliage of my trees, and but thousand.
                            </p>
                            <h5 class="pt-3">
                                <strong>Michkel Anegl</strong>
                            </h5>
                            <span>Marketing Management</span>
                            <div class="cit_bg">
                                <h1>"</h1>
                            </div>
                        </div>
                    </div>
                    <!-- /col -->
                    <div class="col">
                        <div class="card border-0 text-center">
                            <div class="container">
                                <img class="img-fluid w-25"
                                    src="../assets/img/philipe-cavalcante-539505-unsplash-1024x1024.png" alt="">
                            </div>
                            <span class="star py-5"> &starf; &starf; &starf; &star; &star; </span>
                            <p>
                                When, while the lovely valley teems with vapour around meand the meridian sun strikes the
                                upper impenetrable foliage of my trees, and but thousand.
                            </p>
                            <h5 class="pt-3">
                                <strong>Michkel Anegl</strong>
                            </h5>
                            <span>Marketing Management</span>
                            <div class="cit_bg">
                                <h1>"</h1>
                            </div>
                        </div>
                    </div>
                    <!-- /col -->
                    <div class="col">
                        <div class="card border-0 text-center">
                            <div class="container">
                                <img class="img-fluid w-25" src="../assets/img/fabio-spinelli-695744-unsplash-1024x1024.png"
                                    alt="">
                            </div>
                            <span class="star py-5"> &starf; &starf; &starf; &star; &star; </span>
                            <p>
                                When, while the lovely valley teems with vapour around meand the meridian sun strikes the
                                upper impenetrable foliage of my trees, and but thousand.
                            </p>
                            <h5 class="pt-3">
                                <strong>Michkel Anegl</strong>
                            </h5>
                            <span>Marketing Management</span>
                            <div class="cit_bg">
                                <h1>"</h1>
                            </div>
                        </div>
                    </div>
                    <!-- /col -->
                </div>
            </div>
        </section>
        <!-- /testimonial -->

    </main>
    <!-- /main -->
</template>

<style lang="scss" scoped></style>