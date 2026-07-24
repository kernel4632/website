import { describe, expect, it } from 'vitest'
import { getHashFromPage, getPageFromHash } from '../app/pageNavigation'

describe('page navigation', () => {
  it('maps known hashes to pages without case sensitivity', () => {
    expect(getPageFromHash('#about')).toBe('about')
    expect(getPageFromHash('#PROJECTS')).toBe('projects')
  })

  it('falls back to the default page for unknown hashes', () => {
    expect(getPageFromHash('#unknown')).toBe('home')
  })

  it('maps pages back to their URL hashes', () => {
    expect(getHashFromPage('home')).toBe('')
    expect(getHashFromPage('contact')).toBe('contact')
  })
})
