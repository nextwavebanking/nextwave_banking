<template>
  <div class="why-we flex flex-col">
    <div class="header flex flex-col">
      <span class="body-md-medium-uppercase">{{ WhyChooseUs.eyebrow }}</span>
      <span class="h3 max-lg:h5"
        >{{ WhyChooseUs.title.text1
        }}<span class="highlight">{{ WhyChooseUs.title.highlight }}</span
        >{{ WhyChooseUs.title.text2 }}</span
      >
    </div>
    <div class="card-wrapper flex max-2xl:flex-col">
      <div class="card grid w-[70%] max-2xl:w-full grid-cols-2 max-lg:grid-cols-1 flex-1">
        <template v-for="item in WhyChooseUs.cards">
          <CardContainer
            :header="item.header"
            :body="item.body"
            :icon-name="item.iconName"
            :cardType="'light'"
          />
        </template>
      </div>
      <div class="w-[30%] max-2xl:w-full">
        <CardContainer
          :header="WhyChooseUs.specialcard.header"
          :body="WhyChooseUs.specialcard.body"
          :icon-name="WhyChooseUs.specialcard.iconName"
          :cardType="'blue'"
        >
          <template #button>
            <CommonButton
              text="Contact Us"
              :btnType="'light'"
              :iconPos="'right'"
              :iconName="'arrow_outward'"
              @click="handleClick('ContactUsRef')"
            /> </template
        ></CardContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardContainer from '../Card/CardContainer.vue'
import CommonButton from '../Button/CommonButton.vue'
import Data from '../../assets/Data/Data.json'

const { WhyChooseUs } = Data.section

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

const handleClick = (value: string) => {
  emit('scroll-to', value)
}
</script>

<style scoped>
.why-we {
  padding: var(--spacing-padding-huge-x) var(--spacing-padding-20x);
  gap: var(--spacing-padding-8x);
}
.header {
  gap: var(--spacing-padding-3x);
}

.card-wrapper {
  gap: var(--spacing-padding-4x);
}

.card {
  grid-gap: var(--spacing-padding-4x);
}

@media (max-width: 900px) {
  .why-we {
    padding: var(--spacing-padding-10x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-6x);
  }
}
</style>
