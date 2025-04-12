<script setup lang="ts">
import InputText from "@/volt/InputText.vue";
import Message from "@/volt/Message.vue";
import RadioButton from "@/volt/RadioButton.vue";
import Select from "@/volt/Select.vue";
import { FormField } from "@primevue/forms";

// Props declaration
defineProps<{
  name?: string;
  type: string;
  placeholder?: string;
  errorMessage: string | undefined;
  options?: { name: string; code: string }[];
}>();
</script>

<template>
  <FormField>
    <!--============= Input field========== -->
    <template v-if="type === 'text'">
      <InputText
        :name="name"
        :type="type"
        :placeholder="placeholder"
        fluid
        class="bg-white! border-transparent! focus-within:border-indigo-500! mb-1"
      />
    </template>

    <!--============ select field =============-->
    <template v-if="type === 'select'">
      <Select
        :options="options"
        optionLabel="name"
        :placeholder="placeholder"
        class="w-full bg-white! border-transparent! mb-1"
    /></template>

    <!-- ========== radio group ========== -->
    <template v-if="type === 'radio'"
      ><div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton inputId="male" name="male" value="Male" />
          <label for="male">Male</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="female" name="female" value="Female" />
          <label for="female">Female</label>
        </div>
      </div></template
    >
    <Message
      v-if="errorMessage"
      severity="error"
      size="small"
      variant="simple"
      class="ml-1"
    >
      {{ errorMessage }}
    </Message>
  </FormField>
</template>
