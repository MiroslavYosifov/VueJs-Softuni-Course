<template>
  <div :id="featureId">
        <section>
          <h4>Feature: {{name}}</h4>
          <p>Status: {{status}}</p>
          <p>Created on: 01.11.2021</p>
          <p>Creator: {{creator.name}}</p>
          <p>Suggestions: {{suggestions.length}}</p>
          <p>Issues: {{issues.length}}</p>
          <p v-if="description">Description: {{description}}</p>
  
        </section>
        <!-- <nav>
          <button v-if="!status">Suggestions</button>
          <button v-if="!status">Issues</button>
        </nav> -->
  </div>
</template>
<script>

export default {
  props: {
    featureId: {
      type: String,
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
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    creator: {
      type: Object,
      required: false,
    },
    project: {
      type: Object,
      required: false
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
