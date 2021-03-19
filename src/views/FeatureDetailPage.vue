<template>
<div class="feature">
  <div class="issue-form-wrapper"
    v-if="isShowedIssueAddForm">
      <IssueForm @on-issue-submit="onIssueFormSubmit"/>
  </div>

  <div class="suggestion-form-wrapper"
    v-if="isShowedSuggestionAddForm">
      <SuggestionForm @on-suggestion-submit="onSuggestionFormSubmit"/>
  </div>

  <template v-if="successMessage">
      <SuccessModal 
          :successMessage="successMessage"/>
  </template>

  <template v-if="isFeatureEmpty">
    <FeatureNavigation 
        :featureId="feature._id"
        :featureStatus="feature.status"
        :featureCreatorId="feature.creator._id" 
        :projectCreatorId="feature.project.creator"
        :projectId="feature.project._id"
        @on-change-feature-status="onChangeFeatureStatus"
        />
  </template>

  <div class="feature-content">
    <div class="feature-block">
      <header>
        <h2>Feature Info</h2>
      </header>
      <div v-if="isFeatureEmpty" class="feature-card">
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
    </div>
    <div 
      class="feature-suggestion-block" 
      v-if="getSuggestions">
      <SuggestionsList 
        :suggestions="getSuggestions"/>
    </div>
    <div 
      class="feature-issues-block" 
      v-if="getIssues">
      <IssuesList 
        :issues="getIssues"/>
    </div>
  </div>
</div>
</template>

<script>

import SuccessModal from '../components/UI/SuccessModal.vue';

import FeatureCard from '../components/feature/FeatureCard.vue';
import FeatureNavigation from '../components/feature/FeatureNavigation.vue';

import SuggestionForm from '../components/suggestion/SuggestionForm.vue';
import SuggestionsList from '../components/suggestion/SuggestionsList.vue';

import IssueForm from '../components/issue/IssueForm.vue';
import IssuesList from '../components/issue/IssuesList.vue';

import featureAxios from '../services/feature-axios';

export default {
  props: {

  },
  data() {
    return {
      feature: {},
      successMessage: ''
    }
  },
  components: {
    SuccessModal,
    FeatureCard,
    FeatureNavigation,
    IssueForm,
    IssuesList,
    SuggestionForm,
    SuggestionsList,
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
    },
    isShowedIssueAddForm () {
      return this.$store.getters.issueInfo.isShowedIssueAddForm;
    },
    isShowedSuggestionAddForm () {
      return this.$store.getters.suggestionInfo.isShowedSuggestionAddForm;
    }
  },
  methods: {
    onIssueFormSubmit(resIssue) {
      this.feature.issues.unshift(resIssue.issue);
      this.successMessage = resIssue.successMessage;
    },
    onSuggestionFormSubmit(resSuggestion) {
      this.feature.suggestions.unshift(resSuggestion.suggestion);
      this.successMessage = resSuggestion.successMessage;
    },
    onChangeFeatureStatus(resFeature) {
      this.feature.status = resFeature.feature.status;
      this.successMessage = resFeature.successMessage;
    }
  },
  async mounted() {
    const featureId = this.$route.params.featureId;
    try {
      const resFeature = await featureAxios.getFeature(featureId);
      console.log(resFeature.data);
      this.feature = resFeature.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>

.feature {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: rgb(250, 246, 238);
}

.issue-form-wrapper,
.suggestion-form-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background:rgba(0, 0, 0, 0.1);
  top: 0; left: 0;
}

.feature-content {
  margin-top: 2em;
  display: flex;
}

.feature-block header span i {
  font-size: 3em;
}

.feature-block:first-child {
  width: 30%;
}

.feature-block:first-child  header {
  text-align: left;
}

.feature-block {
  width: 30%;
  margin: 0 1em;
}

.feature-block header {
  text-align: center;
  margin-bottom: 1em;
}

.feature-suggestion-block,
.feature-issues-block {
  width: 35%;
  margin-right: 2em;
}

</style>
