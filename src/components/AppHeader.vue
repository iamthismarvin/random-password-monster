<template>
  <header class="flex justify-between p-4">
    <router-link :to="{ name: 'home' }" class="flex items-end">
      <img
        src="@/assets/images/random_password_monster.svg"
        alt="Random Password Monster"
        class="animate-bounce antialiased h-16 mr-2"
      />
      <AppLogo />
    </router-link>
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
</template>

<script setup>
import AppLogo from '@/components/AppLogo.vue'
</script>
