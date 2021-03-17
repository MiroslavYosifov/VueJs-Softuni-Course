<template>
<div class="feature-element-container" >
    <header> 
        <span><i :class="[iconClass]"></i></span>
        <h3>{{status}}</h3>
    </header>
    <section>
        <template v-if="getFeaturesByStatus(status)">
          <template v-for="feature of project.features">
           <div class="feature-element-wrapper" 
                :key="feature._id"
                v-if="feature.status === status">
              <div class="ropes"></div>
              <div 
                class="feature-element"
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
           </div>
          </template>
        </template>
        <template  v-else>
          <h3>No Features</h3>
        </template>
    </section>
</div>
</template>

<script>

import FeatureCard from './FeatureCard.vue';

export default {
  props: {
    project: {
      type: Object,
      required: false
    },
    status: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      require: false
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
.feature-element-container {
  text-align: center;
  width: 25%;
  padding: 0.8em;
}

.feature-element-container header {
  padding: 1em;
  border-bottom: 2px solid rgb(172, 183, 197);
  margin-bottom: 0.1em;
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

.feature-element {
  /* background: rgb(154, 167, 184); */
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 0.6em 0.2em;
  color: rgb(109, 125, 145);
  border-radius: 0.1em;
}

.ropes {
  margin: 0 auto;
  width: 60%;
  height: 2em;
  border-left: 3px dotted rgb(172, 183, 197);
  border-right: 3px dotted rgb(172, 183, 197);
}

.feature-element:hover {
  cursor: pointer;
  transform: scale(1.005);
}
</style>