<template>
  <button
    class="three-line-button w-[24px] h-[24px] flex flex-col relative justify-between px-[3px] py-[6px] overflow-hidden"
    :class="modelValue && 'active'"
    @click.stop="handleClick"
  >
    <span class="w-[100%] h-[2px] bg-black"></span>
    <span class="w-[100%] h-[2px] bg-black"></span>
    <span class="w-[100%] h-[2px] bg-black"></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean | undefined
}>()

const emit = defineEmits<{
  (e: 'click'): void
  (e: 'update:modelValue', value: boolean | undefined): void
}>()

const handleClick = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.three-line-button.active {
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.three-line-button.active span:nth-child(1) {
  position: absolute;
  width: 90%;
  transform: rotate(45deg);
  animation: rotate 0.3s ease-in-out forwards;
}

.three-line-button.active span:nth-child(3) {
  position: absolute;
  width: 90%;
  transform: rotate(-45deg);
  animation: rotateback 0.3s ease-in-out forwards;
}

.three-line-button.active span:nth-child(2) {
  display: none;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes rotateback {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>
