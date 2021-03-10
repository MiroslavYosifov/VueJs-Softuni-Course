<template>
    <div id="project">
        <div class="suggestion-form ">
            <header>
              <h4>Add Suggestion</h4>
            </header>
            <form @submit.prevent="onSubmit">
                <div class="input">
                  <label for="name">Name</label>
                  <input
                        type="text"
                        id="name"
                        name="name"
                        v-model="formData.name">
                </div>
                <div class="input">
                  <label for="description">Description</label>
                  <textarea
                        id="description"
                        name="description"
                        v-model="formData.description"></textarea>
                </div>
                <div>
                    <label for="status">Status</label>
                    <select 
                      name="status" 
                      id="status" 
                      v-model="formData.status">
                        <option >suggestion</option>
                        <option >development</option>
                        <option >testing</option>
                        <option >done</option>
                    </select>
                </div>
                <div class="submit">
                  <button type="submit">Submit</button>
                </div>
            </form>
        </div>
  </div>
</template>

<script>

import axiosSuggestion from '../../services/suggestion-axios';

export default {
    data () {
      return {
        formData: {
            name: "",
            description: "",
            status: "",
        }
      }
    },
    computed: {
      
    },
    methods: {
      async onSubmit () {
        const featureId = this.$route.params.featureId;
        const formData = {
          ...this.formData,
          authToken: this.$store.getters.getAuthToken,
          featureId: featureId,
        }
        try {
            const resSuggestion = await axiosSuggestion.createSuggestion(formData);
            this.$emit('on-suggestion-submit', resSuggestion.data);
        } catch (error) {
            console.log(error);
        }
      },
    },
    
};
</script>

<style>
  .suggestion-form {
    width: 30em;
    padding: 1.4em;
    margin-left: 2px;
    margin-bottom: 2em;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
  }

  textarea {
    width: 100%;
  }

  .input label {
    display: block;
  }

  .input input {
    width: 100%;
    padding: 0.6em;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid rgb(114, 138, 167);
    background-color: rgb(255, 255, 255);
  }

  .submit button {
    margin-top: 1em;
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    background: rgb(250, 246, 238);
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color:rgb(114, 138, 167);
    color: white;
  }
</style>
