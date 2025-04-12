<script setup lang="ts">
import InputText from "@/volt/InputText.vue";
import Message from "@/volt/Message.vue";
import { FormField } from "@primevue/forms";

// Props declaration
defineProps<{
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string | undefined;
}>();
</script>

<template>
  <FormField>
    <InputText
      :name="name"
      :type="type"
      :placeholder="placeholder"
      fluid
      class="bg-white! border-transparent! focus-within:border-indigo-500! mb-1"
    />
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
