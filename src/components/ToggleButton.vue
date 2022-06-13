<template>
  <button
    data-set="toggle-button"
    class="font-semibold p-3 rounded-2xl shadow-xl transition-all w-full hover:scale-105"
    :class="[props.active ? 'bg-primary' : 'bg-secondary']"
  >
    <p data-test="example" class="font-black text-3xl">{{ props.example }}</p>
    <p data-test="label" class="capitalize">{{ props.label }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  active: { type: Boolean, required: true },
  label: { type: String, required: true },
  example: { type: String, required: true },
})
</script>
