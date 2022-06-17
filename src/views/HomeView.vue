<template>
  <DefaultLayout>
    <main>
      <PasswordGenerator :options="passwordOptions" class="p-4" />
      <PasswordOptions
        class="p-4"
        :options="passwordOptions"
        @toggle-option="toggleOption"
        @update-length="updateLength"
      />
    </main>
  </DefaultLayout>
</template>

<script setup>
import { reactive } from 'vue'
import PasswordGenerator from '@/components/PasswordGenerator.vue'
import PasswordOptions from '@/components/PasswordOptions.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

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
