<template>
  <div class="myprofile-container">
    <section class="myprofile-info">
      <section class="myprofile-profile">
        <ProfileCard />
      </section>
      <section class="myprofile-projects">
          <header>
            <h3>My projects</h3>
          </header>
          <ul>
            <li v-for="project of projects" :key="project._id">
                <router-link :to="`/projects/${project._id}`">{{project.name}}</router-link>
            </li>
          </ul>
      </section>
    </section>
    <section class="myprofile-tasks">
      <section class="myprofile-tasks-features">
        <FeatureList 
          :features="features"
        />
      </section>
      <section class="myprofile-tasks-issues">
        <IssuesList 
          :issues="issues"
        />
      </section>
      <section class="myprofile-tasks-suggestions">
        <SuggestionsList 
          :suggestions="suggestions"
        />
      </section>
    </section>
  </div>
</template>

<script>

import FeatureList from '../components/feature/FeaturesList.vue';
import IssuesList from '../components/issue/IssuesList.vue';
import SuggestionsList from '../components/suggestion/SuggestionsList.vue';

import ProfileCard from '../components/user/ProfileCard.vue';
import axiosUser from '../services/user-axios';

export default {
  props: {

  },
  components: {
    ProfileCard,
    FeatureList,
    IssuesList,
    SuggestionsList
  },
  data() {
    return {
      projects: [],
      issues: [],
      suggestions: [],
      features: []
    };
  },
  computed: {

  },
  methods: {
    async getUserInfo() {
      const userId = this.$route.params.userId;

      try {
          const resUserInfo = await axiosUser.getUserInfo(userId);

          this.projects = resUserInfo.data.ownProjects;
          this.issues = resUserInfo.data.issues;
          this.suggestions = resUserInfo.data.suggestions;
          this.features = resUserInfo.data.features;

      } catch (error) {
          console.log(error);
      }
    }
  },
  created() {
    this.getUserInfo();
  },
  watch: {
    $route() {
      this.getUserInfo();
    }
  }
};
</script>

<style>
.myprofile-container {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
}

.myprofile-info {
  width: 100%;
  display: flex;
  padding: 1em;
  background: rgb(250, 246, 238);
}

.myprofile-profile {
  width: 50%;
  background: rgb(255, 255, 255);
}

.myprofile-projects {
  width: 50%;
  background: rgb(255, 255, 255);
  margin-left: 1em;
}

.myprofile-projects header {
   padding: 1em 1em 0 1em;
}

.myprofile-projects header h3 {
  text-align: center;
}

.myprofile-projects ul {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
}

.myprofile-projects ul li {
  /* background: rgb(183, 183, 209); */
  margin: 0.2em;
  border-radius: 0.1em;
}

.myprofile-projects ul li a {
  display: block;
  padding: 0.4em 1em;
  background:rgb(228, 223, 215);
  color: gray;
}

.myprofile-projects ul li a:hover  {
  background: rgb(172, 182, 196);
}

/* Second container */
.myprofile-tasks {
  display: flex;
  width: 100%;
  background: rgb(250, 246, 238);
  /* background: rgb(172, 172, 172); */
}

.myprofile-tasks-features,
.myprofile-tasks-issues,
.myprofile-tasks-suggestions {
  padding: 1em;
}

.myprofile-tasks-features {
  width: 30%;
}

.myprofile-tasks-issues {
  width: 35%;
}

.myprofile-tasks-suggestions {
  width: 35%;
} 

</style>
