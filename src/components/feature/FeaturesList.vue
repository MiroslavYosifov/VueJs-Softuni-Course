<template>
    <div class="feature-list-container" >
        <header>
            <span><i class="fas fa-project-diagram"></i></span>
            <h2>Features</h2>
        </header>
        <section>
            <template v-if="getFeatures">
              <template v-for="feature of getFeatures">
               <div class="feature-list-wrapper" 
                    :key="feature._id">
                  <div 
                    class="feature-list"
                    @click.prevent="loadFeatureDetailPage(feature._id)">
                      <FeatureCard 
                        :featureId="feature._id"
                        :name="feature.name"
                        :date="feature.date"
                        :status="feature.status"
                        :creator="feature.creator"
                        :project="getFeatures.project"
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
    features: {
      type: Array,
      required: false
    }
  },
  components: {
    FeatureCard
  },
  computed: {
    getFeatures() {
      return this.features;
    },
  },
  methods: {
    loadFeatureDetailPage(featureId) {
      this.$router.push(`/feature/${featureId}`);
    },
  },
};
</script>

<style scoped>
.feature-list-container {
  text-align: center;
  width: 100%;
}

.feature-list-container header {
  padding: 1em;
}

.feature-list-container header span {
    display: block;
    width: 100%;
    text-align: center;
}

.feature-list-container header span i {
  font-size: 3em;
}

.feature-list {
  /* background: rgb(154, 167, 184); */
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 0.6em 0.2em;
  color: rgb(109, 125, 145);
  border-radius: 0.1em;
  margin-bottom: 0.4em;
}

.feature-list:hover {
  cursor: pointer;
  transform: scale(1.005);
}
</style>