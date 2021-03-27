<template>
  <div :id="featureId">
      <section>
        <h4>Feature: {{name}}</h4>
        <p v-if="status === 'suggestion'"><span>Status:</span><span class="suggestion"> {{status}}</span></p>
        <p v-if="status === 'development'"><span>Status:</span><span class="development" > {{status}}</span></p>
        <p v-if="status === 'testing'"><span>Status:</span><span class="testing" > {{status}}</span></p>
        <p v-if="status === 'done'"><span>Status:</span><span class="done" > {{status}}</span></p>
        <p>Created on: {{dateFormatted(date)}}</p>
        <template v-if="creator._id">
          <router-link :to="`/my-profile/${creator._id}`">Creator: {{creator.name}}</router-link>
        </template>
        <p>Suggestions: {{suggestions.length}}</p>
        <p>Issues: {{issues.length}}</p>
        <p v-if="description">Description: {{description}}</p>
      </section>
  </div>
</template>
<script>

import dateOptions from '../../mixins/dateOptions';

export default {
  mixins: [dateOptions],
  props: {
    featureId: {
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
      type: [String, Object],
      required: false,
    },
    project: {
      type: Object,
      required: false
    },
    suggestions: {
      type: Array,
      required: false,
    },
    issues: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      
    }
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style scoped>
.suggestion {
  text-align: center;
  display: inline-block;
  border: 1px solid  rgb(132, 83, 160);
  color:rgb(132, 83, 160);
  font-weight: bold;
  border-radius: 0.2em;
  width: 7em;
  padding: 0.2em;
  margin-left: 0.2em;
}

.development {
  text-align: center;
  display: inline-block;
  border: 1px solid rgb(58, 95, 150);
  color:rgb(58, 95, 150);
  font-weight: bold;
  border-radius: 0.2em;
  width: 8em;
  padding: 0.2em;
  margin-left: 0.2em;
}

.testing {
  text-align: center;
  display: inline-block;
  border: 1px solid rgb(196, 103, 103);
  color:rgb(196, 103, 103);
  font-weight: bold;
  border-radius: 0.2em;
  width: 5.2em;
  padding: 0.2em;
  margin-left: 0.2em;
}

.done {
  text-align: center;
  display: inline-block;
  border: 1px solid rgb(60, 128, 96);
  color:rgb(60, 128, 96);
  font-weight: bold;
  border-radius: 0.2em;
  width: 4em;
  padding: 0.2em;
  margin-left: 0.2em;
}
</style>
