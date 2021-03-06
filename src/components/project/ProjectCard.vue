<template>
    <div :class="[isListPage ? 'list-page' : 'detail-page']" :id="projectId">
        <h4>Project name: {{name}}</h4>
        <h5>Date: 20.03.2020 Creator: Pesho</h5>
        <p v-if="!isListPage" >Description: {{description}}</p>
        <p>Creator: {{creator}}</p>
        <p>Features: 0</p>
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
    },
    isListPage: {
        type: Boolean,
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
.list-page {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0.4em;
}

.list-page {

}

.list-page:hover {
    background: rgb(114, 138, 167);
    cursor: pointer;
}

</style>
