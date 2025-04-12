<script setup>
import CustomFormField from "@/components/CustomFormField.vue";
import Button from "@/volt/Button.vue";
import RadioButton from "@/volt/RadioButton.vue";
import Select from "@/volt/Select.vue";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { reactive, ref } from "vue";
import { z } from "zod";

const selectedCity = ref();

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const resolver = ref(
  zodResolver(
    z.object({
      firstName: z.string().min(1, { message: "First name is required" }),
      lastName: z.string().min(1, { message: "Last name is required" }),
      email: z.string().email({ message: "Provide a valid email" }).trim(),
      password: z
        .string()
        .min(4, { message: "Password length must be minimum 4" }),
    })
  )
);

const formInitialValues = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const onFormSubmit = () => {};
</script>

<template>
  <div class="card flex flex-col justify-center items-center min-h-screen">
    <h2 class="text-3xl font-bold mb-6">Sign Up Form</h2>
    <Form
      :initial-values="formInitialValues"
      :validateOnBlur="true"
      :validate-on-mount="['firstName']"
      :resolver
      @submit="onFormSubmit"
      v-slot="$form"
      class="flex shadow-lg bg-gray-200 px-3 py-5 flex-col gap-4 w-full sm:w-96"
    >
      <div class="flex flex-col gap-1">
        <CustomFormField
          :error-message="$form.firstName?.error?.message"
          name="firstName"
          placeholder="First Name"
          type="text"
        />

        <CustomFormField
          :error-message="$form.lastName?.error?.message"
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        <CustomFormField
          :error-message="$form.email?.error?.message"
          name="email"
          placeholder="example@gmail.com"
          type="email"
        />
        <CustomFormField
          :error-message="$form.password?.error?.message"
          name="password"
          placeholder="Enter your password"
          type="text"
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
