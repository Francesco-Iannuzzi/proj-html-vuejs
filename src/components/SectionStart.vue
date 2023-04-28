<script>
import nemoodar from '../assets/img/nemoodar.png'
export default {
    name: "SectionStart",
    data() {
        return {
            nemoodar
        }
    }
}
</script>

<template>
    <section class="start_project py-5">
        <div class="container">
            <div class="row justify-content-between pb-5">

                <div class="start_project_left col-lg-5 py-5" :style="{ backgroundImage: `url(${nemoodar})` }">
                    <img class="img-fluid" src="../assets/img/men-data.png" alt="">
                </div>
                <!-- /start_project_left -->

                <div class="start_project_right col-lg-6">
                    <div class="star_project_title pb-4">
                        <h5 class="fw-light">Start Your Project</h5>
                        <h1>
                            Grow Your Business
                        </h1>
                        <h1 class="fw-light">
                            With Our Strategy
                        </h1>
                    </div>
                    <!-- /star_project_title -->
                    <p>
                        When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                        surface of th irripenetrable foliage of my trees, and but a few stray gleams steal into the
                        inner sanctuary
                    </p>
                    <!-- descriptyon -->
                    <div class="pt-4">
                        <button class="btn_secondary btn border-0 rounded-5 px-4 me-4">Try It Now</button>
                        <button class="btn_primary btn border-0 rounded-5 px-4">Explore More</button>
                    </div>
                    <!-- /button -->
                </div>
                <!-- /start_project_right -->

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>