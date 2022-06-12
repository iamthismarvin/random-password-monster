import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import AppLogo from '@/components/AppLogo.vue'

describe('AppLogo', () => {
  test('should render name', () => {
    const wrapper = shallowMount(AppLogo)
    expect(wrapper.text()).toContain('RandomPassword.Monster')
  })
})
