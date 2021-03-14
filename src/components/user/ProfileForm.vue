<template>
  <div :id="suggestionId">
    <section>
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
    userId: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
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
