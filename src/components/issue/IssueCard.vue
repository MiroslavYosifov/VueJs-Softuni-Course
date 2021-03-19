<template>
  <div :id="issueId">
    <section class="issue">
      <h4>Title: {{name}}</h4>
      <p>Created On: {{dateFormatted(date)}}</p>
      <p>Status: {{status}}</p>
      <p>Description: {{description}}</p>
      <template v-if="creator._id">
          <router-link :to="`/my-profile/${creator._id}`">Creator: {{creator.name}}</router-link>
      </template>
      <p v-if="project">Project: {{project.name}}</p>
      <p v-if="feature">Feature: {{feature.name}}</p>
    </section>
  </div>
</template>

<script>

import dateOptions from '../../mixins/dateOptions';

export default {
  mixins: [dateOptions],
  props: {
    issueId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    creator: {
      type: Object,
      required: false,
    },
    project: {
      type: Object,
      required: false
    },
    feature: {
      type: Object,
      required: false
    },
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>
.issue {
 
}
</style>
