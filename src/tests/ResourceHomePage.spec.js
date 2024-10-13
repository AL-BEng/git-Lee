import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ResourceHomePage from '../components/ResourceHomePage.vue'

describe('ResourceHomePage', () => {
  it('渲染标题正确', () => {
    const wrapper = mount(ResourceHomePage)
    expect(wrapper.find('.title').text()).toBe('资源导航网')
  })

  it('渲染正确数量的资源链接', () => {
    const wrapper = mount(ResourceHomePage)
    const resources = wrapper.findAll('.resource')
    expect(resources).toHaveLength(3)
  })

  it('渲染正确数量的页脚链接', () => {
    const wrapper = mount(ResourceHomePage)
    const footerLinks = wrapper.findAll('.footer-link')
    expect(footerLinks).toHaveLength(3)
  })
})
