<script>
export default {
    name: 'ItemFooter',
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
    <h4>{{ item.title }}</h4>
    <ul v-for="item in item.subtitle">
        <li v-if="item.link"><a :href="item.link">{{ item.item }}</a></li>
        <li v-else-if="item.info"><span>{{ item.item }}</span> {{ item.info }}</li>
    </ul>
</template>


<style lang="scss" scoped></style>