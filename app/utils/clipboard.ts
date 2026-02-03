// 剪贴板工具 - 复制文本到剪贴板
// 用法：await copyToClipboard('要复制的文本')

// 复制文本到剪贴板
// 用法：const success = await copyToClipboard('Hello')
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) { // 如果支持现代API
      await navigator.clipboard.writeText(text) // 使用现代API复制
      return true // 返回成功
    }

    const textArea = document.createElement('textarea') // 创建临时文本框
    textArea.value = text // 设置文本内容
    textArea.style.position = 'fixed' // 固定定位
    textArea.style.left = '-9999px' // 移出屏幕
    textArea.style.top = '-9999px' // 移出屏幕
    document.body.appendChild(textArea) // 添加到页面
    textArea.focus() // 聚焦
    textArea.select() // 选中文本

    const success = document.execCommand('copy') // 执行复制命令
    document.body.removeChild(textArea) // 移除临时文本框

    return success // 返回是否成功
  } catch (error) {
    console.error('复制失败:', error) // 输出错误日志
    return false // 返回失败
  }
}

// 打开链接或复制文本
// 用法：await openLinkOrCopy('https://example.com', '示例文本')
export async function openLinkOrCopy(link: string, text: string): Promise<void> {
  if (link && link !== '#') { // 如果有有效链接
    window.open(link, '_blank') // 在新窗口打开链接
    return // 结束函数
  }

  const success = await copyToClipboard(text) // 复制文本到剪贴板
  const message = success ? '已复制到剪贴板' : '复制失败，请手动复制' // 构建提示消息
  alert(message) // 显示提示
}
