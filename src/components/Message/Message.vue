<template>
  <v-form
    class="message flex flex-col h-fit w-full max-w-[485px]"
    @submit.prevent="handleMessageSendClick"
  >
    <div class="message-header">
      <span class="body-lg-medium"
        >Fill out the form and a sales or support expert will be in touch right away.</span
      >
    </div>
    <div class="flex flex-col gap-[8px]">
      <div class="name flex justify-between w-full gap-[14px]">
        <VInputField :label="'First Name'" v-model="firstName" :type="'text'" />
        <VInputField :label="'Second Name'" v-model="secondName" />
      </div>
      <VInputField :label="'Business Email'" v-model="businessEmail" :type="'email'" />
      <TelInput :label="'Phone Number'" v-model="phone" :auto-focus="isValidPhoneNumber" />
      <VInputField :label="'Company Name'" v-model="companyName" />
      <Input :label="'How can we help? (optional)'" v-model="help" :is-textarea="true" />
      <div class="check gap-[10px] flex">
        <input type="checkbox" v-model="isCheck" />
        <span
          >Yes, I'd like to receive occasional news and tips on how to expand my business
          internationally</span
        >
      </div>
    </div>
    <div class="message-action">
      <button class="messageBtn">Sent Message</button>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '../input/Input.vue'
import TelInput from '../input/TelInput.vue'
import { userDataType } from '../../assets/Type/type'
import VInputField from '../input/VInputField.vue'

const firstName = ref<string>('')
const secondName = ref<string>('')
const businessEmail = ref<string>('')
const phone = ref<string>()
const companyName = ref<string>('')
const help = ref<string>('')
const isCheck = ref<boolean>(true)
const isValidPhoneNumber = ref<boolean>(false)

const handleMessageSendClick = () => {
  if (!phone.value || phone.value === '' || phone.value === ' ') {
    isValidPhoneNumber.value = !isValidPhoneNumber.value
    return
  }
  const data: userDataType = {
    firstName: firstName.value,
    secondName: secondName.value,
    businessEmail: businessEmail.value,
    phone: phone.value,
    companyName: companyName.value,
    help: help.value,
    isCheck: isCheck.value,
  }
  console.log(data)
  sendMessage(data)
  clearFields()
}

const sendMessage = (data: userDataType) => {
  const whatSupsAppNumber = '971563044605'
  let whatsappUrl = `https://wa.me/${whatSupsAppNumber}?text=Customer%20Name:${data.firstName}%20${data.secondName}%0ABusiness%20Email:${data.businessEmail}%0APhone:${data.phone}%0ACompanyName:${data.companyName}%0AHelp:${data.help}%0AIsCheck:${data.isCheck}`
  window.open(whatsappUrl, '_blank')?.focus()
}

const clearFields = () => {
  firstName.value = ''
  secondName.value = ''
  businessEmail.value = ''
  phone.value = ''
  companyName.value = ''
  help.value = ''
  isCheck.value = true
}
</script>

<style scoped>
.message {
  padding: var(--spacing-padding-10x);
  gap: var(--spacing-padding-8x);
  border-radius: var(--border-radius-md);
  background-color: var(--surface-secondary-0);
}

.messageBtn {
  padding: var(--spacing-padding-3x) var(--spacing-padding-6x);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-primary-600);
  width: 100%;
  text-align: center;
  border-radius: var(--border-radius-rd);
  color: white;
}

@media (max-width: 900px) {
  .message {
    padding: var(--spacing-padding-6x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-6x);
  }
}
</style>
