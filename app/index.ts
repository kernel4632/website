// 类型定义 - 项目中所有TypeScript类型的集中管理

// 页面名称类型 - 定义所有可用的页面
export type PageName = 'home' | 'about' | 'friends' | 'contact' | 'projects'

// 页面配置 - 每个页面的基本信息
export interface PageConfig {
  id: PageName // 页面唯一标识
  title?: string // 页面标题
  description?: string // 页面描述（用于SEO）
}

// 朋友数据 - 友情链接页面使用
export interface FriendData {
  name: string // 朋友名字
  intro: string // 简介描述
  avatar: string // 头像URL
  link: string // 个人网站链接
}

// 项目数据 - 项目展示页面使用
export interface ProjectData {
  name: string // 项目名称
  intro: string // 项目简介
  icon: string // 项目图标
  url: string // 项目网址（#表示暂无）
}

// 联系方式数据 - 联系方式页面使用
export interface ContactData {
  type: string // 联系类型（QQ、微信等）
  icon: string // 图标文件名
  text: string // 显示文本
  link: string // 链接地址（#表示无链接）
}

// 站点数据 - 对应data.json的完整结构
export interface SiteData {
  friends: FriendData[] // 朋友列表
  projects: ProjectData[] // 项目列表
  contacts: ContactData[] // 联系方式列表
}

// 按钮变体 - primary主要按钮 secondary次要按钮
export type ButtonVariant = 'primary' | 'secondary'

// 卡片类型 - friend友情链接卡片 project项目卡片
export type CardType = 'friend' | 'project'
