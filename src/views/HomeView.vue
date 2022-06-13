<template>
  <div
    class="bg-gradient-to-b flex from-primary justify-center min-h-screen text-white to-secondary"
  >
    <div class="max-w-5xl w-full">
      <header class="flex items-end p-4">
        <img
          src="@/assets/images/random_password_monster.svg"
          alt="Random Password Monster"
          class="animate-bounce antialiased h-16 mr-2"
        />
        <AppLogo />
      </header>
      <main>
        <PasswordGenerator :options="passwordOptions" class="p-4" />
        <PasswordOptions
          class="p-4"
          :options="passwordOptions"
          @toggle-option="toggleOption"
          @update-length="updateLength"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import AppLogo from '@/components/AppLogo.vue'
import PasswordGenerator from '@/components/PasswordGenerator.vue'
import PasswordOptions from '@/components/PasswordOptions.vue'

const passwordOptions = reactive({
  length: 20,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
})

const toggleOption = (option) =>
  (passwordOptions[option] = !passwordOptions[option])
const updateLength = (length) => (passwordOptions.length = length)
</script>
