<template>
  <div>
    
    <template v-if="authUserInfo.isAuthenticated">
      <ProjectForm @on-project-submit="onProjectFormSubmit"/>
    </template>

    <template v-if="successMessage">
      <SuccessModal 
        :successMessage="successMessage"/>
    </template>
    <Search 
      :dataForFiltering="projects"
      :keyForFiltering="'name'"
      @on-search="onSearch"
    />
    <header>
       <h1>List Projects</h1>
    </header>
    <ProjectTable 
      :projects="getFilteredProjects" 
      @on-sort-tabel="onSortTable"/>
  </div>
</template>
<script>

import SuccessModal from '../components/UI/SuccessModal.vue'
import Search from '../components/UI/Search.vue';

import ProjectForm from '../components/project/ProjectForm.vue';
import ProjectTable from '../components/project/ProjectTable.vue';

import axiosProject from '../services/project-axios';

export default {
    props: {

    },
    components: {
      SuccessModal,
      Search,
      ProjectForm,
      ProjectTable
    },
    data() {
      return {
        projects: [],
        filteredProjects: [],
        successMessage: ''
      }
    },
    computed: {
      authUserInfo() {
        return this.$store.getters.authUserInfo;
      },
      getFilteredProjects() {
        return this.filteredProjects;
      },
      checkIfSelectedDetailProjectPage() {
        return this.isSelectedDetailProjectPage
      }
    },
    methods: {
      onProjectFormSubmit(resProject) {
          this.projects.unshift(resProject.project);
          this.successMessage = resProject.successMessage;
      },
      onSearch(filteredProjects) {
        this.filteredProjects = filteredProjects;
      },
      onSortTable(criterion) {
        if(!criterion) return;

        this.filteredProjects.sort((a, b) => {
            if (a[criterion] > b[criterion]) return -1
            return a[criterion] < b[criterion] ? 1 : 0
          });
      },
      async getListedProjects() {
        
        if(this.$route.path === "/projects") {
          this.isSelectedDetailProjectPage = false;
        } 
        else {
          this.isSelectedDetailProjectPage = true; 
        }

        try {
          const projects = await axiosProject.listProjects();
          this.projects = projects.data;
          this.filteredProjects = JSON.parse(JSON.stringify(this.projects));
        } 
        catch (error) {
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
