<template>
  <div class="footer flex flex-col">
    <div class="footer-header">
      <div class="footer-icon flex justify-between max-lg:flex-col max-lg:gap-[36px]">
        <img :src="nextWave" alt="Logo" class="w-[146px] h-[36px]" />
        <div class="flex lg:justify-end gap-[40px] max-lg:justify-start">
          <img :src="instagramIcon" alt="" />
          <img :src="xIcon" alt="" />
          <img :src="youTubeIcon" alt="" />
          <img :src="LinkedInIcon" alt="" />
        </div>
      </div>
    </div>
    <div class="footer-body gap-[135px]">
      <div class="text-wrapper flex max-2xl:flex-col gap-[24px]">
        <div class="contact-us flex flex-col w-full">
          <span class="footer-list-header body-md-medium-uppercase">{{
            Footer.contactUs.title
          }}</span>
          <span class="body-lg-medium">{{ Footer.contactUs.body }}</span>
          <span class="body-lg-medium">{{ Footer.contactUs.email }}</span>
          <span class="body-lg-medium">{{ Footer.contactUs.phone }}</span>
        </div>
        <div class="gap-[14px] flex flex-col w-full">
          <span class="footer-list-header body-md-medium-uppercase">Quick Links</span>
          <div class="flex flex-col">
            <template v-for="item in Footer.quickLinks">
              <span class="item link" @click="handleClick(item.value)">{{ item.text }}</span>
            </template>
          </div>
        </div>
        <div class="gap-[14px] flex flex-col w-full">
          <span class="footer-list-header body-md-medium-uppercase">Services</span>
          <div class="flex flex-col">
            <template v-for="item in Footer.services">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-end flex justify-between items-center max-2xl:flex-col max-2xl:items-start">
      <span class="body-lg-medium">© 2025 Nextwave</span>
      <div class="flex gap-[40px]">
        <span class="body-lg-medium">Privacy Policy</span>
        <span class="body-lg-medium">Terms & Conditions</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Data from '../../assets/Data/Data.json'

const { Footer } = Data.section

const nextWave = new URL('../../assets/log/Logo Next Wavesmall.jpg', import.meta.url).href
const instagramIcon = new URL('../../assets/log/Vector.svg', import.meta.url).href
const xIcon = new URL('../../assets/log/Vector (2).svg', import.meta.url).href
const youTubeIcon = new URL('../../assets/log/Vector (5).svg', import.meta.url).href
const LinkedInIcon = new URL('../../assets/log/linkedin.svg', import.meta.url).href

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

const handleClick = (value: string) => {
  emit('scroll-to', value)
}
</script>

<style scoped>
.footer {
  padding: var(--spacing-padding-10x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-16x);
}

.contact-us {
  gap: 17px;
  color: var(--typography-color-secondary-700);
}

.footer-list-header {
  color: var(--typography-color-primary-600);
}

.item {
  color: var(--typography-color-secondary-1000);
  padding: var(--spacing-padding-x) 0;
}
.footer-end {
  color: var(--typography-color-secondary-1000);
  gap: var(--spacing-padding-3x);
}

.link:hover {
  color: blue;
}

@media (max-width: 900px) {
  .footer {
    padding: var(--spacing-padding-6x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-8x);
  }
  .text-wrapper {
    gap: var(--spacing-padding-10x);
  }
}
</style>
