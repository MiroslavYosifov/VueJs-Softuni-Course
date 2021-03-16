<template>
    <nav class="project-navigation">
        <button 
            v-if="authUserInfo.isAuthenticated" 
            @click="showProjectForm"
            >
            Add Feature
        </button>
        <!-- <button>Join to Project</button>
        <button>Edit Project</button> -->
        <button 
            v-if="
                authUserInfo.isAuthenticated &&
                authUserInfo.userId === projectCreatorId ||
                authUserInfo.roles.includes('admin')"
            @click="deleteProject"
            >
            Delete Project
        </button>

        <button 
            @click.prevent="backToPreviusPage"
            >
            Back
        </button>
    </nav>
</template>

<script>

import axiosProject from '../../services/project-axios';

export default {
    props: {
        projectId: {
            type: String,
            required: true,
        },
        projectCreatorId: {
            type: String,
            required: true,
        }
    },
    data () {
      return {

      }
    },
    computed: {
        authUserInfo() {
            return this.$store.getters.authUserInfo;
        }
    },
    methods: {
        async deleteProject() {
            try {
                await axiosProject.deleteProject(this.projectId);
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
