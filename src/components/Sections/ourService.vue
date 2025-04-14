<template>
  <div class="service flex flex-col max-lg:flex-col">
    <div class="wrapper flex justify-between max-lg:flex-col">
      <div class="text-wrapper flex flex-col flex-1">
        <div class="heading flex flex-col">
          <span class="body-md-medium-uppercase">{{ OurServices.eyebrow }}</span>
          <span class="h3 max-lg:h5"
            >{{ OurServices.title.text1
            }}<span class="highlight">{{ OurServices.title.highlight }}</span></span
          >
        </div>
        <div class="body-lg-medium">
          {{ OurServices.body }}
        </div>
      </div>
      <div class="actions flex-1 flex items-center lg:justify-end max-lg:justify-start">
        <CommonButton
          text="Get Started"
          :btnType="'primary'"
          :iconPos="'right'"
          :iconName="'arrow_outward'"
          @click="handleClick('ContactUsRef')"
        />
      </div>
    </div>
    <div class="service-list">
      <template v-for="item in OurServices.Services">
        <ServiceCard :header="item.header" :body="item.body" :list="item.list" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommonButton from '../Button/CommonButton.vue'
import ServiceCard from '../ServiceCard/ServiceCard.vue'
import Data from '../../assets/Data/Data.json'

const { OurServices } = Data.section

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

const handleClick = (value: string) => {
  emit('scroll-to', value)
}
</script>

<style scoped>
.service {
  padding: var(--spacing-padding-huge-x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-8x);
}
.wrapper {
  gap: 16px;
}
.text-wrapper {
  gap: 16px;
}
.heading {
  gap: var(--spacing-padding-3x);
}
.highlight {
  color: var(--typography-color-primary-600);
}

@media (max-width: 900px) {
  .service {
    padding: var(--spacing-padding-6x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-8x);
  }
}
</style>
