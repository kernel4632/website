// 站点数据获取 - 从JSON文件加载站点数据
// 用法：const { friendsData, projectsData, fetchData } = useSiteData()

import type { FriendData, ProjectData, ContactData, SiteData } from '~'
import { dataFilePath } from '~/site.config'

// 全局状态（使用useState确保SSR兼容）
const useFriendsData = () => useState<FriendData[]>('friendsData', () => []) // 朋友数据
const useProjectsData = () => useState<ProjectData[]>('projectsData', () => []) // 项目数据
const useContactsData = () => useState<ContactData[]>('contactsData', () => []) // 联系方式数据
const useIsLoading = () => useState<boolean>('siteDataLoading', () => false) // 加载状态
const useError = () => useState<Error | null>('siteDataError', () => null) // 错误状态

// 站点数据composable
export function useSiteData() {
  const friendsData = useFriendsData() // 获取朋友数据状态
  const projectsData = useProjectsData() // 获取项目数据状态
  const contactsData = useContactsData() // 获取联系方式数据状态
  const isLoading = useIsLoading() // 获取加载状态
  const error = useError() // 获取错误状态

  // 获取站点数据
  // 用法：await fetchData()
  async function fetchData(): Promise<void> {
    if (friendsData.value.length > 0) return // 如果已有数据就不重复加载

    isLoading.value = true // 设置加载中
    error.value = null // 清空错误

    try {
      const response = await fetch(dataFilePath) // 请求数据文件
      if (!response.ok) throw new Error(`HTTP错误: ${response.status}`) // 检查响应状态

      const data: SiteData = await response.json() // 解析JSON数据

      friendsData.value = data.friends || [] // 更新朋友数据
      projectsData.value = data.projects || [] // 更新项目数据
      contactsData.value = data.contacts || [] // 更新联系方式数据
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('获取数据失败') // 设置错误信息
      console.error('获取站点数据失败:', error.value) // 输出错误日志
    } finally {
      isLoading.value = false // 设置加载完成
    }
  }

  // 重新加载数据
  // 用法：await reloadData()
  async function reloadData(): Promise<void> {
    friendsData.value = [] // 清空朋友数据
    projectsData.value = [] // 清空项目数据
    contactsData.value = [] // 清空联系方式数据
    await fetchData() // 重新获取数据
  }

  return {
    friendsData: readonly(friendsData), // 朋友数据（只读）
    projectsData: readonly(projectsData), // 项目数据（只读）
    contactsData: readonly(contactsData), // 联系方式数据（只读）
    isLoading: readonly(isLoading), // 加载状态（只读）
    error: readonly(error), // 错误状态（只读）
    fetchData, // 获取数据方法
    reloadData, // 重新加载数据方法
  }
}


