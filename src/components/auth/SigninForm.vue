<template>
  <div id="signin">
    <div class="signin-form">
      <p class="error" v-if="authErrors">{{authErrors}}</p>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  v-model="$v.formData.name.$model">
          <p class="error" v-if="$v.formData.name.$error"> Full name field is invalid!</p>
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  v-model="$v.formData.password.$model">
          <p class="error" v-if="$v.formData.password.$error"> Full name field is invalid!</p>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  import { required, minLength, maxLength } from "vuelidate/lib/validators/index.js";

  export default {
    data () {
    return {
      formData: {
          name: "",
          password: ""
        }
    }
    },
    validations: {
        formData: {
          name: { 
            required,
            minLength: minLength(4),
          },
          password: { 
            required,
            minLength: minLength(4),
            maxLength: maxLength(16),
          }
        }
    },
    computed: {
      authErrors () {
         return this.$store.getters.getAuthErrors;
      },
    },
    methods: {
      async onSubmit () {
        this.$store.dispatch('signin', { ...this.formData });
      }
    },
    destroyed() {
      this.$store.dispatch('clearErrors');
    }
  }
</script>

<style scoped>
  .signin-form {
    width: 30em;
    margin: 0 auto;
    padding: 1.4em;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
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