<template>
  <div
    class="bg-primary flex flex-col items-center justify-center p-4 rounded-2xl shadow-xl"
  >
    <input
      v-model="inputValue"
      :min="props.minValue"
      :max="props.maxValue"
      type="number"
      class="bg-secondary font-semibold mb-4 rounded-xl shadow-lg text-6xl text-center text-white w-full"
      @focusout="validateInput"
    />
    <div class="flex justify-center w-full">
      <button
        class="length-modifier"
        :class="{
          '!bg-slate-600 disabled !text-secondary': isDecreaseButtonDisabled,
        }"
        :disabled="isDecreaseButtonDisabled"
        @click="$emit('update', inputValue - 1)"
      >
        -
      </button>
      <button
        class="length-modifier"
        :class="{
          '!bg-slate-600 disabled !text-secondary': isIncreaseButtonDisabled,
        }"
        :disabled="isIncreaseButtonDisabled"
        @click="$emit('update', inputValue + 1)"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update'])
const props = defineProps({
  value: { type: Number, required: true },
  minValue: { type: Number, default: 0 },
  maxValue: { type: Number, default: 999 },
})

const inputValue = computed({
  get() {
    return props.value
  },
  set(newValue) {
    emit('update', newValue)
  },
})

const isDecreaseButtonDisabled = computed(
  () => inputValue.value <= props.minValue,
)
const isIncreaseButtonDisabled = computed(
  () => inputValue.value >= props.maxValue,
)

const validateInput = () => {
  if (inputValue.value < props.minValue) inputValue.value = props.minValue
  if (inputValue.value > props.maxValue) inputValue.value = props.maxValue
}
</script>

<style scoped>
.length-modifier {
  @apply bg-secondary font-bold h-12 rounded-full shadow-lg text-2xl text-white transition-all w-1/2 first:mr-2;
}

/* Hide input number arrows */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
