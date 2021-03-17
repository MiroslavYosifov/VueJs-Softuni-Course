<template>
    <section :class="{ success: true, hidden: isShowedSuccessModal }">
        <h3>{{isSuccessMessage}}</h3>
    </section>
</template>

<script>
export default {
    props: {
        successMessage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isHidden: true
        }
    },
    computed: {
        isShowedSuccessModal() {
           return this.isHidden;
        },
        isSuccessMessage() {
            return this.successMessage;
        }
    },
    methods: {
        showHideSuccessModal() {
            this.isHidden = !this.isHidden;
            return this.isHidden;
        }
    },
    mounted() {
        this.showHideSuccessModal();
    },
    watch: {
        isSuccessMessage() {
            console.log('isSuccessMessage');
            this.showHideSuccessModal();
        },
        isHidden() {
            console.log('watch');
            setTimeout(() => {
                if(!this.isHidden) {
                    this.showHideSuccessModal();
                }
            }, 2000)
        }
    }
};
</script>

<style scoped>

.success {
    width: 100%;
    padding: 0.2em;
    background: rgba(127, 194, 72, 0.589);
    color: white;
    border: 1px solid gray;
    border-radius: 0.2em;
    text-align: center;
}

.hidden {
    display: none;
}

</style>