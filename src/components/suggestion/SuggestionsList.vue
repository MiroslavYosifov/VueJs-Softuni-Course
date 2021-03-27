<template>
    <div class="suggestions-list-block">
      <template v-if="successMessage">
        <SuccessModal 
          :successMessage="successMessage"/>
      </template>
      <header>
        <span><i class="fas fa-lightbulb"></i></span>
        <h2>Suggestions</h2>
      </header>
      <template  v-if="getSuggestions.length > 0">
        <div class="suggestions-list" v-for="suggestion of getSuggestions" :key="suggestion._id">
        <SuggestionCard
          :suggestionId="suggestion._id"
          :name="suggestion.name"
          :date="suggestion.date"
          :description="suggestion.description"
          :status="suggestion.status"
          :creator="suggestion.creator"
        />
        <SuggestionNavigation
          :suggestionId="suggestion._id"
          :projectCreatorId="suggestion.project.creator"
          :featureCreatorId="suggestion.feature.creator"
          :status="suggestion.status"
          @on-suggestion-delete="onSuggestionDelete"
          @on-suggestion-update-status="onSuggestionUpdateStatus"
        />
      </div>
      </template>
      <template  v-else>
        <div class="no-suggestion">
           <h3>No Issues</h3>
        </div>
      </template>
    </div>
</template>

<script>

import SuccessModal from '../UI/SuccessModal.vue';

import SuggestionCard from './SuggestionCard.vue';
import SuggestionNavigation from './SuggestionNavigation.vue';

export default {
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
        value: {},
        successMessage: ''
    }
  },
  components: {
    SuccessModal,
    SuggestionCard,
    SuggestionNavigation
  },
  computed: {
    getSuggestions() {
        if(this.value.type === 'deleteSuggestion') {
            return this.suggestions.filter(f => f._id !== this.value.suggestionId);
        }

        if(this.value.type === 'updateSuggestionStatus') {
            return this.suggestions.map(e => {
                        if(e._id === this.value.suggestionId) {
                            e.status = this.value.status;
                        }
                        return e;
                    });
        }

        return this.suggestions; 
    },
  },
  methods: {
    onSuggestionDelete(value) {
        this.value = value;
        this.successMessage = value.successMessage;
        this.getSuggestions;
    },
    onSuggestionUpdateStatus(value) {
        this.value = value;
        this.successMessage = value.successMessage;
        this.getSuggestions;
    }
  },
};
</script>

<style>

.suggestions-list-block {
  width: 100%;
}

.suggestions-list-block header span i {
  font-size: 3em;
}

.suggestions-list-block:first-child {
  width: 100%;
}

.suggestions-list-block:first-child  header {
  text-align: center;
}

.suggestions-list-block header {
  text-align: center;
  padding: 1em;
}

.suggestions-list {
  background: white;
  border: 1px solid rgb(154, 167, 184);
  padding: 1em 2em;
  color: rgb(109, 125, 145);
  margin-bottom: 0.4em;
  border-radius: 0.1em;
}

.no-suggestion {
  text-align: center;
}
</style>
