<template>
    <table class="project-list-wrapper">
        <tr>
          <th @click="sortByTableColumn('_id')">ID</th>
          <th @click="sortByTableColumn('name')">Project Name</th>
          <th @click="sortByTableColumn('date')">Created On</th>
          <th 
            @click="sortByTableColumn('creator')" 
            v-if="!isMyProfilePage">Creator</th>
          <th @click="sortByTableColumn('members')">Members</th>
          <th @click="sortByTableColumn('features')">Features</th>
        </tr>
        <tr v-for="(project, index) of projects" 
            :key="index"
            :id="project._id" 
            @click.prevent="loadProjectDetailPage">  
          <td>{{project._id}}</td>
          <td>{{project.name}}</td>
          <td>{{dateFormatted(project.date)}}</td>
          <td v-if="!isMyProfilePage">{{project.creator.name}}</td>
          <td>{{project.members.length}}</td>
          <td>{{project.features.length}}</td>
        </tr>
      </table>
</template>

<script>

import dateOptions from '../../mixins/dateOptions';

export default {
  mixins: [dateOptions],
  props: {
    projects: {
        type: Array,
        required: true,
    },
    isMyProfilePage: {
        type: Boolean,
        require: false
    }
  },
  data() {
      return {
          
      }
  },
  computed: {
   
  },
  methods: {
    loadProjectDetailPage(e) {
        const projectId = e.currentTarget.id;
        this.isSelectedDetailProjectPage = true;
        this.$router.push(`/projects/${projectId}`);
    },
    converDateFormat() {

    },
    sortByTableColumn(criterion) {
      this.$emit('on-sort-tabel', criterion);
    }
  },
};
</script>

<style>

</style>
