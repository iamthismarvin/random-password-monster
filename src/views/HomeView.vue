<template>
  <main>
    <div>{{ appName }}</div>
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
</template>

<script setup>
import generatePassword from '@/utils/generate-password'

const appName = 'Random Password Monster'
</script>
