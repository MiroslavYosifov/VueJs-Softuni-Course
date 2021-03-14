<template>
  <div :id="issueId">
    <section class="issue">
      <h4>Title: {{name}}</h4>
      <p>Created On: {{date}}</p>
      <p>Status: {{status}}</p>
      <p>Description: {{description}}</p>
      <p>Creator: {{creator.name}}</p>
      <p v-if="project">Project: {{project.name}}</p>
      <p v-if="feature">Feature: {{feature.name}}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    issueId: {
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
    feature: {
      type: Object,
      required: false
    },
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>
.issue {
 
}
</style>
