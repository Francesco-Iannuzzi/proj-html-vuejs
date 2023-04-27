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

        <div class="portfolio_bottom container-fluid">
            <div class="carousel row">
                <div class="col">
                    <div class="carousel_img card border-0 rounded-5">
                        <img class="img-fluid" src="../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg"
                            alt="">
                    </div>
                    <div class="carousel_text card border-0 flex-row justify-content-between">
                        <h5 class="m-0">Basket of flower on table</h5>
                        <span>Branding Strategy</span>
                    </div>
                </div>
                <!-- /col -->
                <div class="col">
                    <div class="carousel_img card border-0 rounded-5">
                        <img class="img-fluid" src="../assets/img/DRY-1-790x576.jpg" alt="">
                    </div>
                    <div class="carousel_text card border-0 flex-row justify-content-between">
                        <h5 class="m-0">Basket of flower on table</h5>
                        <span>Branding Strategy</span>
                    </div>
                </div>
                <!-- /col -->
                <div class="col">
                    <div class="carousel_img card border-0 rounded-5">
                        <img class="img-fluid" src="../assets/img/8wa60okr-1-790x576.jpg" alt="">
                    </div>
                    <div class="carousel_text card border-0 flex-row justify-content-between">
                        <h5 class="m-0">Basket of flower on table</h5>
                        <span>Branding Strategy</span>
                    </div>
                </div>
                <!-- /col -->
                <div class="col">
                    <div class="carousel_img card border-0 rounded-5">
                        <img class="img-fluid" src="../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg"
                            alt="">
                    </div>
                    <div class="carousel_text card border-0 flex-row justify-content-between">
                        <h5 class="m-0">Basket of flower on table</h5>
                        <span>Branding Strategy</span>
                    </div>
                </div>
                <!-- /col -->

            </div>
        </div>
        <!-- /portfolio_bottom -->

    </section>
</template>

<style lang="scss" scoped></style>