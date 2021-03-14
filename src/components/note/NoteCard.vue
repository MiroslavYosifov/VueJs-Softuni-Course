<template>
  <div :id="noteId">
    <section>
      <h4>Title: {{title}}</h4>
      <p>Created On: {{date}}</p>
      <p>Description: {{description}}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    noteId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

</style>
