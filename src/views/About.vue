<template>
  <h2>HELLLO I AM ABOUT PAGE</h2>
  <button @click="confirmInput">CHANGE DATA</button>
</template>

<script>
export default {
  props: {

  },
  computed: {

  },
  methods: {
    confirmInput(e) {
      e.preventDefault();
      console.log(this.$router);
      this.$router.push('/contact');
      // this.$router.back();
      // this.$router.forward();
    }
  },
};
</script>

<style>

</style>
