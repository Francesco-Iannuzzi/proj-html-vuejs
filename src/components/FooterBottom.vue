<script>
import { state } from "../state";
export default {
    name: "FooterBottom",
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="footer_bottom container d-flex justify-content-between">
        <div class="copyright">
            <span v-for="item in state.footerMenuBottom"> {{ item.copy }}</span>
        </div>
        <div class="social me-5">
            <ul class=" list-unstyled d-flex gap-4">
                <li v-for="item in state.footerMenuBottom">
                    <a v-if="item.icon" :href="item.link"><font-awesome-icon :icon="item.icon" /></a>
                </li>
            </ul>
        </div>
        <button class="upstairs btn rounded-circle">
            <a href="#site_header"> &uarr; </a>
        </button>
        <button class="questions btn rounded-circle">
            <font-awesome-icon icon="fa-regular fa-comment" />
        </button>
    </div>
</template>

<style lang="scss" scoped></style>