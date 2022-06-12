import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import AppLogo from '@/components/AppLogo.vue'

describe('HomeView should', () => {
  test('render app logo', async () => {
    const wrapper = shallowMount(HomeView, {})
    expect(wrapper.findComponent(AppLogo).exists()).toBeTruthy()
  })
})
