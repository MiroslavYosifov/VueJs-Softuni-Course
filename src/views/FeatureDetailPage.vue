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
          :projectCreatorId="suggestion.project.creator"
          :featureCreatorId="suggestion.feature.creator"
          :status="suggestion.status"
          @on-suggestion-delete="onElementDelete"
          @on-suggestion-update-status="onElementUpdateStatus"
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
          :projectCreatorId="issue.project.creator"
          :featureCreatorId="issue.feature.creator"
          :status="issue.status"
          @on-issue-delete="onElementDelete"
          @on-issue-update-status="onElementUpdateStatus"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>

import SuccessModal from '../components/UI/SuccessModal.vue';

import FeatureCard from '../components/feature/FeatureCard.vue';
import FeatureNavigation from '../components/feature/FeatureNavigation.vue';

import SuggestionCard from '../components/suggestion/SuggestionCard.vue';
import SuggestionForm from '../components/suggestion/SuggestionForm.vue';
import SuggestionNavigation from '../components/suggestion/SuggestionNavigation.vue';

import IssueCard from '../components/issue/IssueCard.vue';
import IssueForm from '../components/issue/IssueForm.vue';
import IssueNavigation from '../components/issue/IssueNavigation.vue';

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
    IssueCard,
    IssueForm,
    IssueNavigation,
    SuggestionCard,
    SuggestionForm,
    SuggestionNavigation,
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
      this.feature.issues.unshift(issue);
      this.successMessage = `Your Issue ${issue.name} was added successfully to your issues list!`;
    },
    onSuggestionFormSubmit(suggestion) {
      this.feature.suggestions.unshift(suggestion);
      this.successMessage = `Your Suggestion ${suggestion.name} was added successfully to your suggestions list!`;
    },
    onElementDelete(value) {
      if(value.type === "issue") {
        this.feature.issues = this.feature.issues.filter(f => f._id !== value.issueId);
      }
      if(value.type === "suggestion") {
        this.feature.suggestions = this.feature.suggestions.filter(s => s._id !== value.suggestionId);
      }
    },
    onElementUpdateStatus(value) {
      if(value.type === "issue") {
        this.feature.issues = this.feature.issues.map(e => {
          if(e._id === value.issueId) {
            e.status = value.status;
          }
          return e;
        })
      }
      if(value.type === "suggestion") {
        this.feature.suggestions = this.feature.suggestions.map(e => {
          if(e._id === value.suggestionId) {
            e.status = value.status;
          }
          return e;
        });
      }
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
  width: 35%;
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
