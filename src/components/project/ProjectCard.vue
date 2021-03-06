<template>
    <div :id="projectId">
        <h4>Project name: {{name}}</h4>
        <h5>Date: 20.03.2020 Creator: Pesho</h5>
        <p>Descript: {{description}}</p>
    </div>
</template>

<script>
export default {
  props: {
    projectId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    }
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

<style>

</style>
