<template>
  <div
    class="bg-gradient-to-b flex from-primary justify-center min-h-screen text-white to-secondary"
  >
    <div class="max-w-5xl w-full">
      <header class="p-4">
        <AppLogo />
      </header>
      <main>
        <PasswordGenerator :options="passwordOptions" class="p-4" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import PasswordGenerator from '@/components/PasswordGenerator.vue'

const passwordOptions = reactive({
  length: 20,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
})
</script>
