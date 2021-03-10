<template>
    <div :class="[isListPage ? 'list-page' : 'detail-page']" 
         :id="projectId">
            <h5 v-if="name" class="project-name">Project name: {{name}}</h5>
            <p class="project-date">Created On: 20.03.2020</p>
            <p class="project-creator">Creator: {{creator}}</p>
            <p class="project-members">Members: {{members}}</p>
            <p class="project-faetures">Features: {{features}}</p>
            <p class="project-description" v-if="!isListPage">Description: {{description}}</p>
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
    creator: {
        type: String,
        required: true,
    },
    members: {
        type: Number,
        required: true,
    },
    features: {
        type: Number,
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
