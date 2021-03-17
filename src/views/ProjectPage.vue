<template>
  <div>
    
    <template v-if="authUserInfo.isAuthenticated">
        <ProjectForm @on-project-submit="onProjectFormSubmit"/>
    </template>

    <template v-if="successMessage">
        <SuccessModal 
          :successMessage="successMessage"/>
    </template>

    <header>
       <h1>List Projects</h1>
    </header>
    <ProjectList 
      :projects="getProjects" />
  </div>
</template>
<script>

import SuccessModal from '../components/UI/SuccessModal.vue'

import ProjectForm from '../components/project/ProjectForm.vue';
import ProjectList from '../components/project/ProjectList.vue';

import axiosProject from '../services/project-axios';

export default {
    props: {

    },
    components: {
      SuccessModal,
      ProjectForm,
      ProjectList
    },
    data() {
      return {
        projects: [],
        successMessage: ''
      }
    },
    computed: {
      authUserInfo() {
        return this.$store.getters.authUserInfo;
      },
      getProjects() {
        return this.projects;
      },
      checkIfSelectedDetailProjectPage() {
        return this.isSelectedDetailProjectPage
      }
    },
    methods: {
        onProjectFormSubmit(createdProject) {
            this.projects.unshift(createdProject);
            this.successMessage = `Your ${createdProject.name} was added successfully to your pojects list!`;
        },
        async getListedProjects() {
          
          if(this.$route.path === "/projects") {
            this.isSelectedDetailProjectPage = false;
          } else {
            this.isSelectedDetailProjectPage = true;
          }

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
