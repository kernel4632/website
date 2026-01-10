/**
 * 页面导航状态管理 Composable
 * 
 * 功能：
 * - 管理当前页面状态
 * - 提供页面切换方法
 * - 支持页面过渡动画
 * 
 * 使用方式：
 * const { currentPage, switchPage, isCurrentPage } = usePageNavigation()
 */

import type { PageName } from '~/types'
import { DEFAULT_PAGE } from '~/config/site.config'

// 页面状态（全局单例，使用 useState 确保 SSR 兼容）
const useCurrentPage = () => useState<PageName>('currentPage', () => DEFAULT_PAGE as PageName)

/**
 * 页面导航 Composable
 * 
 * @returns 页面导航相关的状态和方法
 */
export function usePageNavigation() {
  const currentPage = useCurrentPage()

  /**
   * 切换到指定页面
   * 
   * @param newPage - 目标页面名称
   */
  function switchPage(newPage: PageName): void {
    // 滚动到页面顶部，确保用户看到新页面的开始
    if (import.meta.client) {
      window.scrollTo(0, 0)
    }
    
    // 更新当前页面状态
    currentPage.value = newPage
    
    // 开发环境下输出日志
    if (import.meta.dev) {
      console.log(`页面切换 → ${currentPage.value}`)
    }
  }

  /**
   * 检查指定页面是否为当前页面
   * 
   * @param pageName - 要检查的页面名称
   * @returns 是否为当前页面
   */
  function isCurrentPage(pageName: PageName): boolean {
    return currentPage.value === pageName
  }

  /**
   * 获取页面可见性类名
   * 
   * @param pageName - 页面名称
   * @returns CSS 类名（'visible' 或 'hidden'）
   */
  function getVisibilityClass(pageName: PageName): string {
    return isCurrentPage(pageName) ? 'visible' : 'hidden'
  }

  return {
    // 状态（只读）
    currentPage: readonly(currentPage),
    
    // 方法
    switchPage,
    isCurrentPage,
    getVisibilityClass,
  }
}
