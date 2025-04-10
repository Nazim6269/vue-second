<script setup>
import useVuelidate from "@vuelidate/core";
import {
  alpha,
  email,
  helpers,
  maxLength,
  minLength,
  required,
} from "@vuelidate/validators";
import { reactive } from "vue";
//==========imports ended here=============//

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  checkbox: null,
  select: null,
};
const rules = {
  firstName: {
    required: helpers.withMessage("First name is required", required),
    maxLengthValue: helpers.withMessage(
      "First anme should be maximum 8 characters longs",
      maxLength(8)
    ),
    minLengthValue: helpers.withMessage(
      "First anme should be minimum 4 characters longs",
      minLength(4)
    ),
    alpha,
  },
  lastName: {
    required: helpers.withMessage("Last name is required", required),
    alpha,
    maxLengthValue: maxLength(8),
    minLengthValue: minLength(4),
  },
  email: {
    required: helpers.withMessage("Email is required", required),
    email: helpers.withMessage("Provide a valid email address", email),
  },
  password: {
    required: helpers.withMessage("Password is required", required),
    minLengthValue: helpers.withMessage(
      "Pass length at least 5 characters",
      minLength(5)
    ),
  },
};
const state = reactive({ ...initialState });
const v$ = useVuelidate(rules, state);
</script>

<template>
  <h2 class="text-3xl text-center my-3 font-bold">Sign Up Form</h2>
  <form class="w-3xl mx-auto">
    <v-text-field
      v-model="state.firstName"
      :counter="8"
      :error-messages="v$.firstName.$errors.map((e) => e.$message)"
      @blur="v$.firstName.$touch"
      @input="v$.firstName.$touch"
      label="First Name"
      variant="solo"
    ></v-text-field>
    <v-text-field
      v-model="state.lastName"
      :counter="8"
      :error-messages="v$.lastName.$errors.map((e) => e.$message)"
      @blur="v$.lastName.$touch"
      @input="v$.lastName.$touch"
      label="Last Name"
      variant="solo"
    ></v-text-field>
    <v-text-field
      label="Email"
      type="email"
      placeholder="example@gmail.com"
      hint="Enter your email"
      variant="solo"
      v-model="state.email"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
    ></v-text-field>
    <v-text-field
      label="Password"
      type="password"
      hint="Enter your password"
      variant="solo"
      :counter="5"
      :error-messages="v$.password.$errors.map((e) => e.$message)"
      @blur="v$.password.$touch"
      @input="v$.password.$touch"
    ></v-text-field>
    <v-btn variant="elevated">Submit</v-btn>
  </form>
</template>
