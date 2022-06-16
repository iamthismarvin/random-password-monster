<template>
  <div
    class="bg-gradient-to-b flex from-primary justify-center min-h-screen text-white to-secondary"
  >
    <div class="max-w-5xl w-full">
      <header class="flex justify-between p-4">
        <div class="flex items-end">
          <img
            src="@/assets/images/random_password_monster.svg"
            alt="Random Password Monster"
            class="animate-bounce antialiased h-16 mr-2"
          />
          <AppLogo />
        </div>
        Staging
        <div class="flex items-center">
          <a
            href="https://github.com/iamthismarvin/random-password-monster"
            target="_blank"
            ref="noopener noreferrer"
            class="flex flex-col items-center"
          >
            <img
              src="@/assets/images/github.svg"
              alt="GitHub"
              class="h-8 transition-all mb-2 w-8 hover:scale-105"
            />
            <p class="font-semibold leading-none text-sm">Open Source</p>
          </a>
        </div>
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
