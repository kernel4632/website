import { describe, expect, it } from 'vitest'
import { parseSiteData } from '../app/siteData.validation'

const validData = {
  friends: [{ name: '朋友', intro: '简介', avatar: 'avatar.png', link: 'https://example.com' }],
  projects: [{ name: '项目', intro: '简介', icon: 'icon.svg', url: '#' }],
  contacts: [{ type: 'GitHub', icon: 'github.svg', text: 'kernyr', link: 'https://github.com/kernel4632' }],
}

describe('site data validation', () => {
  it('returns valid site data', () => {
    expect(parseSiteData(validData)).toEqual(validData)
  })

  it('rejects missing collections', () => {
    expect(() => parseSiteData({ friends: [], projects: [] })).toThrow('contacts 必须是数组')
  })

  it('reports the invalid item path', () => {
    expect(() => parseSiteData({ ...validData, projects: [{ ...validData.projects[0], name: '' }] }))
      .toThrow('projects[0].name 必须是非空字符串')
  })
})
