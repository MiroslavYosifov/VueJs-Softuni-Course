<template>
  <h2>HELLLO I AM ROJECTLIST PAGE</h2>
  <div>
    <ul>
      <li v-for="(project, index) of projects" 
          :key="index">
        <ProjectCard
          :projectId="project.id"
          :name="project.name"
          :description="project.description"
        />
        <button :id="project.id" @click.prevent="loadDetailPage">Details</button>
      </li>
    </ul>
  </div>
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
      projects: [
        { id: "1", name: "First", description: "FV3G43G443" },
        { id: "2", name: "Second", description: "FV3G43G443" },
        { id: "3", name: "Third", description: "FV3G43G443" },
        { id: "4", name: "Fourth", description: "FV3G43G443" }
      ],
      currentProject: {
        id: "1",
        name: "",
        description: ""
      }
    }
  },
  computed: {

  },
  methods: {
    loadDetailPage(e) {
      const projectId = e.target.id;
      this.$router.push(`/projects/${projectId}`);
    }
  },
};
</script>

<style>

</style>
