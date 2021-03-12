<template>
    <nav class="project-navigation">
        <button @click="showProjectForm">Add Feature</button>
        <button>Join to Project</button>
        <button>Edit Project</button>
        <button @click="deleteProject">Delete Project</button>
        <button @click.prevent="backToPreviusPage">Back</button>
    </nav>
</template>

<script>

import axiosProject from '../../services/project-axios';

export default {
    props: {
        projectId: {
            type: String,
            required: true,
        }
    },
    data () {
      return {
   
      }
    },
    computed: {
      
    },
    methods: {
        async deleteProject() {
            try {
                const resDeletedProject = await axiosProject.deleteProject(this.projectId);
                console.log(resDeletedProject);
                this.$router.back();
            } catch (error) {
                console.log(error);
            }
        },
        showProjectForm () {
            this.$store.dispatch('showHideFeatureForm');
        },
        backToPreviusPage() {
            this.$router.back();
        }
    }
};
</script>

<style>

.project-navigation {
    display: flex;
    width: 100%;
    padding: 0.4em;
}

.project-navigation button:first-child {
    margin-left: auto;
}

.project-navigation button {
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    background: rgb(250, 246, 238);
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}

.project-navigation button:hover {
    color: rgb(250, 246, 238);
    background: rgb(114, 138, 167);
}
</style>
