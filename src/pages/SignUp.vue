<script setup>
import Button from "@/volt/Button.vue";
import InputText from "@/volt/InputText.vue";
import RadioButton from "@/volt/RadioButton.vue";
import Select from "@/volt/Select.vue";
import { Form } from "@primevue/forms";
import { ref } from "vue";

const selectedCity = ref();

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<template>
  <div class="card flex flex-col justify-center items-center min-h-screen">
    <h2 class="text-3xl font-bold mb-6">Sign Up Form</h2>
    <Form
      class="flex shadow-lg bg-gray-200 px-3 py-5 flex-col gap-4 w-full sm:w-96"
    >
      <div class="flex flex-col gap-1">
        <InputText
          name="firstName"
          type="text"
          placeholder="First Name"
          fluid
          class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500! mb-4"
        />
        <InputText
          name="lastName"
          type="text"
          placeholder="Last Name"
          fluid
          class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500! mb-4"
        />
        <InputText
          name="email"
          type="email"
          placeholder="example@gamil.com"
          fluid
          class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500! mb-4"
        />
        <InputText
          name="password"
          type="password"
          placeholder="Enter your password"
          fluid
          class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500! mb-4"
        />

        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full md:w-56 bg-white! border-0 mb-4"
        />
      </div>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton inputId="male" name="male" value="Male" />
          <label for="male">Male</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="female" name="female" value="Female" />
          <label for="female">Female</label>
        </div>
      </div>
      <Button
        type="submit"
        label="Submit"
        class="bg-indigo-500! border-0 text-white!"
      />
    </Form>
  </div>
</template>
