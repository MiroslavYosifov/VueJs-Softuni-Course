<template>
    <div class="search-wrapper">
       <form @submit.prevent="onSubmit">
            <div class="input">
              <label for="name">Name</label>
              <input
                    type="text"
                    id="search"
                    name="search"
                    v-model="search">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        dataForFiltering: {
            type: Array,
            required: true
        },
        keyForFiltering: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        
    },
    methods: {
        filteredList() {
            const filteredData = this.dataForFiltering.filter(el => {
                if(el[this.keyForFiltering].toLowerCase().includes(this.search.toLowerCase())) {
                    return el;
                }
            });
            console.log(filteredData);
            this.$emit('on-search', filteredData);
        }
    },
    mounted() {

    },
    watch: {
        search() {
            this.filteredList();
        }
    }
};
</script>

<style scoped>

</style>