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

  <template v-if="isFeatureEmpty">
    <FeatureNavigation 
        :featureId="feature._id" 
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
    <div class="feature-block">
      <header>
        <span><i class="fas fa-lightbulb"></i></span>
        <h2>Suggestions</h2>
      </header>
      <div class="feature-suggestions" v-for="suggestion of feature.suggestions" :key="suggestion._id">
        <SuggestionCard
          :suggestionId="suggestion._id"
          :name="suggestion.name"
          :date="suggestion.date"
          :description="suggestion.description"
          :status="suggestion.status"
          :creator="suggestion.creator"
        />
        <SuggestionNavigation
          :suggestionId="suggestion._id"
          @on-suggestion-delete="onElementDelete"
        />
      </div>
    </div>
    <div class="feature-block">
      <header>
        <span><i class="fas fa-exclamation-circle"></i></span>
        <h2>Issues</h2>
      </header>
      <div class="feature-issues" v-for="issue of feature.issues" :key="issue._id">
        <IssueCard
          :issueId="issue._id"
          :name="issue.name"
          :date="issue.date"
          :description="issue.description"
          :status="issue.status"
          :creator="issue.creator"
        />
        <IssueNavigation
          :issueId="issue._id"
          @on-issue-delete="onElementDelete"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>

import FeatureNavigation from './FeatureNavigation';
import FeatureCard from './FeatureCard.vue';
import IssueCard from '../issue/IssueCard.vue';
import SuggestionCard from '../suggestion/SuggestionCard.vue';

import IssueNavigation from '../issue/IssueNavigation.vue';
import SuggestionNavigation from '../suggestion/SuggestionNavigation.vue';

import IssueForm from '../issue/IssueForm.vue';
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
    FeatureNavigation,
    FeatureCard,
    SuggestionCard,
    IssueCard,
    IssueNavigation,
    SuggestionNavigation,
    IssueForm,
    SuggestionForm,
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
    onIssueFormSubmit(issue) {
      this.feature.issues.unshift(issue)
    },
    onSuggestionFormSubmit(suggestion) {
      this.feature.suggestions.unshift(suggestion);
    },
    onElementDelete(value) {
      if(value.type === "issue") {
        this.feature.issues = this.feature.issues.filter(f => f._id !== value.issueId);
      }
      if(value.type === "suggestion") {
        this.feature.suggestions = this.feature.suggestions.filter(s => s._id !== value.suggestionId);
      }
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

.feature {
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 2em;
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
  width: 20%;
}

.feature-block:first-child  header {
  text-align: left;
}

.feature-block {
  width: 40%;
  margin: 0 1em;
}

.feature-block header {
  text-align: center;
  margin-bottom: 1em;
}

.feature-suggestions,
.feature-issues {
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 1em 2em;
  color: rgb(109, 125, 145);
  margin-bottom: 0.4em;
  border-radius: 0.1em;
}


.feature-suggestions {

}

.feature-issues {

}

</style>
