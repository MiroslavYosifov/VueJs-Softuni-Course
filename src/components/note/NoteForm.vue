<template>
        <div class="note-form ">
            <header>
              <h4>Add Note</h4>
            </header>
            <form @submit.prevent="onSubmit">
                <div class="input">
                  <label for="title">Title</label>
                  <input
                        type="text"
                        id="title"
                        name="title"
                        v-model="$v.formData.title.$model">
                  <p class="error" v-if="$v.formData.title.$error">Title is required</p>
                </div>
                <div class="input">
                  <label for="description">Description</label>
                  <textarea
                        id="description"
                        name="description"
                        rows="6"
                        v-model="$v.formData.description.$model"></textarea>
                  <p class="error" v-if="$v.formData.description.$error">Description is required</p>
                </div>
                <div class="submit">
                  <button type="submit">Submit</button>
                </div>
            </form>
        </div>
</template>

<script>

import { required, minLength, maxLength } from "vuelidate/lib/validators/index.js";
import noteAxios from '../../services/note-axios';

export default {
    data () {
      return {
        formData: {
            title: "",
            description: ""
        }
      }
    },
    validations: {
      formData: {
        title: { 
          required,
          minLength: minLength(4),
        },
        description: { 
          required,
          minLength: minLength(10),
          maxLength: maxLength(1000),
        },
      }
    },
    computed: {
      
    },
    methods: {
      async onSubmit () {

        try {
            const resNote = await noteAxios.createNote(this.formData);
            this.$emit('on-note-submit', resNote.data);
        } catch (error) {
            console.log(error);
        }
      },
    },
    
};
</script>

<style>
  .note-form {
    width: 100%;
    padding: 1em;
    background: rgb(230, 230, 230);
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
