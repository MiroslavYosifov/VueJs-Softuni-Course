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
              <!-- if error -->
              <p class="error" v-if="$v.formData.name.$error"> Full name field is invalid!</p>
              <!-- end if error -->
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  v-model="$v.formData.password.$model">
              <!-- if error -->
              <p class="error" v-if="$v.formData.password.$error"> Full name field is invalid!</p>
              <!-- end if error -->
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
      const formData = {
        name: this.name,
        password: this.password
      }
      console.log(formData);
      // this.$store.dispatch('signup', { ...formData })
    }
  }
}
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid rgb(114, 138, 167);
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid rgb(114, 138, 167);
    background: rgb(114, 138, 167);
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color:rgb(114, 138, 167);
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid rgb(114, 138, 167);
    color: rgb(114, 138, 167);
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: rgb(114, 138, 167);
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>