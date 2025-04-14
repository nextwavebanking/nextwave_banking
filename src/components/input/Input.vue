<template>
  <div class="flex flex-col gap-[8px] min-w-0 w-full">
    <label class="w-fit">{{ label }}*</label>
    <div class="flex gap-[8px]">
      <component
        :is="isTextarea ? 'textarea' : 'input'"
        class="input w-full"
        :type="type"
        :value="modelValue"
        :required="!isTextarea"
        @input="(e: any) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | boolean): void
}>()

withDefaults(
  defineProps<{
    label: string
    modelValue: string | boolean
    type?: 'text' | 'email' | 'number' | 'checkbox' | 'password'
    countryCode?: { id: number; code: string }[]
    isTextarea?: boolean
  }>(),
  {
    isTextarea: false,
    type: 'text',
  },
)
</script>

<style scoped lang="scss">
input {
  border: 1px solid var(--surface-secondary-200);
  border-radius: var(--border-radius-xs);
  padding: 10px 20px;
}

textarea {
  resize: none;
  height: 66px;
  border: 1px solid var(--surface-secondary-200);
  border-radius: var(--border-radius-xs);
  padding: 10px 20px;
}
</style>
