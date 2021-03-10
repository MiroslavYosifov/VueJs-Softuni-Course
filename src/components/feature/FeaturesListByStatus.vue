<template>
 <div class="feature-container">
     <div class="feature-element-container suggestions" >
      <header>
        <span><i class="fas fa-lightbulb"></i></span>
        <h3>Suggestions</h3>
      </header>
      <section>
        <template v-if="getFeaturesByStatus('suggestion')">
          <template v-for="feature of project.features">
           <div 
              id="1"
              :key="feature._id"
              v-if="feature.status === 'suggestion'"
              class="feature-element suggestions"
              @click.prevent="loadFeatureDetailPage(feature._id)">
                <FeatureCard 
                  :featureId="feature._id"
                  :name="feature.name"
                  :date="feature.date"
                  :description="feature.description"
                  :status="feature.status"
                  :creator="feature.creator"
                  :project="project"
                  :suggestions="feature.suggestions"
                  :issues="feature.issues"
              />
            </div>
          </template>
        </template>
        <template  v-else>
          <h3>No Features</h3>
        </template>
      </section>
    </div>
    <div class="feature-element-container development" >
      <header>
        <span><i class="fas fa-cogs"></i></span>
        <h3>Development</h3>
      </header>
      <section>
        <template v-if="getFeaturesByStatus('development')">
          <template v-for="feature of project.features">
           <div 
              id="1"
              :key="feature._id"
              v-if="feature.status === 'development'"
              class="feature-element development"
              @click.prevent="loadFeatureDetailPage(feature._id)">
                <FeatureCard 
                  :featureId="feature._id"
                  :name="feature.name"
                  :date="feature.date"
                  :description="feature.description"
                  :status="feature.status"
                  :creator="feature.creator"
                  :project="project"
                  :suggestions="feature.suggestions"
                  :issues="feature.issues"
              />
            </div>
          </template>
        </template>
        <template  v-else>
          <h3>No Features</h3>
        </template>
      </section>
    </div>
    <div class="feature-element-container testing" >
      <header>
        <span><i class="fas fa-bug"></i></span>
        <h3>Testing</h3>
      </header>
      <section>
        <template v-if="getFeaturesByStatus('testing')">
          <template v-for="feature of project.features">
           <div 
              id="1"
              :key="feature._id"
              v-if="feature.status === 'testing'"
              class="feature-element testing"
              @click.prevent="loadFeatureDetailPage(feature._id)">
                <FeatureCard 
                  :featureId="feature._id"
                  :name="feature.name"
                  :date="feature.date"
                  :description="feature.description"
                  :status="feature.status"
                  :creator="feature.creator"
                  :project="project"
                  :suggestions="feature.suggestions"
                  :issues="feature.issues"
              />
            </div>
          </template>
        </template>
        <template  v-else>
          <h3>No Features</h3>
        </template>
      </section>
    </div>
    <div class="feature-element-container done" >
      <header>
          <span><i class="fas fa-check-circle"></i></span>
          <h3>Done</h3>
      </header>
        <section>
        <template v-if="getFeaturesByStatus('done')">
          <template v-for="feature of project.features">
           <div 
              id="1"
              :key="feature._id"
              v-if="feature.status === 'done'"
              class="feature-element done"
              @click.prevent="loadFeatureDetailPage(feature._id)">
                <FeatureCard 
                  :featureId="feature._id"
                  :name="feature.name"
                  :date="feature.date"
                  :status="feature.status"
                  :creator="feature.creator"
                  :project="project"
                  :suggestions="feature.suggestions"
                  :issues="feature.issues"
              />
            </div>
          </template>
        </template>
        <template  v-else>
          <h3>No Features</h3>
        </template>
      </section>
    </div>
 </div>
</template>

<script>

import FeatureCard from './FeatureCard.vue';

export default {
  props: {
    project: {
      type: Object,
      required: false
    }
  },
  components: {
    FeatureCard
  },
  computed: {
    
  },
  methods: {
    getFeaturesByStatus(status) {
      const features = this.project.features.some(f => f.status === status);
      return features;
    },
    loadFeatureDetailPage(featureId) {
      this.$router.push(`/feature/${featureId}`);
    },
  },
};
</script>

<style>
.feature-container {
  width: 100%;
  display: flex;
}

.feature-element-container {
  text-align: center;
  width: 25%;
  padding: 0.4em;
}

.feature-element-container header {
  padding: 1em;
}

.feature-element-container header span {
    display: block;
    width: 100%;
    margin-bottom: 1em;
    text-align: center;
}

.feature-element-container header span i {
  font-size: 3em;
}

.feature-element-container section {

}

.feature-element {
  /* background: rgb(154, 167, 184); */
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 0.6em 0.2em;
  color: rgb(109, 125, 145);
  margin-bottom: 0.4em;
  border-radius: 0.1em;
}

.feature-element:hover {
  cursor: pointer;
  transform: scale(1.005);
}
</style>


