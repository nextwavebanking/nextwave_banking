<template>
  <div class="service-item flex py-[40px] justify-between h-fit max-lg:flex-col">
    <span class="header flex flex-1 h3 max-lg:h6">{{ header }}</span>
    <div class="wrapper flex flex-col flex-1">
      <span class="body-lg-medium body">{{ body }}</span>
      <div class="list flex flex-col">
        <template v-for="item in list">
          <div class="item flex flex-row items-center">
            <span class="material-symbols-outlined text-xs h-[16px] icon">
              {{ item.icon }}
            </span>
            <span class="body-lg-medium">{{ item.text }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  header: string
  body: string
  list: { icon: string; text: string }[]
}>()
</script>
<style scoped>
.service-item {
  gap: var(--spacing-padding-16x);
}

.header {
  color: var(--typography-color-secondary-1000);
}

.wrapper {
  gap: var(--spacing-padding-4x);
}

.list {
  gap: var(--spacing-padding-2x);
}

.body {
  color: var(--typography-color-secondary-900);
}

.item {
  gap: var(--spacing-padding-3x);
  color: var(--typography-color-secondary-900);
}
.icon {
  color: var(--surface-primary-600);
}

@media (max-width: 900px) {
  .service-item {
    padding: var(--spacing-padding-6x) 0;
    gap: var(--spacing-padding-6x);
  }
}
</style>
