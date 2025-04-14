<template>
  <div class="flex flex-col gap-[8px] min-w-0 w-full">
    <label class="w-fit">{{ label }}*</label>
    <v-text-field
      :type="type"
      variant="outlined"
      :rules="[...rule]"
      @input="(e: any) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    ></v-text-field>
  </div>
</template>

<script setup lang="ts">
import isEmail from 'validator/es/lib/isEmail'
import { computed } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | boolean): void
}>()

const props = withDefaults(
  defineProps<{
    label: string
    modelValue: string | boolean
    type?: 'text' | 'email' | 'number' | 'checkbox' | 'password'
    isTextarea?: boolean
  }>(),
  {
    type: 'text',
  },
)

const rule = computed(() => {
  switch (props.type) {
    case 'email':
      return emailRule
    case 'number':
      return requiredRule
    case 'checkbox':
      return undefined
    case 'text':
      return requiredRule
    case 'password':
      return requiredRule
    default:
      return requiredRule
  }
})

const requiredRule = [(value: string) => !!value?.trim() || 'Required']
const emailRule = [(value: string) => (!!value && isEmail(value)) || 'Format is incorrect']
</script>

<style scoped></style>
