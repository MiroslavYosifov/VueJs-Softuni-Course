<template>
  <main class="project-details wrapper">
  <nav class="project-details navigation">
    <button @click.prevent="backToPreviusPage">Back</button>
    <button >Add Feature</button>
  </nav>
   <header class="project-details header">
      <h2>PROJECT ADD NEW FORM FOR SALES</h2>
   </header>
   <div class="project-details content">
    <div class="project-details block-element-container info" >
      <header>
        <h3>Project information</h3>
      </header>
      <section>
        <div>
          <ProjectCard 
            :projectId="projectId"
            :name="project.name"
            :description="project.description"
            :creator="projects.creator"
            :members="projects.members"
            :features="projects.features"
            :isListPage="false"/>
        </div>
      </section>
    </div>
    <div class="project-details block-element-container suggestions" >
      <header>
        <h3>Suggestions</h3>
      </header>
      <section>  
        <div id="1" class="project-details block-element suggestions">
          <FeatureCard 
            :featureId="1"
            @click.prevent="loadFeatureDetailPage"/>
        </div>
        <div id="2" class="project-details block-element suggestions">
          <FeatureCard 
            :featureId="2"
            @click.prevent="loadFeatureDetailPage"/>
        </div>
        <div id="3" class="project-details block-element suggestions">
          <FeatureCard 
            :featureId="3"
            @click.prevent="loadFeatureDetailPage"/>
        </div>
      </section>
    </div>
    <div class="project-details block-element-container development" >
      <header>
        <h3>Development</h3>
      </header>
      <section>
        <div class="project-details block-element development">
          <FeatureCard />
        </div>
      </section>
    </div>
    <div class="project-details block-element-container testing" >
      <header>
        <h3>Testing</h3>
      </header>
      <section >
        <div class="project-details block-element testing">
          <FeatureCard />
        </div>
      </section>
    </div>
    <div class="project-details block-element-container done" >
      <header>
          <h3>Done</h3>
      </header>
      <section>
        <div class="project-details block-element done">
          <FeatureCard />
        </div>
        <div class="project-details block-element done">
          <FeatureCard />
        </div>
        <div class="project-details block-element done">
          <FeatureCard />
        </div>
      </section>
    </div>
  </div>
  </main>
</template>
<script>

import ProjectCard from './ProjectCard.vue';
import FeatureCard from '../feature/FeatureCard.vue';

export default {
  props: {

  },
  components: {
    ProjectCard,
    FeatureCard
  },
  data() {
    return {

    }
  },
  inject: ['projects'],
  computed: {

  },
  methods: {
    updatedProjectInfo() {
      const projectId = this.$route.params.projectId;
      const currentProject = this.projects.find(p => p.id === projectId);
      this.project = {...currentProject};
    },
    backToPreviusPage() {
      this.$emit('on-back')
      this.$router.back();
    },
    loadFeatureDetailPage(e) {
        const featureId = e.currentTarget.id;
        this.isSelectedDetailProjectPage = true;
        console.log(this.$route);
        this.$router.push(`/feature/${featureId}`);
    },
  },
  created() {
    this.updatedProjectInfo();
  },
  watch: {
    $route() {
      this.updatedProjectInfo();
    }
  }
};
</script>

<style>
.project-details.wrapper {
  width: 100%;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  background: rgb(245, 238, 225);
}

.project-details.header {
  width: 100%;
  text-align: center;
  padding: 2em;
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

.project-details.block-element-container.info div {
  background: white;
  padding: 0.6em;
  border-radius: 0.4em;
}

.project-details.block-element {
  background: rgb(154, 167, 184);
  padding: 0.6em 0.2em;
  color: white;
  margin-bottom: 0.4em;
  border-radius: 0.4em;
}

.project-details.block-element:hover {
  cursor: pointer;
  transform: scale(1.02);
}

</style>
