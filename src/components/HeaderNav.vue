<script>
import { state } from "../state";
import ItemHeader from "./ItemHeader.vue";
export default {
    name: "HeaderNav",
    data() {
        return {
            state
        };
    },
    components: {
        ItemHeader
    }
}
</script>

<template>
    <div class="menu_nav navbar" id="navbarSupportedContent">

        <ul class="navbar-nav me-4 mb-2 mb-lg-0 d-none d-lg-flex" v-for="item in state.headerMenu">
            <li class="nav-item">
                <!-- <a class="nav-link" :href="item.link">{{ item.title }}</a> -->
                <ItemHeader :item="item"></ItemHeader>
            </li>
        </ul>
        <!-- /menu sections -->

        <button class="btn_primary btn border-0 rounded-5 px-4">Sign In</button>
        <!-- /sign In button -->

    </div>
</template>

<style lang="scss" scoped></style>