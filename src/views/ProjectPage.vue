<template>
  <div>
    <ProjectForm/>
    <ul class="project-list-wrapper" v-if="!isSelectedDetailProjectPage">
      <li 
          v-for="(project, index) of projects" 
          :key="index"
          :id="project.id" 
          @click.prevent="loadProjectDetailPage">
          <ProjectCard
              :projectId="project.id"
              :name="project.name"
              :creator="project.creator"
              :members="project.members"
              :features="project.features"
              :isListPage="true"
          />
      </li>
    </ul>   
    <router-view :on-back="onBack" @on-back="onBack"></router-view>
  </div>
</template>
<script>

import ProjectCard from '../components/project/ProjectCard.vue';
import ProjectForm from '../components/project/ProjectForm.vue';

export default {
    props: {

    },
    components: {
      ProjectCard,
      ProjectForm
    },
    data() {
      return {
        projects: [
          { id: "1", name: "First", description: "have come across a weird issue with one of our drawings. we have noticed over the last few days random letters are being replaced in our MTEXT boxes. The dwg preview box shows the last save state as correct, but as soon as the drawing is opened (on any hardware in our office) the lhave come across a weird issue with one of our drawings. we have noticed over the last few days random letters are being replaced in our MTEXT boxes. The dwg preview box shows the last save state as correct, but as soon as the drawing is opened (on any hardware in our office) the letters show up as being replacehave come across a weird issue with one of our drawings. we have noticed over the last few days random letters are being replaced in our MTEXT boxes. The dwg preview box shows the last save state as correct, but as soon as the drawing is opened (on any hardware in our office) the letters show up as being replaceetters show up as being replace", creator: 'IVAN', members: [], features: [] },
          { id: "2", name: "Second", description: "FV3G43G443", creator: 'IVAN',  members: [], features: [] },
          { id: "3", name: "Third", description: "have come across a weird issue with one of our drawings. we have noticed over the last few days random letters are being replaced in our MTEXT boxes. The dwg preview box shows the last save state as correct, but as soon as the drawing is opened (on any hardware in our office) the letters show up as being replace", creator: 'IVAN', members: [], features: [] },
          { id: "4", name: "Fourth", description: "FV3G43G443", creator: 'IVAN', members: [], features: [] }
        ],
        isSelectedDetailProjectPage: false
      }
    },
    provide() {
      return {
        projects: this.projects
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
        onBack() {
            this.isSelectedDetailProjectPage = false
        }
    },
    mounted() {
        this.isSelectedDetailProjectPage = false;
    },
    watch: {
       
    }
};
</script>

<style>
.project-list-wrapper {
    background: rgb(236, 229, 216);
}
</style>