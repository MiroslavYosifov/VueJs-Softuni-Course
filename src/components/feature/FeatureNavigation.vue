<template>
        <nav class="feature-navigation">
            <button 
                v-if="
                    (featureStatus === 'suggestion' || 
                    featureStatus === 'done') &&
                    authUserInfo.isAuthenticated"
                @click.prevent="showSuggestionForm">
                Add Suggestion
            </button>

            <button 
                v-if="
                    featureStatus === 'testing' &&
                    authUserInfo.isAuthenticated &&
                    (authUserInfo.roles.includes('admin') ||
                    authUserInfo.roles.includes('qa') || 
                    authUserInfo.userId === projectCreatorId || 
                    authUserInfo.userId === featureCreatorId)"
                @click.prevent="showIssueForm">
                Add Issue
            </button>

            <button 
                id="suggestion" 
                v-if="
                    (featureStatus === 'done' || featureStatus === 'testing') &&
                    authUserInfo.isAuthenticated &&
                    (authUserInfo.roles.includes('admin') || 
                    authUserInfo.userId === projectCreatorId || 
                    authUserInfo.userId === featureCreatorId)"
                @click.prevent="changeFeatureStatus">
                Send for Suggestions
            </button>

            <button 
                id="development" 
                v-if="
                    (featureStatus === 'suggestion' || featureStatus === 'testing') &&
                    authUserInfo.isAuthenticated &&
                    (authUserInfo.roles.includes('admin') || 
                    authUserInfo.userId === projectCreatorId || 
                    authUserInfo.userId === featureCreatorId)"
                @click.prevent="changeFeatureStatus">
                Send for Development
            </button>

            <button 
                id="testing"
                v-if="
                    (featureStatus === 'development') &&
                    authUserInfo.isAuthenticated &&
                    (authUserInfo.roles.includes('admin') ||
                    authUserInfo.roles.includes('developer') ||
                    authUserInfo.userId === projectCreatorId || 
                    authUserInfo.userId === featureCreatorId)"
                @click.prevent="changeFeatureStatus">
                Send for Testing
            </button>

            <button 
                id="done"
                v-if="
                    (featureStatus === 'testing') &&
                    authUserInfo.isAuthenticated &&
                    (authUserInfo.roles.includes('admin') ||
                    authUserInfo.roles.includes('qa') ||
                    authUserInfo.userId === projectCreatorId || 
                    authUserInfo.userId === featureCreatorId)"
                @click.prevent="changeFeatureStatus">
                Done
            </button>

            <button 
                v-if="
                    authUserInfo.isAuthenticated &&
                    authUserInfo.roles.includes('admin') ||
                    authUserInfo.userId === projectCreatorId"
                @click.prevent="deleteFeature">
                Delete Feature
            </button>

            <button 
                @click.prevent="backToPreviusPage">
                Back
            </button>
        </nav>
</template>

<script>

import axiosFeature from '../../services/feature-axios';

export default {
    props: {
        featureId: {
            type: String,
            required: true,
        },
        featureStatus: {
            type: String,
            required: true,
        },
        projectCreatorId: {
            type: String,
            required: true,
        },
        featureCreatorId: {
            type: String,
            required: true,
        },
    },
    data () {
      return {
   
      }
    },
    computed: {
        authUserInfo() {
            return this.$store.getters.authUserInfo;
        },
    },
    methods: {
        async deleteFeature() {
            try {
                await axiosFeature.deleteFeature(this.featureId);
                this.$router.back();
            } catch (error) {
                console.log(error);
            }
        },
        async changeFeatureStatus(e) {
            const status = e.currentTarget.id;
            const data = { status: status };

            try {
                const resUpdatedFeature = await axiosFeature.changeFeatureStatus(this.featureId, data);
                console.log(resUpdatedFeature);
                this.$router.back();
            } catch (error) {
                console.log(error);
            }
        },
        showIssueForm() {
            this.$store.dispatch('showHideIssueForm');
        },
        showSuggestionForm() {
            this.$store.dispatch('showHideSuggestionForm');
        },
        backToPreviusPage() {
            this.$router.back();
        }
    }
};
</script>

<style>

.feature-navigation {
    display: flex;
    width: 100%;
    padding: 1em;
}

.feature-navigation button:first-child {
    margin-left: auto;
}

.feature-navigation button {
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    background: rgb(250, 246, 238);
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}

.feature-navigation button:hover {
    color: rgb(250, 246, 238);
    background: rgb(114, 138, 167);
}

</style>
