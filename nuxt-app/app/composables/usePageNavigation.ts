/**
 * 页面导航状态管理 Composable
 * 
 * 功能：
 * - 管理当前页面状态
 * - 提供页面切换方法
 * - 支持页面过渡动画
 * - 支持 URL hash 路由（如 #about, #friends）
 * - 支持通过 URL hash 直接访问指定页面
 * 
 * 使用方式：
 * const { currentPage, switchPage, isCurrentPage } = usePageNavigation()
 */

import type { PageName } from '~/types'
import { DEFAULT_PAGE } from '~/config/site.config'

// ==================== Hash 路由映射 ====================

/**
 * 页面名称到 URL hash 的映射
 * 用于生成 SEO 友好的 URL
 */
const PAGE_TO_HASH: Record<PageName, string> = {
  '主页': '',
  '关于我': 'about',
  '友情链接': 'friends',
  '联系方式': 'contact',
  '我的项目': 'projects',
}

/**
 * URL hash 到页面名称的映射
 * 用于解析 URL 并跳转到对应页面
 */
const HASH_TO_PAGE: Record<string, PageName> = {
  '': '主页',
  'home': '主页',
  'about': '关于我',
  'friends': '友情链接',
  'contact': '联系方式',
  'projects': '我的项目',
}

// ==================== 状态管理 ====================

// 页面状态（全局单例，使用 useState 确保 SSR 兼容）
const useCurrentPage = () => useState<PageName>('currentPage', () => DEFAULT_PAGE as PageName)

/**
 * 页面导航 Composable
 * 
 * @returns 页面导航相关的状态和方法
 */
export function usePageNavigation() {
  const currentPage = useCurrentPage()

  // ==================== Hash 路由方法 ====================

  /**
   * 根据 URL hash 获取对应的页面名称
   * 
   * @param hash - URL hash（不含 # 符号）
   * @returns 对应的页面名称，如果不存在则返回默认页面
   */
  function getPageFromHash(hash: string): PageName {
    const cleanHash = hash.replace(/^#/, '').toLowerCase()
    return HASH_TO_PAGE[cleanHash] || DEFAULT_PAGE as PageName
  }

  /**
   * 根据页面名称获取对应的 URL hash
   * 
   * @param pageName - 页面名称
   * @returns 对应的 URL hash
   */
  function getHashFromPage(pageName: PageName): string {
    return PAGE_TO_HASH[pageName] || ''
  }

  /**
   * 更新 URL hash（不触发页面刷新）
   * 
   * @param pageName - 页面名称
   */
  function updateUrlHash(pageName: PageName): void {
    if (!import.meta.client) return
    
    const hash = getHashFromPage(pageName)
    const newUrl = hash ? `#${hash}` : window.location.pathname
    
    // 使用 replaceState 避免产生过多的历史记录
    // 如果需要支持浏览器后退，可以改用 pushState
    window.history.pushState(null, '', newUrl)
  }

  /**
   * 从当前 URL hash 初始化页面
   * 应在应用启动时调用
   */
  function initFromHash(): void {
    if (!import.meta.client) return
    
    const hash = window.location.hash
    if (hash) {
      const page = getPageFromHash(hash)
      if (page !== currentPage.value) {
        currentPage.value = page
        
        if (import.meta.dev) {
          console.log(`从 URL hash 初始化页面 → ${page}`)
        }
      }
    }
  }

  /**
   * 监听浏览器前进/后退事件
   * 当用户点击浏览器的前进/后退按钮时，同步页面状态
   */
  function setupHashChangeListener(): void {
    if (!import.meta.client) return
    
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash
      const page = getPageFromHash(hash)
      
      if (page !== currentPage.value) {
        currentPage.value = page
        window.scrollTo(0, 0)
        
        if (import.meta.dev) {
          console.log(`浏览器导航 → ${page}`)
        }
      }
    })
  }

  // ==================== 页面切换方法 ====================

  /**
   * 切换到指定页面
   * 
   * @param newPage - 目标页面名称
   */
  function switchPage(newPage: PageName): void {
    // 如果已经在目标页面，不做任何操作
    if (currentPage.value === newPage) return
    
    // 滚动到页面顶部，确保用户看到新页面的开始
    if (import.meta.client) {
      window.scrollTo(0, 0)
    }
    
    // 更新当前页面状态
    currentPage.value = newPage
    
    // 更新 URL hash
    updateUrlHash(newPage)
    
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
    
    // 页面切换方法
    switchPage,
    isCurrentPage,
    getVisibilityClass,
    
    // Hash 路由方法
    initFromHash,
    setupHashChangeListener,
    getPageFromHash,
    getHashFromPage,
  }
}
