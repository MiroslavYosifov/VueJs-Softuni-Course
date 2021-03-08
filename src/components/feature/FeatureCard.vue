<template>
  <div :id="featureId">
        <section>
          <h4>Feature name: My FeatureCard</h4>
          <p v-if="!status">Description: The goal in this feature is fgreg5rg45gh54hg54h54h54 g54gh54hg h54h54hg54hg54 h54h54</p>
          <p v-if="!status">Status: Researching</p>
          <p>Suggestions: 7</p>
          <p>Issues count: 5</p>
          <p v-if="!status">Creator: Pesho</p>
          <p>DATE: 01.11.2021</p>
        </section>
        <nav>
          <button v-if="!status">Suggestions</button>
          <button v-if="!status">Issues</button>
        </nav>
  </div>
</template>

<script>

export default {
  props: {
    featureId: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    creator: {
      type: String,
      required: false,
    },
    project: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: false,
    },
    issues: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      status: true,
    }
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

</style>
