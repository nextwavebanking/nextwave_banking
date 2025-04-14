<template>
  <div class="inline-block">
    <!-- Tooltip Box -->
    <div
      class="absolute bottom-[-20px] left-[30%] w-max bg-white border border-black-300 shadow-md rounded p-2 z-10"
    >
      <!-- Arrow -->
      <div
        class="absolute left-2 top-[-2px] w-3 h-3 bg-white border-l border-t border-gray-300 rotate-45 -mt-1"
      ></div>

      <!-- Content -->
      <div class="flex items-center gap-2">
        <div
          class="w-5 h-5 flex items-center justify-center bg-orange-400 text-white text-sm font-bold leading-none"
        >
          !
        </div>
        <span class="text-sm text-black">Please fill a valid number.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
