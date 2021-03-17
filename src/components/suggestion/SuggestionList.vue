<template>
    <div class="feature-block">
      <header>
        <span><i class="fas fa-lightbulb"></i></span>
        <h2>Suggestions</h2>
      </header>
      <div class="feature-suggestions" v-for="suggestion of getSuggestions" :key="suggestion._id">
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
    </div>
</template>

<script>

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
        value: {}
    }
  },
  components: {
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
        this.getSuggestions;
    },
    onSuggestionUpdateStatus(value) {
        this.value = value;
        this.getSuggestions;
    }
  },
};
</script>

<style>

</style>
