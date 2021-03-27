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

    <div class="btn-load-more-container">
      <button @click="onProjectLoadMore" class="btn-load-more">Load more</button>
    </div>
    
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
        successMessage: '',
        countLoadMoreButtonClicks: 1,
      }
    },
    computed: {
      authUserInfo() {
        return this.$store.getters.authUserInfo;
      },
      getFilteredProjects() {
        return this.filteredProjects;
      }
    },
    methods: {
      onProjectFormSubmit(resProject) {
          this.projects.unshift(resProject.project);
          this.filteredProjects.unshift(resProject.project);
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
      
        try {
          const queryParams = `?countClicks=${this.countLoadMoreButtonClicks}`;
          const projects = await axiosProject.listProjects(queryParams);
          this.projects = projects.data;
          this.filteredProjects = JSON.parse(JSON.stringify(this.projects));
        } 
        catch (error) {
          console.log(error);
        }
      },
      onProjectLoadMore() {
         this.countLoadMoreButtonClicks++;
        const queryParams = `?countClicks=${this.countLoadMoreButtonClicks}`;
        this.getListedProjects(queryParams);
      },
    },
    async created() {
      const queryParams = `?countClicks=${this.countLoadMoreButtonClicks}`;
      this.getListedProjects(queryParams)
    },
    watch: {
      $route() {
        const queryParams = `?countClicks=${this.countLoadMoreButtonClicks}`;
        this.getListedProjects(queryParams)
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

.btn-load-more-container {
  width: 100%;
}

.btn-load-more {
  display: block;
  font-size: 24px;
  width: 20em;
  padding: 0.2em;
  margin: 2em auto;
  cursor: pointer;
  background: white;
  color: gray;
  border-radius: 0.3em;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 4px 1px rgba(153, 153, 153, 0.678);
}
</style>
