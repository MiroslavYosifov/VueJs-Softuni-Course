<template>
  <div>
    <template v-if="!isSelectedDetailProjectPage">
      <ProjectForm @on-project-submit="onProjectFormSubmit"/>
      <header>
        <h1>List Projects</h1>
      </header>
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
        <tr v-for="(project, index) of getProjects" 
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
    <router-view :on-back="onBack" @on-back="onBack"></router-view>
  </div>
</template>
<script>

import ProjectForm from '../components/project/ProjectForm.vue';
import axiosProject from '../services/project-axios';

export default {
    props: {

    },
    components: {
      ProjectForm
    },
    data() {
      return {
        projects: [],
        isSelectedDetailProjectPage: false
      }
    },
    provide() {
      return {
        projects: this.projects
      }
    },
    computed: {
      getProjects() {
        return this.projects;
      }
    },
    methods: {
        loadProjectDetailPage(e) {
            const projectId = e.currentTarget.id;
            this.isSelectedDetailProjectPage = true;
            this.$router.push(`/projects/${projectId}`);
        },
        onProjectFormSubmit(createdProject) {
            this.projects.unshift(createdProject);
        },
        onBack() {
            this.isSelectedDetailProjectPage = false
        },
        async getListedProjects() {
          try {
            const projects = await axiosProject.listProjects();
            this.projects = projects.data;
          } catch (error) {
            console.log(error);
          }
        }
    },
    async created() {
      this.getListedProjects()
    },
    mounted() {
        this.isSelectedDetailProjectPage = false;
    },
    watch: {
      $route() {
        this.getListedProjects()
      }
    }
};
</script>

<style>
.project-list-wrapper { 
    width: 100%;
    padding: 1em;
    border-collapse: collapse;
    background: rgb(250, 246, 238);
}

.project-list-wrapper tr:hover {
  cursor: pointer;
}

.project-list-wrapper tr th,
.project-list-wrapper tr td {
    border: 2px solid rgb(255, 255, 255);
    text-align: center;
    padding: 0.8em;
}

.project-list-wrapper tr:hover td {
    background: rgb(196, 204, 214);
}

.project-list-wrapper tr th {
  background:rgb(228, 223, 215);
}
</style>
