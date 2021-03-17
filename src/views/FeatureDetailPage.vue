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
    
    <template v-if="getSuggestions">
      <SuggestionList 
        :suggestions="getSuggestions"/>
    </template>

    <template v-if="getIssues">
      <IssuesList 
        :issues="getIssues"/>
    </template>
  </div>
</div>
</template>

<script>

import SuccessModal from '../components/UI/SuccessModal.vue';

import FeatureCard from '../components/feature/FeatureCard.vue';
import FeatureNavigation from '../components/feature/FeatureNavigation.vue';

import SuggestionForm from '../components/suggestion/SuggestionForm.vue';
import SuggestionList from '../components/suggestion/SuggestionList.vue';

import IssueForm from '../components/issue/IssueForm.vue';
import IssuesList from '../components/issue/IssueList.vue';

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
    SuggestionList,
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
