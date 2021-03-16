<template>
    <nav class="suggestion-nav">
        <button></button>
        <button
            class="accept"
            data-status="accept" 
            v-if="
                (status === 'waiting for approval') &&
                (authUserInfo.userId === projectCreatorId || 
                authUserInfo.userId === featureCreatorId || 
                authUserInfo.roles.includes('admin'))"
            @click.prevent="changeSuggestionStatus">
            Accept
        </button>
        <button 
            class="decline"
            v-if="
                (status != 'done') &&
                (authUserInfo.userId === projectCreatorId || 
                authUserInfo.userId === featureCreatorId || 
                authUserInfo.roles.includes('admin'))"
            @click="deleteSuggestion">
            Decline
        </button>
        <button 
            class="done-button"
            data-status="done"
            v-if="
                (status != 'done') &&
                (authUserInfo.roles.includes('developer') ||
                authUserInfo.roles.includes('admin'))"
            @click.prevent="changeSuggestionStatus">
            Done
        </button>
    </nav>
</template>

<script>

import axiosSuggestion from '../../services/suggestion-axios';

export default {
    props: {
        suggestionId: {
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
        status: {
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
        async deleteSuggestion() {
            try {
                const resDeletedSuggestion = await axiosSuggestion.deleteSuggestion(this.suggestionId);
                const emitInfo = { ...resDeletedSuggestion.data, type: 'suggestion' };
                this.$emit('on-suggestion-delete', emitInfo);
            } catch (error) {
                console.log(error);
            }
        },
        async changeSuggestionStatus (e) {
            const status = e.currentTarget.dataset.status;
            const data = {
                status: status
            }
            try {
                const resUpdatedSuggestion = await axiosSuggestion.changeSuggestionStatus(this.suggestionId, data);
                const emitInfo = { ...resUpdatedSuggestion.data, type: 'suggestion' };
                this.$emit('on-suggestion-update-status', emitInfo);
            } catch (error) {
                console.log(error);
            }
          
        }
    }
};
</script>

<style>

.suggestion-nav {
  display: flex;
}

.suggestion-nav button:first-child {
    background: none;
    border: none;
    margin-left: auto;
}

.accept,
.decline,
.done-button {
  padding: 0.4em 1em;
  border: none;
  cursor: pointer;
  margin-left: 0.4em;
  color: white;
}

.accept {
  background: rgb(164, 187, 128);
}

.decline {
  background: rgb(221, 91, 91);
}

.done-button {
 background: rgb(140, 172, 184);
}

</style>
