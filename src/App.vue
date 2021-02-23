<template>
<div class="container">

  <form action="" method="post" @submit.prevent="handleFormSubmit">
    
    <fieldset>
      <h1>Registration Form</h1>

      <p class="field field-icon">
        <label for="username"><span><i class="fas fa-user"></i></span></label>
        <input 
          type="text" 
          name="username" 
          id="username" 
          class="error" 
          placeholder="Mark Ulrich"
          v-model="$v.formData.username.$model">
      </p>
      <!-- if error -->
      <p class="error" v-if="$v.formData.username.$error"> Full name field is invalid!</p>
      <!-- end if error -->
      
      <p class="field field-icon">
        <label for="email"><span><i class="fas fa-envelope"></i></span></label>
        <input 
          type="text" 
          name="email" 
          id="email" 
          placeholder="marg@gmial.com"
          v-model="$v.formData.email.$model">
      </p>
      <p class="error" v-if="$v.formData.email.$error"> email is invalid!</p>
      <p class="field field-icon">
        <label for="tel"><span><i class="fas fa-phone"></i></span></label>
        <select 
          name="tel" 
          id="tel" 
          class="tel" 
          v-model="formData.code">
          <option v-for="(code, i) in phoneCodes" :key="i">{{code}}</option>
        </select>
        <input 
          type="text" 
          name="tel" 
          id="tel" 
          placeholder="888 888"
          v-model="formData.tel">
      </p>

      <p class="field field-icon">
        <label for="building"><span><i class="fas fa-building"></i></span></label>
        <select 
          name="building" 
          id="building" 
          class="building"
          v-model="formData.building">
          <option v-for="(building, i) in buildings" :key="i">{{building}}</option>
        </select>
      </p>
      <p class="field field-icon">
        <label for="password"><span><i class="fas fa-lock"></i></span></label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="******"
          v-model="$v.formData.password.$model">
      </p>
      <!-- if error -->
      <p class="error" v-if="!$v.formData.password.minLength">Password should be bigger than 2 characters!</p>
      <p class="error" v-if="!$v.formData.password.maxLength">Password should be smaller than 17 characters!</p>
      <!-- end if error -->
      
      <p class="field field-icon">
        <label for="re-password"><span><i class="fas fa-lock"></i></span></label>
        <input 
          type="re-password" 
          name="re-password" 
          id="re-password" 
          placeholder="******"
          v-model="$v.formData.confirmPassword.$model">
      </p>
      <p class="error" v-if="!$v.formData.confirmPassword.sameAsPassword">Password not match!</p>

      <p>
        <button>Create Account</button>
      </p>
      
      <p class="text-center">
        Have an account?
        <a href="">Log In</a>
      </p>
      
    </fieldset>
  </form>
</div>
</template>

<script>

import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
  sameAs 
} from "vuelidate/lib/validators";

const buildings = ["Designer", "Software Engineer", "Accountant", "Manager", "Other"];
const phoneCodes = ["+359", "+222", "+358"];
// "/^[a-z ,.'-]+$/i"
// "^[A-Z][\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
const alpha = helpers.regex('alpha', /\b[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?\b/i);

export default {
    data() {
      return {
        buildings,
        phoneCodes,
        formData: {
          username: "",
          email: "",
          code: "",
          tel: "",
          building: "",
          password: "",
          confirmPassword: "",
        }
      }
    },
    validations: {
      formData: {
        username: { required, alpha },
        email: { required, email },
        code: {required},
        tel: {required},
        building: {required},
        password: { 
          required,
          minLength: minLength(3),
          maxLength: maxLength(16),
        },
        confirmPassword: {
          sameAsPassword: sameAs('password')
        },
      }
    },
    computed: {

    },
    methods: {
      handleFormSubmit() {
        console.log({...this.formData});
      }
    },
    mounted() {

    },


}

</script>

<style>

form {
    margin-top: 20px;
    width: 40%;
}

fieldset {
    border-radius: 10px;
    padding: 20px;
}

input {
    flex: 0 1 100%;
    border: 1px solid;
    padding: 5px;
    border-left: 3px solid #42a948;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

select {
    border-color: black;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.8em 1.2em;
    width: 100%;
}

i {
    border: 1px solid;
    border-right: none;
    padding: 10px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #e9ecef;
}

a {
    color:  #007bff;
}

.container {
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.tel {
    padding-right: 20px;
}

.building {
    flex: 1 1 100%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

form .field {
    display: flex;
}


/* if error */

p.error {
    text-align: left;
    background-color: #f8d7da;
    padding: 8px;
    border-radius: 3px;
}

input.error {
    border-left-color:#a8413f;
}
</style>