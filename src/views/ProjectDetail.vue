<template>
  <h2>HELLLO I AM Project details PAGE</h2>
  <ProjectCard 
    :projectId="projectId"
    :name="project.name"
    :description="project.description"/>
</template>
<script>

import ProjectCard from '../components/project/ProjectCard.vue';

export default {
  props: {

  },
  components: {
    ProjectCard
  },
  data() {
    return {
      project: {
        projectId: "",
        name: "",
        description: ""
      }
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    // AJAX Request
    console.log(this.$route.params);
    setTimeout(() => {
      this.project = { projectId: "4", name: "MIRO", description: "f43g43" };
    }, 2000)
  },
};
</script>

<style>

</style>
