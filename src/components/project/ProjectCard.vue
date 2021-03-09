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
    creator: {
        type: String,
        required: false,
    },
    members: {
        type: Array,
        required: false,
    },
    features: {
        type: Array,
        required: false,
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
/* .list-page {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0.4em;
}

.list-page {

}

.list-page:hover {
    background: rgb(114, 138, 167);
    cursor: pointer;
} */

</style>
