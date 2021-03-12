<template>
  <div class="project">
    
  <div class="feature-form-wrapper" 
      v-if="isShowedFeatureAddForm">
     <FeatureForm 
      @on-feature-submit="onFeatureFormSubmit"
    />
  </div>
 
  <main v-if="isProjectEmpty" class="project-details wrapper">
    <ProjectNavigation
       :projectId="project._id"
     />
    <header class="project-details header">
       <h1>Project name: {{project.name.toUpperCase()}}</h1>
    </header>
    <div class="project-details content">
     <div class="project-details block-element-container info" >
       <header>
         <span><i class="fas fa-info-circle"></i></span>
         <h3>Project information</h3>
       </header>
       <section>
         <div>
           <ProjectCard 
             :projectId="project._id"
             :date="project.date"
             :description="project.description"
             :creator="project.creator.name"
             :members="project.members.length"
             :features="project.features.length"
             :isListPage="false"/>
         </div>
       </section>
     </div>
         <FeaturesListByStatus
            :project="project"
          />
    </div>
  </main>
  </div>
 
</template>

<script>

import ProjectNavigation from '../components/project/ProjectNavigation.vue';
import ProjectCard from '../components/project/ProjectCard.vue';
import FeatureForm from '../components/feature/FeatureForm.vue';
import FeaturesListByStatus from '../components/feature/FeaturesListByStatus.vue';
import axiosProject from '../services/project-axios';

export default {
  props: {

  },
  components: {
    ProjectNavigation,
    ProjectCard,
    FeatureForm,
    FeaturesListByStatus
  },
  data() {
    return {
      project: {},
    }
  },
  computed: {
    isFeaturesExist() {
      return this.project.features.length > 0;
    },
    isProjectEmpty () {
      return Object.keys(this.project).length > 0;
    },
    isShowedFeatureAddForm () {
      return this.$store.getters.featureInfo.isShowedFeatureAddForm;
    },
  },
  methods: {
    async getProject() {
      try {
        const projectId = this.$route.params.projectId;
        const project = await axiosProject.getProject(projectId);
        this.project = {...project.data};
      } catch (error) {
        console.log(error);
      }
    },
    onFeatureFormSubmit(feature) {
      this.project.features.unshift(feature)
    }
  },
  created() {
    this.getProject();
  },
  watch: {
    $route() {
      this.getProject();
    }
  }
};
</script>

<style>

.project {
  width: 100%;
  margin: 0 auto;
}

.feature-form-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background:rgba(0, 0, 0, 0.1);
  top: 0; left: 0;
}

.project-details.wrapper {
  width: 100%;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  background: rgb(250, 246, 238);
}

.project-details.header {
  width: 100%;
  padding: 2em 0;
  margin-bottom: 2em;
  text-align: center;
}

.project-details.header h1 {
  font-weight: bold;
  font-size: 3em;
}

.project-details footer {
  width: 100%;
}

.project-details.content {
  width: 100%;
  display: flex;
}

.project-details.block-element-container {
  text-align: center;
  width: 20%;
  padding: 0.4em;
}

.project-details.block-element-container header {
  padding: 1em;
}

.project-details.block-element-container section {

}

.project-details.block-element-container.info header {
  text-align: left;
}

.project-details.block-element-container.info header span {
  display: block;
  width: 100%;
  margin-bottom: 1em;
  text-align: center;
}

.project-details.block-element-container.info header span i {
  font-size: 3em;
}

.project-details.block-element-container.info div {
  /* background: white; */
  padding: 0 0.6em;
  border-radius: 0.4em;
  text-align: left;
}

.project-details.block-element {
  /* background: rgb(154, 167, 184); */
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 0.6em 0.2em;
  color: rgb(109, 125, 145);
  margin-bottom: 0.4em;
  border-radius: 0.1em;
}

.project-details.block-element:hover {
  cursor: pointer;
  transform: scale(1.005);
}

</style>
