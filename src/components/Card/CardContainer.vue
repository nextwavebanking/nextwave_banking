<template>
  <div class="card_container" :class="cardType">
    <div class="wrapper" :class="contentFull">
      <div class="icon">
        <span class="material-symbols-outlined"> {{ iconName }} </span>
      </div>
      <div class="text-wrapper flex flex-col">
        <span class="header h5">{{ header }}</span>
        <span class="body body-lg-regular flex flex-col gap-[var(--spacing-padding-4x)]">
          <template v-for="item in body">
            <p>{{ item }}</p>
          </template>
        </span>
      </div>
    </div>
    <div class="actions">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string
  cardType: 'blue' | 'light' | 'white'
  header: string
  body: string[]
  contentFull?: 'full'
}>()
</script>

<style scoped>
.card_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-padding-6x) var(--spacing-padding-5x);
  gap: var(--spacing-padding-3x);
  height: 100%;
}
.card_container.light {
  background-color: var(--surface-primary-100);
}
.card_container.blue {
  background-color: var(--surface-primary-600);
  color: var(--typography-color-secondary-0);
}
.card_container.white {
  background-color: transparent;
  color: var(--typography-color-secondary-1000);
  border: 1px solid var(--surface-secondary-100);
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-padding-3x);
  height: fit-content;
}

.wrapper.full {
  height: 100%;
}
.wrapper.full .text-wrapper {
  height: 100%;
  justify-content: space-between;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-padding-4x);
  border-radius: var(--border-radius-rd);
  width: fit-content;
  height: fit-content;
}
.card_container.light .icon {
  background-color: var(--surface-primary-600);
  color: var(--surface-secondary-0);
}
.card_container.blue .icon {
  background-color: var(--surface-secondary-0);
  color: var(--surface-primary-600);
}
.card_container.white .icon {
  background-color: var(--surface-primary-600);
  color: var(--surface-primary-100);
}
.text-wrapper {
  gap: var(--spacing-padding-x);
}
</style>
