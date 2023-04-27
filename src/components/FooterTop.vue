<script>
import { state } from "../state";
import LogoElement from './LogoElement.vue';
export default {
    name: "FooterTop",
    components: {
        LogoElement
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="footer_top container">
        <div class="row gap-5">
            <div class="col">
                <LogoElement class="pb-4"></LogoElement>
                <p>
                    When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable
                </p>
            </div>
            <!-- /col -->
            <div class="col" v-for="menu in state.footerMenuTop">
                <h4>{{ menu.title }}</h4>
                <ul v-for="item in menu.subtitle">
                    <li v-if="item.link"><a :href="item.link">{{ item.item }}</a></li>
                    <li v-else-if="item.info"><span>{{ item.item }}</span> {{ item.info }}</li>
                </ul>
            </div>
            <!-- /col -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>