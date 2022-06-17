<template>
  <DefaultLayout>
    <img
      src="@/assets/images/promo_pwa.png"
      alt="image"
      class="my-4 rounded-xl shadow-xl w-full"
    />
    <article class="bg-secondary p-4 rounded-xl shadow-xl">
      <h1>Progressive Web App</h1>
      <h3>Now available!</h3>
      <p>
        <strong>Random Password Monster</strong> is now available as a
        <strong class="text-red-500">Progressive Web App</strong>! PWAs allow
        you to install and run web applications in your desktop and mobile
        devices as if they were native apps. This means that you can now use
        Random Password Monster while offline.
      </p>
      <h3>Installation</h3>
      <p>Installing as a PWA is easy!</p>
      <ul class="list-disc ml-2 p-2">
        <li>
          Open Random Password Monster with Chrome, Edge, or any other PWA
          supported browser.
        </li>
        <li>
          Click the Install app prompt in the address bar or browser menu.
        </li>
        <li>Open the PWA from your home screen or app menu.</li>
      </ul>
    </article>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
