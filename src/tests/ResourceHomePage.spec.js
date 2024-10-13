import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ResourceHomePage from '../components/ResourceHomePage.vue'

describe('ResourceHomePage', () => {
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

  it('渲染搜索框', () => {
    const wrapper = mount(ResourceHomePage)
    const searchInput = wrapper.find('.search-box input')
    expect(searchInput.exists()).toBe(true)
    expect(searchInput.attributes('placeholder')).toBe('搜索资源...')
  })

  it('搜索框可以输入内容', async () => {
    const wrapper = mount(ResourceHomePage)
    const searchInput = wrapper.find('.search-box input')
    await searchInput.setValue('测试搜索')
    expect(searchInput.element.value).toBe('测试搜索')
  })

  it('渲染正确数量的导航链接', () => {
    const wrapper = mount(ResourceHomePage)
    const navLinks = wrapper.findAll('.nav-link')
    expect(navLinks).toHaveLength(4)
  })

  it('导航链接文本正确', () => {
    const wrapper = mount(ResourceHomePage)
    const navLinks = wrapper.findAll('.nav-link')
    const expectedTexts = ['首页', '分类', '热门', '关于']
    navLinks.forEach((link, index) => {
      expect(link.text()).toBe(expectedTexts[index])
    })
  })
})
