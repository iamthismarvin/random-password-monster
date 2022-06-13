<template>
  <section>
    <h3 class="font-bold mb-4 text-xl">Password</h3>
    <div class="bg-primary p-4 rounded-2xl shadow-xl">
      <div v-if="password" class="flex items-center justify-center pb-4">
        <textarea
          v-model="password"
          class="bg-secondary font-mono outline-none p-2 resize-none rounded-2xl shadow-xl w-full"
        ></textarea>
      </div>
      <div class="flex">
        <button
          @click="getPassword(props.options)"
          class="bg-red-500 font-extrabold p-3 rounded-full shadow-xl text-secondary transition-all w-full hover:scale-105 sm:hover:scale-x-[1.015] sm:hover:scale-y-[1.025]"
          :class="[
            {
              'disabled bg-slate-600 ': isGenerateButtonDisabled,
            },
            { 'mr-2': password },
          ]"
          :disabled="isGenerateButtonDisabled"
        >
          Generate
        </button>
        <button
          v-if="password"
          @click="copyPassword(password)"
          :disabled="!password"
          class="font-extrabold p-3 rounded-full shadow-xl transition-all w-36 hover:scale-105"
          :class="[
            isPasswordCopied
              ? 'bg-secondary text-white'
              : 'bg-green-500 text-secondary',
          ]"
        >
          {{ isPasswordCopied ? 'Copied' : 'Copy' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import generatePassword from '@/utils/generate-password'

const props = defineProps({
  options: { type: Object, required: true },
})

const password = ref('')
const isPasswordCopied = ref(false)

const isGenerateButtonDisabled = computed(
  () =>
    !props.options.lowercase &&
    !props.options.uppercase &&
    !props.options.numbers &&
    !props.options.symbols,
)

const getPassword = (passwordOptions) => {
  if (isGenerateButtonDisabled.value) return
  password.value = generatePassword(passwordOptions)
  if (window.pageYOffset !== 0) scrollTo({ top: 0, behavior: 'smooth' })
}
const copyPassword = (password) => {
  navigator.clipboard.writeText(password)
  isPasswordCopied.value = true
}

watch(password, (value) => {
  if (value.length) isPasswordCopied.value = false
})
</script>
