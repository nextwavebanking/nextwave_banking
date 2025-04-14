<template>
  <div class="contact-us flex max-2xl:flex-col">
    <div class="help flex-1 flex flex-col justify-between">
      <div class="help-header flex flex-col">
        <span class="body-lg-medium-uppercase">{{ ContactUs.eyebrow }}</span>
        <span class="h3 max-lg:h5"
          >{{ ContactUs.title.text1 }}<span class="highlight">{{ ContactUs.title.highlight }}</span
          >{{ ContactUs.title.text2 }}</span
        >
        <span class="body-lg-regular">{{ ContactUs.body }}</span>
      </div>
      <div class="help-contact flex flex-col">
        <div class="flex items-center content-wrapper">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined" style="font-size: 12px; color: white">{{
              ContactUs.help.phone.icon
            }}</span>
          </div>
          <span class="body-xl-medium max-lg:body-lg-medium">{{ ContactUs.help.phone.text }}</span>
        </div>
        <div class="flex items-center content-wrapper">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined" style="font-size: 12px; color: white">{{
              ContactUs.help.mail.icon
            }}</span>
          </div>
          <span class="body-xl-medium max-lg:body-lg-medium">{{ ContactUs.help.mail.text }}</span>
        </div>
        <div class="flex items-center content-wrapper">
          <div class="icon-wrapper">
            <span class="material-symbols-outlined" style="font-size: 12px; color: white">{{
              ContactUs.help.fare.icon
            }}</span>
          </div>
          <span class="body-xl-medium max-lg:body-lg-medium">{{ ContactUs.help.fare.text }}</span>
        </div>
      </div>
      <div class="help-img flex justify-center">
        <img :src="helpImg" alt="" />
      </div>
    </div>
    <div class="action flex-1 flex items-center justify-center w-[50%] max-2xl:w-full">
      <Message />
    </div>
  </div>
</template>

<script setup lang="ts">
import Message from '../Message/Message.vue'
import Data from '../../assets/Data/Data.json'

const { ContactUs } = Data.section
const helpImg = new URL('../../assets/log/Image.jpg', import.meta.url).href
</script>

<style scoped>
.action {
  background-color: var(--surface-primary-600);
  padding: var(--spacing-padding-16x) var(--spacing-padding-20x);
}

.help {
  padding: var(--spacing-padding-16x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-20x);
}

.help-header {
  gap: var(--spacing-padding-4x);
}

.help-contact {
  gap: var(--spacing-padding-3x);
}

.icon-wrapper {
  padding: var(--spacing-padding-2x);
  border-radius: var(--border-radius-rd);
  background-color: var(--surface-primary-600);
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
}

.content-wrapper {
  gap: var(--spacing-padding-4x);
  color: var(--typography-color-secondary-700);
}

@media (max-width: 900px) {
  .help {
    padding: var(--spacing-padding-10x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-6x);
  }
  .action {
    padding: var(--spacing-padding-10x) var(--spacing-padding-4x);
  }
}
</style>
