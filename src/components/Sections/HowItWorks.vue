<template>
  <div class="how-it-works flex flex-col">
    <div class="wrapper flex max-lg:flex-col">
      <div class="text-wrapper flex flex-col flex-1">
        <span class="body-md-medium-uppercase">{{ HowItWorks.eyebrow }}</span>
        <span class="h3 max-lg:h5"
          >{{ HowItWorks.title.text1 }}
          <span class="highlight">{{ HowItWorks.title.highlight }}</span></span
        >
      </div>
      <div class="action flex items-center">
        <CommonButton
          text="Learn More"
          :btnType="'primary'"
          :iconPos="'right'"
          :iconName="'arrow_outward'"
          @click="handleClick('ContactUsRef')"
        />
      </div>
    </div>
    <div class="cards flex max-lg:flex-col">
      <template v-for="item in HowItWorks.cards">
        <div class="w-full">
          <CardContainer
            :header="item.header"
            :body="item.body"
            :icon-name="item.iconName"
            :cardType="'white'"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardContainer from '../Card/CardContainer.vue'
import CommonButton from '../Button/CommonButton.vue'
import Data from '../../assets/Data/Data.json'

const { HowItWorks } = Data.section

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

const handleClick = (value: string) => {
  emit('scroll-to', value)
}
</script>

<style scoped>
.how-it-works {
  padding: var(--spacing-padding-huge-x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-8x);
}
.text-wrapper {
  gap: var(--spacing-padding-3x);
}
.cards {
  gap: var(--spacing-padding-4x);
}

@media (max-width: 900px) {
  .how-it-works {
    padding: var(--spacing-padding-6x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-6x);
  }
  .wrapper {
    gap: 32px;
  }
}
</style>
