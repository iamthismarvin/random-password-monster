import { beforeAll, describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(HomeView, {})
  })

  test('should mount AppLogo component', () => {
    expect(wrapper.findComponent({ name: 'AppLogo' }).exists()).toBeTruthy()
  })
  test('should mount PasswordGenerator component', () => {
    expect(
      wrapper.findComponent({ name: 'PasswordGenerator' }).exists(),
    ).toBeTruthy()
  })

  test('should toggle options', () => {
    expect(wrapper.vm.passwordOptions.lowercase).toBe(true)
    wrapper.vm.toggleOption('lowercase')
    expect(wrapper.vm.passwordOptions.lowercase).toBe(false)
  })
})
