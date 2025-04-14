<template>
  <div
    class="hero-section flex justify-between sm:h-screen-minus-96 max-lg:flex-col max-sm:justify-normal max-sm:h-fit"
  >
    <div
      class="hero-content relative flex flex-col items-start justify-end w-[60%] max-lg:w-[100%]"
    >
      <div
        class="hero-animation absolute w-[900px] h-[675px] z-[-1] left-[-306px] top-[-80px] max-lg:hidden"
      >
        <img :src="gif" class="w-full h-full" />
      </div>
      <div class="hero-wrapper flex flex-col z-100">
        <div class="hero-text flex flex-col">
          <div class="hero-services" :class="serviceText">
            {{ HeroSection.eyebrow }}
          </div>
          <span class="hero-header h3 max-lg:h5">
            <span class="highlight">{{ HeroSection.title.highlight }}</span>
            {{ HeroSection.title.text2 }}
          </span>
        </div>
        <div class="actions flex max-lg:flex-col">
          <CommonButton
            text="Book a Consultation"
            :btn-type="'primary'"
            :icon-pos="'right'"
            :icon-name="'arrow_outward'"
            @click="handleClick('ContactUsRef')"
          />
          <CommonButton text="About Us" :btn-type="'outlined'" @click="handleClick('AboutUsRef')" />
        </div>
      </div>
    </div>
    <div
      class="hero-img w-[40%] max-lg:w-[100%] lg:flex-1 max-lg:h-[100%] max-lg:1/4 max-sm:aspect-square max-sm:h-fit"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CommonButton from '../Button/CommonButton.vue'
import { GetViewPortWidth } from '../../utils/GetViewPortWidth'
import Data from '../../assets/Data/Data.json'

const { HeroSection } = Data.section
const { innerWidth } = GetViewPortWidth()

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

/// Need some change

const serviceText = computed(() => {
  if (innerWidth.value <= 375) return 'body-md-regular'
  else if (innerWidth.value <= 900) return 'Body-md-medium'
  else return 'Body-lg-medium'
})

const gif = new URL('../../assets/log/HeroGIf.gif', import.meta.url).href

const handleClick = (value: string) => {
  emit('scroll-to', value)
}
</script>

<style scoped>
.hero-img {
  overflow: hidden;
  background-image: url('../../assets//log//H.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--border-radius-md);
}

.hero-section {
  padding: var(--spacing-padding-16x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-16x);
}

.actions,
.hero-wrapper {
  gap: var(--spacing-padding-4x);
}

.hero-text {
  gap: var(--spacing-padding-x);
}

.hero-header {
  color: var(--typography-color-secondary-1000);
}
.hero-services {
  padding: var(--spacing-padding-x) 0;
  color: var(--typography-color-secondary-800);
}
.highlight {
  color: var(--typography-color-primary-600);
}

@media (max-width: 900px) {
  .hero-section {
    padding: var(--spacing-padding-10x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-4x);
  }
}
</style>
