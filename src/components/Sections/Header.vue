<template>
  <div
    class="header w-[100%] h-fit flex sticky justify-between items-center z-50 top-0 max-w-[100%]"
  >
    <div class="icon max-lg:h-[28px] max-lg:w-[114px]">
      <img :src="nextWave" alt="Logo" class="w-[100%] h-[100%]" @click.stop="handleClick('top')" />
    </div>
    <div
      class="buttons"
      :class="{ show: showList && isWidthMin, hide: showList === false && isWidthMin }"
    >
      <CommonButton
        text="About Us"
        :btnType="'ghost'"
        :widthType="isWidthMin ? 'full' : 'fit'"
        @click="handleClick('AboutUsRef')"
      />
      <CommonButton
        text="Service"
        :btnType="'ghost'"
        :widthType="isWidthMin ? 'full' : 'fit'"
        @click="handleClick('ServiceRef')"
      />
      <CommonButton
        text="Process"
        :btnType="'ghost'"
        :widthType="isWidthMin ? 'full' : 'fit'"
        @click="handleClick('HowItWorksRef')"
      />
      <CommonButton
        text="Contact Us"
        :btnType="'primary'"
        :iconPos="'right'"
        :iconName="'arrow_outward'"
        :widthType="isWidthMin ? 'full' : 'fit'"
        @click="handleClick('ContactUsRef')"
      />
    </div>
    <div class="three-line-button flex lg:hidden" ref="buttonsRef">
      <ThreeLineButton v-model="showList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CommonButton from '../Button/CommonButton.vue'
import ThreeLineButton from '../Button/ThreeLineButton.vue'
import { GetViewPortWidth } from '../../utils/GetViewPortWidth'
import { watch } from 'vue'

const nextWave = new URL('../../assets/log/Logo Next Wave 1.svg', import.meta.url).href
const showList = ref<boolean | undefined>()
const buttonsRef = ref()
const { innerWidth } = GetViewPortWidth()

const props = defineProps<{
  isClickedOutside: boolean
}>()

const emit = defineEmits<{
  (e: 'scroll-to', value: string): void
}>()

const isWidthMin = computed(() => innerWidth.value < 900)

watch(
  () => isWidthMin.value,
  (value) => {
    if (!value) clearState()
  },
)

watch(
  () => props.isClickedOutside,
  () => clearState(),
)

const handleClick = (value: string) => {
  emit('scroll-to', value)
  clearState()
}

const clearState = () => {
  showList.value = undefined
}
</script>

<style scoped>
.header {
  padding: var(--spacing-padding-6x) var(--spacing-padding-20x);
  background-color: var(--surface-secondary-0);
}

@media (max-width: 900px) {
  .header {
    padding: var(--spacing-padding-4x);
  }

  .buttons {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    left: 0;
    top: 60px;
    background-color: var(--surface-secondary-0);
    padding: var(--spacing-padding-6x) var(--spacing-padding-4x);
    gap: var(--spacing-padding-2x);
    transform: translateY(-500px);
  }

  .buttons.show {
    animation: animate 0.1s ease-in;
    transform: translateY(0px);
  }

  .buttons.hide {
    animation: animateTwo 0.1s ease-in;
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes animateTwo {
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
}
</style>
