import type { PageName } from './index'
import { defaultPage } from './site.config'

const pageToHash: Record<PageName, string> = {
  home: '',
  about: 'about',
  friends: 'friends',
  contact: 'contact',
  projects: 'projects',
}

const hashToPage: Record<string, PageName> = {
  '': 'home',
  home: 'home',
  about: 'about',
  friends: 'friends',
  contact: 'contact',
  projects: 'projects',
}

export function getPageFromHash(hash: string): PageName {
  const cleanHash = hash.replace(/^#/, '').toLowerCase()
  return hashToPage[cleanHash] || defaultPage
}

export function getHashFromPage(pageName: PageName): string {
  return pageToHash[pageName]
}
