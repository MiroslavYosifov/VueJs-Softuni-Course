<template>
  <div :id="projectId">
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
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    project: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    },
    issues: {
      type: Array,
      required: true
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
