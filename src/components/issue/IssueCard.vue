<template>
  <div :id="issueId">
    <section class="issue">
      <h4>Title: {{name}}</h4>
      <p>Created On: {{dateFormatted(date)}}</p>
      <p v-if="status === 'accept'"><span>Status:</span><span class="accept-status"> {{status}}</span></p>
      <p v-if="status === 'fixed'"><span>Status:</span><span class="fixed-status" > {{status}}</span></p>
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

<style scoped>
.accept-status {
  text-align: center;
  display: inline-block;
  border: 1px solid rgb(109, 133, 70);
  color: rgb(109, 133, 70);
  font-weight: bold;
  border-radius: 0.2em;
  width: 5em;
  padding: 0.2em;
  margin-left: 0.2em;
}

.fixed-status {
  text-align: center;
  display: inline-block;
  border: 1px solid rgb(99, 56, 92);
  color: rgb(99, 56, 92);
  font-weight: bold;
  border-radius: 0.2em;
  width: 5em;
  padding: 0.2em;
  margin-left: 0.2em;
}
</style>
