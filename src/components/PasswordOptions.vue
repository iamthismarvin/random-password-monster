<template>
  <section>
    <h3 class="font-bold mb-4 text-xl">Options</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div class="mb-8 sm:mb-0">
        <h4 class="mb-4 font-bold text-md text-center">Length</h4>
        <NumberInput
          :value="passwordLength"
          :min-value="4"
          :max-value="250"
          @update="updateLength"
        />
      </div>
      <div>
        <h4 class="mb-4 font-bold text-md text-center">Characters</h4>
        <div class="grid grid-cols-2 grid-rows-2 gap-2">
          <ToggleButton
            v-for="option in OPTIONS"
            class="toggle-button"
            :key="option.label"
            :label="option.label"
            :active="props.options[option.label]"
            :example="option.example"
            @click="$emit('toggle-option', option.label)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import ToggleButton from '@/components/ToggleButton.vue'
import NumberInput from '@/components/NumberInput.vue'

const OPTIONS = [
  { example: 'abc ', label: 'lowercase' },
  { example: 'ABC', label: 'uppercase' },
  { example: '123', label: 'numbers' },
  { example: '#%&', label: 'symbols' },
]

const props = defineProps({
  options: { type: Object, required: true },
})

const emit = defineEmits(['toggle-option', 'update-length'])

const passwordLength = ref(props.options.length)

const updateLength = (length) => (passwordLength.value = length)

watch(passwordLength, () => emit('update-length', passwordLength))
</script>
