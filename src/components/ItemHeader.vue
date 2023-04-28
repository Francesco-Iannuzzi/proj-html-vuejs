<script>
export default {
    name: 'ItemHeader',
    props: {
        item: Object,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <a class="nav-link" :href="item.link">{{ item.title }}</a>
</template>


<style lang="scss" scoped></style>