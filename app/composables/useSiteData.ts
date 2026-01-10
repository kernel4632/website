/**
 * 站点数据获取 Composable
 * 
 * 功能：
 * - 从 JSON 文件获取站点数据
 * - 提供朋友数据、项目数据、联系方式数据
 * - 支持数据缓存和错误处理
 * 
 * 使用方式：
 * const { friendsData, projectsData, contactsData, fetchData } = useSiteData()
 */

import type { FriendData, ProjectData, ContactData, SiteData } from '~/types'
import { DATA_FILE_PATH } from '~/config/site.config'

// 使用 useState 创建全局状态（SSR 兼容）
const useFriendsData = () => useState<FriendData[]>('friendsData', () => [])
const useProjectsData = () => useState<ProjectData[]>('projectsData', () => [])
const useContactsData = () => useState<ContactData[]>('contactsData', () => [])
const useIsLoading = () => useState<boolean>('siteDataLoading', () => false)
const useError = () => useState<Error | null>('siteDataError', () => null)

/**
 * 站点数据 Composable
 * 
 * @returns 站点数据相关的状态和方法
 */
export function useSiteData() {
  // 获取状态
  const friendsData = useFriendsData()
  const projectsData = useProjectsData()
  const contactsData = useContactsData()
  const isLoading = useIsLoading()
  const error = useError()

  /**
   * 获取站点数据
   * 从 public/data.json 文件加载数据
   */
  async function fetchData(): Promise<void> {
    // 如果已有数据，不重复加载
    if (friendsData.value.length > 0) {
      return
    }

    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(DATA_FILE_PATH)
      
      if (!response.ok) {
        throw new Error(`HTTP 错误: ${response.status}`)
      }
      
      const data: SiteData = await response.json()
      
      // 更新各数据状态
      friendsData.value = data.朋友数据 || []
      projectsData.value = data.项目数据 || []
      contactsData.value = data.联系方式 || []
      
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('获取数据失败')
      console.error('获取站点数据失败:', error.value)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 重新加载数据
   * 强制重新获取数据，忽略缓存
   */
  async function reloadData(): Promise<void> {
    // 清空现有数据
    friendsData.value = []
    projectsData.value = []
    contactsData.value = []
    
    // 重新获取
    await fetchData()
  }

  return {
    // 数据状态（只读）
    friendsData: readonly(friendsData),
    projectsData: readonly(projectsData),
    contactsData: readonly(contactsData),
    
    // 加载状态（只读）
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // 方法
    fetchData,
    reloadData,
  }
}

// 导出类型供外部使用
export type { FriendData, ProjectData, ContactData, SiteData }
