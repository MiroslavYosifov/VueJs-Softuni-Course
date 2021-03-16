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
   
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

</style>
