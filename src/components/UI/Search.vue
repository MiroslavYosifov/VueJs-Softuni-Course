<template>
    <div class="search-wrapper">
       <form @submit.prevent="onSubmit">
            <div class="search">
                <label for="search"><i class="fas fa-search"></i></label>
                <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Searching..."
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
        },
        onSubmit() {
            //TO DO FETCH TO GET DATA WITH SEARCH PARAMS
            console.log('tuk sym');
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
.search-wrapper {
    width: 100%;
}

.search-wrapper form {

}

.search-wrapper form .search {
    display: flex;
}

.search-wrapper form .search label {
    background: rgb(150, 150, 150);
    display: flex;
    align-items: center;
    padding: 0.4em 0.6em;
    margin-left: auto;
    border-bottom-left-radius: 0.1em;
    border-top-left-radius: 0.1em;
}

.search-wrapper form .search label i {
    font-size: 2.8em;
    display: block;
    color: white;
}

.search-wrapper form .search input {
    width: 20em;
    margin-right: auto;
    padding: 0.2em 0.6em;
    border: 1px solid rgb(150, 150, 150);
    border-left: none;
    border-bottom-right-radius: 0.1em;
    border-top-right-radius: 0.1em;
}

.search-wrapper form .search input:focus {
    outline: none;
    background-color: rgb(220, 231, 240);
}

</style>