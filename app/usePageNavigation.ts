// 页面导航管理 - 管理当前页面状态和页面切换
// 用法：const { currentPage, switchPage } = usePageNavigation()

import type { PageName } from '~'
import { defaultPage } from '~/site.config'

// 页面名称到URL hash的映射
const pageToHash: Record<PageName, string> = {
  home: '', // 首页不需要hash
  about: 'about', // 关于我页面
  friends: 'friends', // 友情链接页面
  contact: 'contact', // 联系方式页面
  projects: 'projects', // 项目页面
}

// URL hash到页面名称的映射
const hashToPage: Record<string, PageName> = {
  '': 'home', // 空hash对应首页
  home: 'home', // home hash对应首页
  about: 'about', // about hash对应关于我
  friends: 'friends', // friends hash对应友情链接
  contact: 'contact', // contact hash对应联系方式
  projects: 'projects', // projects hash对应项目
}

// 当前页面状态（全局单例）
const useCurrentPage = () => useState<PageName>('currentPage', () => defaultPage as PageName)

// 页面导航composable
export function usePageNavigation() {
  const currentPage = useCurrentPage() // 获取当前页面状态

  // 从URL hash获取页面名称
  // 用法：const page = getPageFromHash('#about')
  function getPageFromHash(hash: string): PageName {
    const cleanHash = hash.replace(/^#/, '').toLowerCase() // 移除#号并转小写
    return hashToPage[cleanHash] || defaultPage as PageName // 返回对应页面或默认页面
  }

  // 从页面名称获取URL hash
  // 用法：const hash = getHashFromPage('about')
  function getHashFromPage(pageName: PageName): string {
    return pageToHash[pageName] || '' // 返回对应hash或空字符串
  }

  // 更新URL hash（不刷新页面）
  // 用法：updateUrlHash('about')
  function updateUrlHash(pageName: PageName): void {
    if (!import.meta.client) return // 只在客户端执行

    const hash = getHashFromPage(pageName) // 获取对应的hash
    const newUrl = hash ? `#${hash}` : window.location.pathname // 构建新URL
    window.history.pushState(null, '', newUrl) // 更新URL但不刷新页面
  }

  // 从当前URL hash初始化页面
  // 用法：initFromHash()
  function initFromHash(): void {
    if (!import.meta.client) return // 只在客户端执行

    const hash = window.location.hash // 获取当前URL的hash
    if (!hash) return // 如果没有hash就不处理

    const page = getPageFromHash(hash) // 从hash获取页面名称
    if (page === currentPage.value) return // 如果已经是当前页面就不处理

    currentPage.value = page // 更新当前页面
    if (import.meta.dev) console.log(`从URL初始化页面: ${page}`) // 开发环境输出日志
  }

  // 监听浏览器前进后退事件
  // 用法：setupHashChangeListener()
  function setupHashChangeListener(): void {
    if (!import.meta.client) return // 只在客户端执行

    window.addEventListener('hashchange', () => { // 监听hash变化
      const hash = window.location.hash // 获取新的hash
      const page = getPageFromHash(hash) // 从hash获取页面名称

      if (page === currentPage.value) return // 如果已经是当前页面就不处理

      currentPage.value = page // 更新当前页面
      window.scrollTo(0, 0) // 滚动到页面顶部
      if (import.meta.dev) console.log(`浏览器导航到: ${page}`) // 开发环境输出日志
    })
  }

  // 切换到指定页面
  // 用法：switchPage('about')
  function switchPage(newPage: PageName): void {
    if (currentPage.value === newPage) return // 如果已经是目标页面就不处理

    if (import.meta.client) window.scrollTo(0, 0) // 滚动到页面顶部
    currentPage.value = newPage // 更新当前页面
    updateUrlHash(newPage) // 更新URL hash
    if (import.meta.dev) console.log(`切换到页面: ${newPage}`) // 开发环境输出日志
  }

  // 检查是否是当前页面
  // 用法：if (isCurrentPage('about')) { ... }
  function isCurrentPage(pageName: PageName): boolean {
    return currentPage.value === pageName // 返回是否是当前页面
  }

  // 获取页面可见性类名
  // 用法：const className = getVisibilityClass('about')
  function getVisibilityClass(pageName: PageName): string {
    return isCurrentPage(pageName) ? 'visible' : 'hidden' // 返回visible或hidden
  }

  return {
    currentPage: readonly(currentPage), // 当前页面（只读）
    switchPage, // 切换页面方法
    isCurrentPage, // 检查是否当前页面
    getVisibilityClass, // 获取可见性类名
    initFromHash, // 从hash初始化
    setupHashChangeListener, // 设置hash监听
    getPageFromHash, // 从hash获取页面
    getHashFromPage, // 从页面获取hash
  }
}
