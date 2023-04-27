<script>
export default {
    name: "FooterBottom",
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="footer_bottom container d-flex justify-content-between">
        <div class="copyright">
            <span> &copy; 2023 Phlox All Rights Reserved</span>
        </div>
        <div class="social me-5">
            <ul class=" list-unstyled d-flex gap-4">
                <li>
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </li>
                <li>
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </li>
                <li>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </li>
                <li>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </li>
            </ul>
        </div>
        <button class="upstairs btn rounded-circle"> &uarr; </button>
        <button class="questions btn rounded-circle">
            <font-awesome-icon icon="fa-regular fa-comment" />
        </button>
    </div>
</template>

<style lang="scss" scoped></style>