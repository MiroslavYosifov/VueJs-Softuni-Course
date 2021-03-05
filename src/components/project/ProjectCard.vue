<template>
    <div :id="projectId">
        <h2>Project name: {{name}}</h2>
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
    description: {
        type: String,
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
    loadDetailPage() {
    this.$router.push(`/projects/${this.projectId}`);
    }
  },
};
</script>

<style>

</style>
