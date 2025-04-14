<template>
  <div class="flex flex-col gap-[8px] min-w-0 w-full relative h-[102px]">
    <label class="w-fit">{{ label }}*</label>
    <vue-tel-input
      ref="telField"
      mode="international"
      class="h-[48px]"
      :class="isError && isFocused && telField !== '' && 'error'"
      styleClasses="tel"
      :inputOptions="inputOptions"
      :dropdownOptions="dropDownOption"
      :autoDefaultCountry="true"
      :validCharactersOnly="true"
      :enable-validate="true"
      @validate="checkValidity"
      @focus="isFocused = true"
    ></vue-tel-input>
    <div
      class="message text-[12px]/[12px] text-[rgb(176,0,32)] font-semibold"
      v-if="isError && isFocused && telField !== ''"
    >
      Please Enter a valid Phone number
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhoneData } from '../../assets/Type/type'
import { watch } from 'vue'

const props = defineProps<{
  autoFocus: boolean
  label?: string
  modelValue: string | undefined
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void
}>()

const isError = ref(true)
const isFocused = ref(false)
const telField = ref()

const dropDownOption = {
  showDialCodeInSelection: false,
  showDialCodeInList: true,
  showFlags: true,
  showSearchBox: false,
}
const inputOptions = {
  placeholder: '',
}

watch(
  () => props.autoFocus,
  () => {
    if (telField.value) {
      telField.value?.focus()
    }
  },
)

const checkValidity = (value: PhoneData) => {
  isError.value = true
  if (value.valid) {
    isError.value = false
    emit('update:modelValue', value.formatted)
  } else {
    emit('update:modelValue', undefined)
  }
}
</script>

<style scoped>
.tel {
  border: 1px solid var(--surface-secondary-200);
  border-radius: var(--border-radius-xs);
}

.tel.error {
  border-color: rgb(176, 0, 32);
}

.tel:focus-within {
  box-shadow: none;
  border-width: 2px;
  border-color: black;
}
.tel.tel.error:focus-within {
  border-color: rgb(176, 0, 32);
  border-width: 2px;
}
</style>
