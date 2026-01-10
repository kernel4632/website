/**
 * 剪贴板工具函数
 * 
 * 提供复制文本到剪贴板的功能
 */

/**
 * 复制文本到剪贴板
 * 
 * @param text - 要复制的文本
 * @returns 是否复制成功
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // 使用现代 Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
    
    // 降级方案：使用 execCommand
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    textArea.style.top = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    const success = document.execCommand('copy')
    document.body.removeChild(textArea)
    
    return success
  } catch (error) {
    console.error('复制到剪贴板失败:', error)
    return false
  }
}

/**
 * 打开链接或复制文本
 * 
 * @param link - 链接地址（# 表示无链接）
 * @param text - 要复制的文本（当链接为 # 时使用）
 */
export async function openLinkOrCopy(link: string, text: string): Promise<void> {
  if (link && link !== '#') {
    // 有有效链接，在新窗口打开
    window.open(link, '_blank')
  } else {
    // 无链接，复制文本到剪贴板
    const success = await copyToClipboard(text)
    if (success) {
      alert('已复制到剪贴板')
    } else {
      alert('复制失败，请手动复制')
    }
  }
}
