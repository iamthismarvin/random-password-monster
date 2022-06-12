import { beforeAll, describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView should', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(HomeView, {})
  })

  test('mount AppLogo component', () => {
    expect(wrapper.findComponent({ name: 'AppLogo' }).exists()).toBeTruthy()
  })
  test('mount PasswordGenerator component', () => {
    expect(
      wrapper.findComponent({ name: 'PasswordGenerator' }).exists(),
    ).toBeTruthy()
  })
})
