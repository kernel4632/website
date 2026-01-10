/**
 * 类型定义文件
 * 
 * 集中管理项目中使用的所有 TypeScript 类型定义
 * 便于维护和复用
 */

// ==================== 页面相关类型 ====================

/**
 * 页面名称类型
 * 定义所有可用的页面标识符
 * 
 * 如需添加新页面，在此处添加新的页面名称即可
 */
export type PageName = '主页' | '关于我' | '友情链接' | '联系方式' | '我的项目'

/**
 * 页面配置接口
 * 用于定义页面的基本信息
 */
export interface PageConfig {
  /** 页面唯一标识 */
  id: PageName
  /** 页面标题（显示在页面顶部） */
  title?: string
  /** 页面描述（用于 SEO） */
  description?: string
}

// ==================== 数据相关类型 ====================

/**
 * 朋友数据接口
 * 用于友情链接页面展示
 */
export interface FriendData {
  /** 朋友名字 */
  名字: string
  /** 简介描述 */
  简介: string
  /** 头像 URL（支持完整 URL 或相对路径） */
  头像: string
  /** 个人网站链接 */
  链接: string
}

/**
 * 项目数据接口
 * 用于项目展示页面
 */
export interface ProjectData {
  /** 项目名称 */
  项目名: string
  /** 项目简介 */
  简介: string
  /** 项目图标（支持完整 URL 或相对路径） */
  图标: string
  /** 项目网址（# 表示暂无链接） */
  网址: string
}

/**
 * 联系方式数据接口
 * 用于联系方式页面展示
 */
export interface ContactData {
  /** 联系类型（如：QQ、微信、GitHub 等） */
  类型: string
  /** 图标文件名（位于 /assets/ 目录下） */
  图标: string
  /** 显示文本（如账号、用户名等） */
  文本: string
  /** 链接地址（# 表示无链接，点击时复制文本） */
  链接: string
}

/**
 * 完整站点数据接口
 * 对应 public/data.json 的数据结构
 */
export interface SiteData {
  /** 朋友数据列表 */
  朋友数据: FriendData[]
  /** 项目数据列表 */
  项目数据: ProjectData[]
  /** 联系方式列表 */
  联系方式: ContactData[]
}

// ==================== 组件相关类型 ====================

/**
 * 按钮变体类型
 * - primary: 主要按钮（主题色背景）
 * - secondary: 次要按钮（白色背景）
 */
export type ButtonVariant = 'primary' | 'secondary'

/**
 * 卡片类型
 * - friend: 友情链接卡片（圆形头像）
 * - project: 项目卡片（方形图标）
 */
export type CardType = 'friend' | 'project'
