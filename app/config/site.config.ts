/**
 * 站点配置文件
 * 
 * 集中管理站点的所有可定制配置
 * 修改此文件即可快速定制站点内容
 */

import type { PageConfig } from '~/types'

// ==================== 站点基本信息 ====================

/**
 * 站点名称
 */
export const SITE_NAME = '主核Kernyr'

/**
 * 站点副标题/座右铭
 */
export const SITE_MOTTO = '永远相信自己可以不自量力地改变世界'

/**
 * 站点描述（用于 SEO）
 */
export const SITE_DESCRIPTION = '主核Kernyr的个人主页 - 技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。永远相信自己可以不自量力地改变世界。'

/**
 * 站点关键词（用于 SEO）
 */
export const SITE_KEYWORDS = 'Kernyr, 主核, 个人主页, 前端开发, AI算法, 游戏开发, 平面设计, 广州美术学院, 技术博客, 程序员'

/**
 * 站点作者
 */
export const SITE_AUTHOR = '主核Kernyr'

// ==================== SEO 配置 ====================

/**
 * 站点 URL（用于生成 canonical URL 和 sitemap）
 */
export const SITE_URL = 'https://hujiarong.site'

/**
 * 站点语言
 */
export const SITE_LANGUAGE = 'zh-CN'

/**
 * 站点地区
 */
export const SITE_LOCALE = 'zh_CN'

/**
 * Open Graph 图片（用于社交媒体分享）
 */
export const OG_IMAGE = '/assets/avatar.jpg'

/**
 * Twitter 用户名（如果有）
 */
export const TWITTER_HANDLE = '@kernel4632'

/**
 * 站点类型
 */
export const SITE_TYPE = 'website'

// ==================== 结构化数据配置 ====================

/**
 * 个人信息（用于 JSON-LD 结构化数据）
 */
export const PERSON_INFO = {
  name: '主核Kernyr',
  alternateName: 'Kernyr',
  description: '技术探索者、游戏开发追梦人',
  jobTitle: '学生 / 开发者',
  affiliation: '广州美术学院',
  skills: ['前端开发', 'AI算法', '平面设计', '游戏机制研究'],
  sameAs: [
    'https://space.bilibili.com/545450739',
    'https://github.com/kernel4632',
  ],
}

// ==================== 页面配置 ====================

/**
 * 页面配置列表
 * 定义所有页面的基本信息
 * 
 * 如需添加新页面：
 * 1. 在 types/index.ts 中添加页面名称
 * 2. 在此处添加页面配置
 * 3. 创建对应的页面组件
 * 4. 在 app.vue 中引入组件
 */
export const PAGE_CONFIGS: PageConfig[] = [
  {
    id: '主页',
    description: '主核Kernyr的个人主页首页',
  },
  {
    id: '关于我',
    title: '关于我',
    description: '了解主核Kernyr - 技术探索者、游戏开发追梦人',
  },
  {
    id: '友情链接',
    title: '我的朋友',
    description: '主核Kernyr的朋友们 - 友情链接',
  },
  {
    id: '联系方式',
    title: '与我联系',
    description: '联系主核Kernyr - QQ、微信、哔哩哔哩、GitHub',
  },
  {
    id: '我的项目',
    title: '我的项目',
    description: '主核Kernyr的项目展示 - 炼丹蓝图、DEQ-RWKV、超级鹦鹉',
  },
]

/**
 * 默认页面（首次加载时显示的页面）
 */
export const DEFAULT_PAGE = '主页'

// ==================== 备案信息 ====================

/**
 * ICP 备案号
 */
export const ICP_NUMBER = '粤ICP备2025504330号'

/**
 * ICP 备案链接
 */
export const ICP_LINK = 'https://beian.miit.gov.cn/'

/**
 * 公安备案号
 */
export const POLICE_NUMBER = '粤公网安备44196102000241号'

/**
 * 公安备案链接
 */
export const POLICE_LINK = 'https://beian.mps.gov.cn/#/query/webSearch?code=44196102000241'

// ==================== 关于我页面内容 ====================

/**
 * 个人标签列表
 */
export const ABOUT_TAGS = ['🎨设计', '💻开发', '✨创造']

/**
 * 个人介绍内容
 * 每个元素为一行文字
 */
export const ABOUT_CONTENT = [
  '👋 我是主核Kernyr',
  '一名技术探索者、游戏开发追梦人🌟',
  '正在广州美术学院度过最美好的大学四年🎓',
  '痴迷技术探索🔍',
  '从前端开发到 AI 算法',
  '从平面设计到游戏机制研究',
  '都在一点点学习与尝试🧩',
  '💭白日梦想：',
  '"不自量力"地改变这个世界🔥',
  '请多指教🙏😊！',
]

// ==================== 资源路径 ====================

/**
 * 头像图片路径
 */
export const AVATAR_PATH = '/assets/avatar.jpg'

/**
 * 备案图标路径
 */
export const POLICE_ICON_PATH = '/assets/备案图标.png'

/**
 * 数据文件路径
 */
export const DATA_FILE_PATH = '/data.json'
