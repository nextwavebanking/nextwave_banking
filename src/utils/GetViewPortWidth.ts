import { onMounted, onUnmounted, ref } from 'vue'

export const GetViewPortWidth = () => {
  const innerWidth = ref(window.innerWidth)

  const handleResize = () => {
    innerWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    innerWidth,
  }
}
