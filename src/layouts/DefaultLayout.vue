<template>
  <div
    class="bg-gradient-to-b flex from-primary justify-center min-h-screen pb-4 text-white to-secondary"
  >
    <div class="max-w-5xl w-full">
      <AppHeader />
      <slot />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>
