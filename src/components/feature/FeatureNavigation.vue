<template>
        <nav class="feature-navigation">
            <button @click.prevent="showSuggestionForm">Add Suggestion</button>
            <button @click.prevent="showIssueForm">Add Issue</button>
            <button id="suggestion" @click.prevent="changeFeatureStatus">Send for Suggestions</button>
            <button id="development" @click.prevent="changeFeatureStatus">Send for Development</button>
            <button id="testing" @click.prevent="changeFeatureStatus">Send for Testing</button>
            <button id="done" @click.prevent="changeFeatureStatus">Done</button>
            <button @click.prevent="deleteFeature" >Delete Feature</button>
            <button @click.prevent="backToPreviusPage">Back</button>
        </nav>
</template>

<script>

import axiosFeature from '../../services/feature-axios';

export default {
    props: {
        featureId: {
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
        async deleteFeature() {
            try {
                const resDeletedFeature = await axiosFeature.deleteFeature(this.featureId);
                console.log(resDeletedFeature);
                // const emitInfo = { ...resDeletedFeature.data, type: 'suggestion' };
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
