<script setup>
import Button from "@/volt/Button.vue";
import InputText from "@/volt/InputText.vue";
import Message from "@/volt/Message.vue";
import RadioButton from "@/volt/RadioButton.vue";
import Select from "@/volt/Select.vue";
import { Form, FormField } from "@primevue/forms";
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
        <FormField>
          <InputText
            name="firstName"
            type="text"
            placeholder="First Name"
            fluid
            class="bg-white! border-transparent! focus-within:border-indigo-500! mb-1"
          />
          <Message
            v-if="$form.firstName?.invalid"
            severity="error"
            size="small"
            variant="simple"
            class="ml-1"
            >{{ $form.firstName.error.message }}</Message
          >
        </FormField>

        <FormField
          ><InputText
            name="lastName"
            type="text"
            placeholder="Last Name"
            fluid
            class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500!"
          /><Message
            v-if="$form.lastName?.invalid"
            severity="error"
            variant="simple"
            size="small"
            class="ml-1"
            >{{ $form.lastName.error.message }}</Message
          ></FormField
        >
        <FormField>
          <InputText
            name="email"
            type="email"
            placeholder="example@gamil.com"
            fluid
            class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500!"
          /><Message
            v-if="$form.email?.invalid"
            size="small"
            variant="simple"
            severity="error"
            class="ml-1"
            >{{ $form.email.error.message }}</Message
          >
        </FormField>
        <FormField>
          <InputText
            name="password"
            type="password"
            placeholder="Enter your password"
            fluid
            class="bg-white! text-gray-400! border-transparent! focus-within:border-indigo-500!"
          /><Message
            v-if="$form.password?.invalid"
            severity="error"
            size="small"
            variant="simple"
            class="ml-1"
            >{{ $form.password.error.message }}</Message
          >
        </FormField>

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
