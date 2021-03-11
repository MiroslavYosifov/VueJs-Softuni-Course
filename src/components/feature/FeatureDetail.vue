<template>
<div class="feature">
  <!-- <div>
    <IssueForm @on-issue-submit="onIssueFormSubmit"/>
  </div>
  <div>
    <SuggestionForm @on-suggestion-submit="onSuggestionFormSubmit"/>
  </div> -->
  <nav class="feature-navigation">
      <button>Add Suggestion</button>
      <button>Add Issue</button>
      <button>Edit Feature</button>
      <button>Delete Feature</button>
      <button @click.prevent="backToPreviusPage">Back</button>
    </nav>
  <div class="feature-content">
    
    <div class="feature-block">
      <header>
        <!-- <span><i class="fas fa-info-circle"></i></span> -->
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
      <div class="feature-suggestions" v-for="issue of feature.suggestions" :key="issue._id">
        <SuggestionCard
          :issueId="issue._id"
          :name="issue.name"
          :date="issue.date"
          :description="issue.description"
          :status="issue.status"
          :creator="issue.creator"
        />
        <nav>
          <button class="accept">Accept</button>
          <button class="decline">Decline</button>
          <button class="edit">Edit</button>
        </nav>
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
        <nav>
          <button class="accept">Accept</button>
          <button class="decline">Decline</button>
          <button class="edit">Edit</button>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import FeatureCard from './FeatureCard.vue';
import IssueCard from '../issue/IssueCard.vue';
// import IssueForm from '../issue/IssueForm.vue';
import SuggestionCard from '../suggestion/SuggestionCard.vue';
// import SuggestionForm from '../suggestion/SuggestionForm.vue';

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
    // IssueForm,
    SuggestionCard,
    // SuggestionForm,
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
    },
    backToPreviusPage() {
      this.$router.back();
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
  width: 90%;
  margin: 0 auto;
  padding: 2em;
  background: rgb(250, 246, 238);
}

.feature-navigation {
    display: flex;
    width: 100%;
    padding: 1em;
}

.feature-navigation button:first-child {
    margin-left: auto;
}

.feature-navigation button {
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    background: rgb(250, 246, 238);
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}

.feature-navigation button:hover {
    color: rgb(250, 246, 238);
    background: rgb(114, 138, 167);
}

/* ----------------------------------- */
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

.feature-suggestions nav  ,
.feature-issues nav {
  display: flex;
}

.accept,
.decline,
.edit {
  padding: 0.4em 1em;
  border: none;
  cursor: pointer;
  margin-left: 0.4em;
  color: white;
}

.accept {
  margin-left: auto;
  background: rgb(164, 187, 128);
}

.decline {
  background: rgb(221, 91, 91);
}

.edit {
 background: rgb(99, 139, 214);
}

.feature-suggestions {

}

.feature-issues {

}

</style>
