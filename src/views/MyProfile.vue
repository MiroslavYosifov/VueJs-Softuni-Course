<template>
  <div class="myprofile-container">
    <section class="myprofile-info">
      <section class="myprofile-profile">
        <ProfileCard />
      </section>
      <section class="myprofile-projects">
         <ProjectList 
          :projects="projects"
          :isMyProfilePage="true" />
      </section>
    </section>
    <section class="myprofile-tasks">

    </section>
  </div>
</template>

<script>

import ProjectList from '../components/project/ProjectList.vue';
import ProfileCard from '../components/user/ProfileCard.vue';
import axiosUser from '../services/user-axios';

export default {
  props: {

  },
  components: {
    ProfileCard,
    ProjectList
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

  },
  async created() {
    const userId = this.$store.getters.getUserId;

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
};
</script>

<style>
.myprofile-container {
  display: flex;
}

.myprofile-info {
  width: 50%;
  background: rgb(189, 179, 169);
}

.myprofile-profile {

}

.myprofile-projects {
  width: 100%;
  padding: 2em;
}

.myprofile-project-list-wrapper {
    width: 100%;
    padding: 1em;
    font-size: 0.8em;
    border-collapse: collapse;
    background: rgb(250, 246, 238);
}

.myprofile-project-list-wrapper tr:hover {
  cursor: pointer;
}

.myprofile-project-list-wrapper tr th,
.myprofile-project-list-wrapper tr td {
    border: 2px solid rgb(255, 255, 255);
    text-align: center;
    padding: 0.8em;
}

.myprofile-project-list-wrapper tr:hover td {
    background: rgb(196, 204, 214);
}

.myprofile-project-list-wrapper tr th {
  background:rgb(228, 223, 215);
}

/* Second container */
.myprofile-tasks {
  width: 50%;
  background: rgb(172, 172, 172);
}
</style>
