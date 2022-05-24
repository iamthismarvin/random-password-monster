import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView should', () => {
  test('render app name', async () => {
    const wrapper = shallowMount(HomeView, {})
    expect(wrapper.text()).toContain('Random Password Monster')
  })
})
