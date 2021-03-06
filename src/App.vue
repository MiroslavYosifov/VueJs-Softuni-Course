<template>
<Header/>
<main class="container">
  <!-- <header>
    <h1>APP VUE COMPONENT</h1>
  </header> -->
  <router-view></router-view>
</main>
<Footer/>
</template>
<script>

import Header from './components/core/TheHeader.vue';
import Footer from './components/core/TheFooter.vue';

export default {
    name: "App",
    components: {
      Header,
      Footer
    },
    data() {
      return {
    
      }
    },
    validations: {

    },
    computed: {

    },
    methods: {

    },
    mounted() {

    },
}

</script>

<style>
body {
  padding: 2em;
}
</style>