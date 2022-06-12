import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import PasswordOptions from '@/components/PasswordOptions.vue'

describe('PasswordOptions', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PasswordOptions, {
      props: {
        options: {
          length: 20,
          lowercase: true,
          uppercase: true,
          numbers: true,
          symbols: true,
        },
      },
    })
  })

  test('should mount NumberInput component', () => {
    expect(wrapper.findComponent({ name: 'NumberInput' }).exists()).toBeTruthy()
  })

  test('should mount 4 ToggleButton components', () => {
    const components = wrapper.findAllComponents({ name: 'ToggleButton' })
    expect(components.length).toEqual(4)
  })

  test('should update length option', async () => {
    expect(wrapper.vm.passwordLength).toEqual(20)
    await wrapper.vm.updateLength(10)
    expect(wrapper.vm.passwordLength).toEqual(10)
  })
})
