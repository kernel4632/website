// 站点配置 - 集中管理所有可定制的站点信息
// 用法：import { siteName, siteUrl } from '~/site.config'

import type { PageConfig } from './index'

// 站点基本信息
export const siteName = '主核Kernyr' // 站点名称
export const siteMotto = '永远相信自己可以不自量力地改变世界' // 座右铭
export const siteDescription = '主核Kernyr的个人主页 - 技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。' // 站点描述
export const siteKeywords = 'Kernyr, 主核, 个人主页, 前端开发, AI算法, 游戏开发, 平面设计, 广州美术学院, 技术博客, 程序员, 炼丹蓝图, DEQ-RWKV, 阿柯AKer' // 关键词
export const siteAuthor = '主核Kernyr' // 作者
export const siteUrl = 'https://hujiarong.site' // 站点URL
export const siteLanguage = 'zh-CN' // 站点语言
export const siteLocale = 'zh_CN' // 站点地区
export const siteCopyright = '© 2022-2026 主核Kernyr. All rights reserved.' // 版权信息

// 资源路径
export const avatarPath = '/images/avatar.jpg' // 头像路径
export const ogImage = '/images/avatar.jpg' // 社交媒体分享图片
export const policeIconPath = '/images/policeIcon.png' // 备案图标路径
export const dataFilePath = '/data.json' // 数据文件路径

// 备案信息
export const icpNumber = '粤ICP备2025504330号' // ICP备案号
export const icpLink = 'https://beian.miit.gov.cn/' // ICP备案链接
export const policeNumber = '粤公网安备44196102000241号' // 公安备案号
export const policeLink = 'https://beian.mps.gov.cn/#/query/webSearch?code=44196102000241' // 公安备案链接

// 页面配置 - 定义所有页面的基本信息
export const pageConfigs: PageConfig[] = [
  { id: 'home', description: '主核Kernyr的个人主页首页' },
  { id: 'about', title: '关于我', description: '了解主核Kernyr - 技术探索者、游戏开发追梦人' },
  { id: 'friends', title: '我的朋友', description: '主核Kernyr的朋友们 - 友情链接' },
  { id: 'contact', title: '与我联系', description: '联系主核Kernyr - QQ、微信、哔哩哔哩、GitHub' },
  { id: 'projects', title: '我的项目', description: '主核Kernyr的项目展示 - 炼丹蓝图、DEQ-RWKV、阿柯AKer' },
]

export const defaultPage = 'home' // 默认页面

// 关于我页面内容
export const aboutTags = ['🎨设计', '💻开发', '✨创造'] // 个人标签
export const aboutContent = [ // 个人介绍内容
  '👋 我是主核Kernyr',
  '一名技术探索者、游戏开发追梦人🌟',
  '正在广州美术学院度过最美好的大学四年🎓',
  '痴迷技术探索🔍',
  '从全栈开发到 AI 架构理论',
  '从平面设计到游戏机制研究',
  '都在一点点学习和尝试🧩',
  '💭白日梦想：',
  '"不自量力"地改变这个世界🔥',
  '🙏请多指教！',
]

// 个人信息（用于结构化数据）
export const personInfo = {
  name: '主核Kernyr', // 姓名
  alternateName: 'Kernyr', // 别名
  description: '技术探索者、游戏开发追梦人', // 描述
  jobTitle: '学生 / 开发者', // 职位
  affiliation: '广州美术学院', // 所属机构
  skills: ['前端开发', 'AI算法', '平面设计', '游戏机制研究'], // 技能
  sameAs: [ // 社交媒体链接
    'https://space.bilibili.com/545450739',
    'https://github.com/kernel4632',
  ],
}
