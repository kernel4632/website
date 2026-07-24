import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseCard from '../app/components/BaseCard.vue'

const requiredProps = {
  title: '项目',
  description: '项目描述',
  icon: 'project.svg',
}

describe('BaseCard', () => {
  it('renders a native external link when the link is valid', () => {
    const wrapper = mount(BaseCard, {
      props: { ...requiredProps, link: 'https://example.com', type: 'project' },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes()).toMatchObject({
      href: 'https://example.com',
      target: '_blank',
      rel: 'noopener noreferrer',
    })
  })

  it('renders a non-interactive article without a valid link', () => {
    const wrapper = mount(BaseCard, {
      props: { ...requiredProps, link: '#', type: 'project' },
    })

    expect(wrapper.element.tagName).toBe('ARTICLE')
    expect(wrapper.attributes('href')).toBeUndefined()
    expect(wrapper.attributes('role')).toBeUndefined()
    expect(wrapper.attributes('tabindex')).toBeUndefined()
  })
})
