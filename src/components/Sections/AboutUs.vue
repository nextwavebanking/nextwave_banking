<template>
  <div class="about-us flex max-lg:flex-col">
    <div class="heading flex flex-col flex-1">
      <span class="body-md-medium-uppercase">{{ About.eyebrow }}</span>
      <span class="h3 max-lg:h5"
        >{{ About.title.text1 }} <span class="highlight">{{ About.title.highlight }}</span
        >{{ About.title.text2 }}</span
      >
    </div>
    <div class="flex flex-1 body-lg-medium flex-col gap-[var(--spacing-padding-6x)]">
      <p>{{ About.body[0] }}</p>
      <p>{{ About.body[1] }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Data from '../../assets/Data/Data.json'
const { About } = Data.section
</script>

<style scoped>
.about-us {
  padding: var(--spacing-padding-huge-x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-16x);
}
.heading {
  gap: var(--spacing-padding-3x);
}
.highlight {
  color: var(--typography-color-primary-600);
}

@media (max-width: 900px) {
  .about-us {
    padding: var(--spacing-padding-10x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-5x);
  }
}
</style>
