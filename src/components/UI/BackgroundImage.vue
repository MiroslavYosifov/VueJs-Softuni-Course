<template>
    <section class="background-media">
        <img :src="imagePath" alt="">
    </section>
</template>

<script>

export default {
    props: {
        imagePath: {
            type: String,
            required: true
        }
    },
    components: {

    },
    computed: {

    },
    methods: {

    },
};
</script>

<style scoped>

.background-media {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.background-media::before {
    display: block;
    content: '';
    padding-top: 50%;
}

.background-media img {
    padding: 1em;
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}

</style>