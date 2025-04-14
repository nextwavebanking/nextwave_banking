<template>
  <button
    :class="[btnType, widthType, 'group']"
    class="commonButton"
    :disabled="disabled"
    @click="() => emit('click')"
  >
    <div class="icon-wrapper flex w-[24px] h-[24px]" v-if="iconPos === 'left'">
      <span
        class="material-symbols-outlined w-full h-full group-hover:animate-bounceIcon"
        :style="{ color: iconColor }"
      >
        {{ iconName }}
      </span>
    </div>
    <span>{{ text }}</span>
    <div class="icon-wrapper flex w-[24px] h-[24px]" v-if="iconPos === 'right'">
      <span
        class="material-symbols-outlined w-full h-full group-hover:animate-bounceIcon"
        :style="{ color: iconColor }"
      >
        {{ iconName }}
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  btnType: 'primary' | 'secondary' | 'ghost' | 'outlined' | 'disabled' | 'light'
  iconPos?: 'left' | 'right'
  widthType?: 'full' | 'fit'
  disabled?: boolean
  iconName?: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const iconColor = computed(() => {
  switch (props.btnType) {
    case 'primary':
      return 'white'
    case 'secondary':
      return 'white'
    case 'ghost':
      return '#1D1D1D '
    case 'outlined':
      return '#1D1D1D'
    case 'light':
      return '#1D1D1D'
    case 'disabled':
      return 'white'
  }
})
</script>

<style scoped>
.commonButton {
  display: inline-flex;
  padding: var(--spacing-padding-3x) var(--spacing-padding-6x);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-padding-2x);
  width: fit-content;
  height: fit-content;
  border-radius: var(--border-radius-rd);
}
.commonButton.full {
  width: 100%;
}
.commonButton.fit {
  width: fit-content;
}

.commonButton.primary {
  background-color: var(--surface-primary-600);
  color: var(--typography-color-secondary-0);
}
.commonButton.secondary {
  background-color: var(--surface-secondary-1000);
  color: var(--typography-color-secondary-0);
}
.commonButton.ghost {
  color: var(--typography-color-secondary-1000);
}
.commonButton.outlined {
  color: var(--typography-color-secondary-1000);
  box-shadow: inset 0 0 0 var(--border-stroke-one) var(--surface-secondary-1000);
}
.commonButton.light {
  background-color: var(--surface-secondary-0);
  color: var(--typography-color-secondary-1000);
}
.commonButton.disabled {
  color: var(--typography-color-secondary-0);
  background-color: var(--surface-secondary-200);
}
</style>
