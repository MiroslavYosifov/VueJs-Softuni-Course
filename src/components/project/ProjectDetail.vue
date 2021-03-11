<template>
  <div class="project">
  <FeatureForm 
    v-if="navigation.showFeatureForm" 
    @on-feature-submit="onFeatureFormSubmit"
  />

  <main v-if="isProjectEmpty" class="project-details wrapper">

    <nav class="project-navigation">
        <button @click.prevent="showFeatureForm">Add Feature</button>
        <button>Invite Member</button>
        <button>Edit Project</button>
        <button>Delete Project</button>
        <button @click.prevent="backToPreviusPage">Back</button>
    </nav>

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

import ProjectCard from './ProjectCard.vue';
import FeatureForm from '../feature/FeatureForm.vue';
import FeaturesListByStatus from '../feature/FeaturesListByStatus.vue';
import axiosProject from '../../services/project-axios';

export default {
  props: {

  },
  components: {
    ProjectCard,
    FeatureForm,
    FeaturesListByStatus
  },
  data() {
    return {
      project: {},
      navigation: {
        showFeatureForm: false
      }
    }
  },
  computed: {
    isFeaturesExist() {
      return this.project.features.length > 0;
    },
    isProjectEmpty () {
      return Object.keys(this.project).length > 0;
    },
    onNavigationChange() {
      return this.navigation;
    }
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
      this.navigation.showFeatureForm = !this.navigation.showFeatureForm;
      this.project.features.unshift(feature)
    },
    backToPreviusPage() {
      this.$router.replace('/projects');
    },
    showFeatureForm() {
      this.navigation.showFeatureForm = !this.navigation.showFeatureForm;
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
  width: 90%;
  margin: 0 auto;
}

.project-navigation {
    display: flex;
    width: 100%;
    padding: 0.4em;
}

.project-navigation button:first-child {
    margin-left: auto;
}

.project-navigation button {
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    background: rgb(250, 246, 238);
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}

.project-navigation button:hover {
    color: rgb(250, 246, 238);
    background: rgb(114, 138, 167);
}

/* ------------------------- */
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
