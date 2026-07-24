import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const publicFile = (name: string) => readFileSync(
  resolve(process.cwd(), 'public', name),
  'utf8',
)

describe('crawler configuration', () => {
  it('uses only supported robots.txt directives', () => {
    const robots = publicFile('robots.txt')
    const directives = robots
      .split(/\r?\n/)
      .filter(line => line.trim() && !line.trim().startsWith('#'))
      .map(line => line.split(':', 1)[0]?.trim().toLowerCase())

    expect(directives).toEqual(['user-agent', 'allow', 'sitemap'])
    expect(robots).not.toContain('Content-Signal')
  })

  it('lists only the canonical crawlable URL in the sitemap', () => {
    const sitemap = publicFile('sitemap.xml')
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])

    expect(locations).toEqual(['https://hujiarong.site/'])
    expect(sitemap).not.toContain('#')
  })
})
