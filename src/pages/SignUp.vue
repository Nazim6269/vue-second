<script setup>
import CustomFormField from "@/components/CustomFormField.vue";
import { signUpSchema } from "@/schemas/signUpSchema";
import Button from "@/volt/Button.vue";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { reactive, ref } from "vue";

const selectedCity = ref();

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const resolver = zodResolver(signUpSchema);

const formInitialValues = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const onFormSubmit = (values) => {
  console.log(values);
};
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
        <!-- for first name -->
        <CustomFormField
          :error-message="$form.firstName?.error?.message"
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        <!-- for last name -->
        <CustomFormField
          :error-message="$form.lastName?.error?.message"
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        <!-- for email -->
        <CustomFormField
          :error-message="$form.email?.error?.message"
          name="email"
          placeholder="example@gmail.com"
          type="email"
        />
        <!-- for password -->
        <CustomFormField
          :error-message="$form.password?.error?.message"
          name="password"
          placeholder="Enter your password"
          type="text"
        />
        <!-- for select -->
        <CustomFormField
          :options="cities"
          type="select"
          placeholder="select"
          name="select"
          error-message=""
        />
      </div>
      <!-- for radion -->
      <CustomFormField type="radio" error-message="" />

      <!-- submit button -->
      <Button
        type="submit"
        label="Submit"
        class="bg-indigo-500! border-0 text-white!"
      />
    </Form>
  </div>
</template>
