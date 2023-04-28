<script>
import { state } from "../state";
import LogoElement from './LogoElement.vue';
import ItemFooter from "./ItemFooter.vue";
export default {
    name: "FooterTop",
    components: {
        LogoElement,
        ItemFooter
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
            <div class="col" v-for="item in state.footerMenuTop">
                <ItemFooter :item="item"></ItemFooter>
            </div>
            <!-- /col -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>