import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import PasswordGenerator from '@/components/PasswordGenerator.vue'

describe('PasswordGenerator', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PasswordGenerator, {
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
    wrapper.vm.password = ''
  })

  test('should compute isGenerateButtonDisabled value if all options are false', () => {
    expect(wrapper.vm.isGenerateButtonDisabled).toBeFalsy()

    wrapper.props().options.lowercase = false
    wrapper.props().options.uppercase = false
    wrapper.props().options.numbers = false
    wrapper.props().options.symbols = false

    expect(wrapper.vm.isGenerateButtonDisabled).toBeTruthy()
  })

  test('should have password length same as options length', async () => {
    await wrapper.vm.getPassword(wrapper.props().options)
    expect(wrapper.vm.password.length).toBe(20)

    wrapper.props().options.length = 24
    await wrapper.vm.getPassword(wrapper.props().options)

    expect(wrapper.vm.password.length).toBe(24)
  })

  test('should conditionally render textarea element if password exists', async () => {
    expect(wrapper.find('textarea').exists()).toBeFalsy()

    await wrapper.vm.getPassword(wrapper.props().options)

    expect(wrapper.find('textarea').exists()).toBeTruthy()
  })

  test('should not set password value when all character options are false', async () => {
    wrapper.props().options.lowercase = false
    wrapper.props().options.uppercase = false
    wrapper.props().options.numbers = false
    wrapper.props().options.symbols = false

    await wrapper.vm.getPassword(wrapper.props().options)

    expect(wrapper.vm.password).toBe('')
  })

  test('should copy password to clipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {},
      },
    })
    vi.spyOn(navigator.clipboard, 'writeText')
    wrapper.vm.copyPassword('password')

    expect(navigator.clipboard.writeText).toHaveBeenCalledOnce()
  })
})
