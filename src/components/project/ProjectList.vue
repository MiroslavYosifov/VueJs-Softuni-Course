<template>
    <table class="project-list-wrapper">
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Created On</th>
          <th>Last Updated</th>
          <th>Creator</th>
          <th>Members</th>
          <th>Features</th>
        </tr>
        <tr v-for="(project, index) of projects" 
            :key="index"
            :id="project._id" 
            @click.prevent="loadProjectDetailPage">  
          <td>{{project._id}}</td>
          <td>{{project.name}}</td>
          <td>{{project.date}}</td>
          <td>{{project.date}}</td>
          <td>{{project.creator.name}}</td>
          <td>{{project.members.length}}</td>
          <td>{{project.features.length}}</td>
        </tr>
      </table>
</template>

<script>
export default {
  props: {
    projects: {
        type: Array,
        required: true,
    }
  },
  data() {
      return {
          
      }
  },
  computed: {
   
  },
  methods: {
    loadProjectDetailPage(e) {
        const projectId = e.currentTarget.id;
        this.isSelectedDetailProjectPage = true;
        this.$router.push(`/projects/${projectId}`);
    },
  },
};
</script>

<style>

</style>
