<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  placeholder="Username"
                  v-model="$v.formData.name.$model">
          <p class="error" v-if="$v.formData.name.$error"> Full name field is invalid!</p>
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  v-model="$v.formData.password.$model">
          <p class="error" v-if="$v.formData.password.$error"> Full name field is invalid!</p>
        </div>
        <div class="input">
          <label for="re-password">Comfirm Password</label>
          <input 
            type="password" 
            name="re-password" 
            id="re-password" 
            placeholder="******"
            v-model="$v.formData.confirmPassword.$model">
          <p class="error" v-if="!$v.formData.confirmPassword.sameAsPassword">Password not match!</p>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { required, minLength, maxLength, sameAs } from "vuelidate/lib/validators/index.js";

export default {
  data () {
    return {
      formData: {
          name: "",
          password: "",
          confirmPassword: ""
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
        },
        confirmPassword: {
          sameAsPassword: sameAs('password')
        },
      }
  },
  methods: {
    async onSubmit () {
      this.$store.dispatch('signup', { ...this.formData })
    }
  }
}
</script>

<style scoped>
   .signup-form {
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