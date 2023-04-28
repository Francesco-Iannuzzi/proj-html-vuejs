<script>
import { state } from "../state.js";
export default {
    name: "SectionPortfolio",
    data() {
        return {
            state
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        },
        prev() {
            console.log('cliccato prev');
        },
        next() {
            console.log('cliccato next');
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

            <div class="portfolio_button d-flex align-items-end gap-3">
                <button class="prev btn border-2 rounded-circle" @click="prev"> &larr; </button>
                <button class="next btn border-2 rounded-circle" @click="next"> &rarr; </button>
            </div>
            <!-- /portfolio_button -->

        </div>
        <!-- /portfolio_top -->

        <div class="portfolio_bottom container-fluid">
            <div class="carousel row">

                <div class="wrapper col py-4" v-for="item in state.carouselItems">
                    <div class="carousel_img card border-0 rounded-5">
                        <img class="img-fluid" :src="getImageUrl(item.image)" alt="">
                    </div>
                    <div class="carousel_text card border-0 flex-row justify-content-between">
                        <h5 class="m-0">{{ item.title }}</h5>
                        <span>{{ item.description }}</span>
                    </div>
                </div>
                <!-- /col -->

            </div>
        </div>
        <!-- /portfolio_bottom -->

    </section>
</template>

<style lang="scss" scoped></style>