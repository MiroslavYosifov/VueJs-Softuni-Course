<template>
    <nav class="suggestion-nav">
        <button class="accept">Accept</button>
        <button @click="deleteSuggestion" class="decline">Decline</button>
        <button class="edit">Edit</button>
        <button @click="deleteSuggestion" class="decline">Delete</button>
    </nav>
</template>

<script>

import axiosSuggestion from '../../services/suggestion-axios';

export default {
    props: {
        suggestionId: {
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
        async deleteSuggestion() {
            try {
                const resDeletedSuggestion = await axiosSuggestion.deleteSuggestion(this.suggestionId);
                const emitInfo = { ...resDeletedSuggestion.data, type: 'suggestion' };
                this.$emit('on-suggestion-delete', emitInfo);
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

.accept,
.decline,
.edit {
  padding: 0.4em 1em;
  border: none;
  cursor: pointer;
  margin-left: 0.4em;
  color: white;
}

.accept {
  margin-left: auto;
  background: rgb(164, 187, 128);
}

.decline {
  background: rgb(221, 91, 91);
}

.edit {
 background: rgb(99, 139, 214);
}

</style>
