import { beforeEach, describe, expect, it, vi } from 'vitest'
import { copyToClipboard, openLinkOrCopy } from '../app/clipboard'

describe('clipboard utilities', () => {
  const writeText = vi.fn()

  beforeEach(() => {
    vi.restoreAllMocks()
    writeText.mockReset()
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
  })

  it('copies text with the Clipboard API', async () => {
    writeText.mockResolvedValue(undefined)

    await expect(copyToClipboard('Kernyr')).resolves.toBe(true)
    expect(writeText).toHaveBeenCalledWith('Kernyr')
  })

  it('returns false when copying fails', async () => {
    writeText.mockRejectedValue(new Error('permission denied'))
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    await expect(copyToClipboard('Kernyr')).resolves.toBe(false)
  })

  it('opens valid links without attempting to copy', async () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)

    await expect(openLinkOrCopy('https://example.com', 'Example')).resolves.toBeNull()
    expect(open).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer')
    expect(writeText).not.toHaveBeenCalled()
  })
})
