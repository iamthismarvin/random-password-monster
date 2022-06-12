import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ToggleButton from '@/components/ToggleButton.vue'

describe('ToggleButton', () => {
  test('should render text', () => {
    const wrapper = shallowMount(ToggleButton, {
      props: {
        active: true,
        label: 'symbols',
        example: '#%&',
      },
    })

    expect(wrapper.find('[data-test="example"]').text()).toEqual('#%&')
    expect(wrapper.find('[data-test="label"]').text()).toEqual('symbols')
  })

  test('should conditionally render active class', async () => {
    const wrapper = shallowMount(ToggleButton, {
      props: {
        active: true,
        label: 'symbols',
        example: '#%&',
      },
    })

    const toggleButton = wrapper.find('[data-set="toggle-button"]')
    expect(toggleButton.classes()).toContain('bg-primary')
  })

  test('should conditionally render inactive class', async () => {
    const wrapper = shallowMount(ToggleButton, {
      props: {
        active: false,
        label: 'symbols',
        example: '#%&',
      },
    })
    const toggleButton = wrapper.find('[data-set="toggle-button"]')

    expect(toggleButton.classes()).toContain('bg-secondary')
  })
})
