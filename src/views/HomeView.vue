<template>
  <div
    class="bg-gradient-to-b flex from-primary justify-center min-h-screen text-white to-secondary"
  >
    <div class="max-w-5xl w-full">
      <header class="p-4">
        <AppLogo />
      </header>
      <main class="p-4">
        <p>
          {{
            generatePassword({
              length: 20,
              lowercase: true,
              uppercase: true,
              numbers: true,
              symbols: true,
            })
          }}
        </p>
      </main>
    </div>
  </div>
</template>

<script setup>
import AppLogo from '@/components/AppLogo.vue'
import generatePassword from '@/utils/generate-password'
</script>
