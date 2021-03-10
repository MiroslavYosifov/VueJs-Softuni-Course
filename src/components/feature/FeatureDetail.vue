<template>
<div>
  <div>
    <IssueForm @on-issue-submit="onIssueFormSubmit"/>
  </div>
  <div>
    <SuggestionForm @on-suggestion-submit="onSuggestionFormSubmit"/>
  </div>
  <div v-if="isFeatureEmpty" class="feature-wrapper">
    <FeatureCard 
      :featureId="feature._id"
      :name="feature.name"
      :date="feature.date"
      :description="feature.description"
      :status="feature.status"
      :creator="feature.creator"
      :project="feature.project"
      :suggestions="feature.suggestions"
      :issues="feature.issues"/>
  </div>
  <div class="issues-wrapper">
      <div v-for="issue of feature.issues" :key="issue._id">
        <IssueCard
          :issueId="issue._id"
          :name="issue.name"
          :date="issue.date"
          :description="issue.description"
          :status="issue.status"
          :creator="issue.creator"
          :project="issue.project"
          :feature="issue.feature"
        />
      </div>
  </div>
  <div class="suggestions-wrapper">
    <div v-for="issue of feature.suggestions" :key="issue._id">
        <SuggestionCard
          :issueId="issue._id"
          :name="issue.name"
          :date="issue.date"
          :description="issue.description"
          :status="issue.status"
          :creator="issue.creator"
          :project="issue.project"
          :feature="issue.feature"
        />
    </div>
  </div>
</div>
</template>

<script>

import FeatureCard from './FeatureCard.vue';
import IssueCard from '../issue/IssueCard.vue';
import IssueForm from '../issue/IssueForm.vue';
import SuggestionCard from '../suggestion/SuggestionCard.vue';
import SuggestionForm from '../suggestion/SuggestionForm.vue';

import featureAxios from '../../services/feature-axios';

export default {
  props: {

  },
  data() {
    return {
      feature: {},
    }
  },
  components: {
    FeatureCard,
    IssueForm,
    SuggestionCard,
    SuggestionForm,
    IssueCard
  },
  computed: {
    getIssues() {
      return this.feature.issues;
    },
    getSuggestions() {
      return this.feature.suggestions;
    },
    isFeatureEmpty() {
      return Object.keys(this.feature).length > 0;
    }
  },
  methods: {
    onIssueFormSubmit(issue) {
      this.feature.issues.unshift(issue)
    },
    onSuggestionFormSubmit(suggestion) {
      this.feature.suggestions.unshift(suggestion);
    }
  },
  async mounted() {
    const featureId = this.$route.params.featureId;
    try {
      const resFeature = await featureAxios.getFeature(featureId);
      this.feature = resFeature.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>

</style>
