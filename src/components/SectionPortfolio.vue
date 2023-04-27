<script>
export default {
    name: "SectionPortfolio",
    data() {
        return {

        }
    },
    mounted() {
    }
}
</script>

<template>
    <section id="portfolio" class="portfolio py-5">
        <div class="portfolio_top container d-flex justify-content-between pb-5">
            <div class="portfolio_title">
                <h5>
                    Portfolio
                </h5>
                <div>
                    <h2>
                        <strong>Latest</strong> Work
                    </h2>
                </div>
            </div>
            <!-- /portfolio_title -->
            <div class="portfolio_button d-flex align-items-end">
                <button class="btn border-2 rounded-circle me-3"> &larr; </button>
                <button class="btn border-2 rounded-circle"> &rarr; </button>
            </div>
            <!-- /portfolio_button -->
        </div>
        <!-- /portfolio_top -->

        <div class="portfolio_bottom">
            <div class="carousel d-flex">
                <!-- to do a carousel -->
            </div>
        </div>
        <!-- /portfolio_bottom -->

    </section>
</template>

<style lang="scss" scoped></style>