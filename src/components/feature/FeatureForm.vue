<template>
        <div class="feature-form ">
            <header>
              <h4>Add new Feature</h4>
            </header>
            <p v-if="this.resError">{{resError}}</p>
            <form @submit.prevent="onSubmit">
                <div class="input">
                  <label for="name">Name</label>
                  <input
                        type="text"
                        id="name"
                        name="name"
                        v-model="$v.formData.name.$model">
                <p class="error" v-if="$v.formData.name.$error">Name is required</p>
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
                  <button @click.prevent="hideFeatureForm">Cancel</button>
                </div>
            </form>
        </div>
</template>

<script>

import { required, minLength, maxLength } from "vuelidate/lib/validators/index.js";
import axiosFeature from '../../services/feature-axios';


export default {
    data () {
      return {
        resError: false,
        formData: {
            name: "",
            description: ""
        }
      }
    },
    validations: {
      formData: {
        name: { 
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
        const projectId = this.$route.params.projectId;

        const formData = {
          ...this.formData,
          authToken: this.$store.getters.getAuthToken,
          projectId: projectId
        }

        try {
          const resFeature = await axiosFeature.createFeature(formData);
          this.$store.dispatch('showHideFeatureForm');
          this.$emit('on-feature-submit', resFeature.data);
        } catch (error) {
          this.resError = error;
          console.log(error);
        }
      },
      hideFeatureForm () {
        this.$store.dispatch('showHideFeatureForm');
      }
    }
};
</script>

<style>
    .feature-form {
        position: absolute;
        width: 30em;
        padding: 1.4em;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: white;
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
