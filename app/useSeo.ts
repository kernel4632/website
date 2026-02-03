// SEO管理 - 动态设置页面SEO元数据
// 用法：useSeo({ title: '关于我', description: '了解更多' })

import {
  siteName,
  siteDescription,
  siteUrl,
  siteLocale,
  ogImage,
} from '~/site.config'

// SEO配置接口
interface SeoConfig {
  title?: string // 页面标题
  description?: string // 页面描述
  keywords?: string[] // 页面关键词
  path?: string // 页面路径
  image?: string // 分享图片
  type?: 'website' | 'article' | 'profile' // 页面类型
}

// 使用SEO配置
// 用法：useSeo({ title: '关于我', description: '了解更多' })
export function useSeo(config: SeoConfig = {}) {
  const fullTitle = config.title ? `${config.title} - ${siteName}` : `${siteName} - 个人主页` // 构建完整标题
  const description = config.description || siteDescription // 使用自定义或默认描述
  const url = config.path ? `${siteUrl}${config.path}` : siteUrl // 构建完整URL
  const imageUrl = config.image ? `${siteUrl}${config.image}` : `${siteUrl}${ogImage}` // 构建图片URL
  const keywords = config.keywords?.join(', ') || '' // 构建关键词字符串

  useHead({ // 设置页面head信息
    title: fullTitle, // 设置标题
    meta: [ // 设置meta标签
      { name: 'description', content: description }, // 描述
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []), // 关键词（如果有）
      { property: 'og:title', content: fullTitle }, // OG标题
      { property: 'og:description', content: description }, // OG描述
      { property: 'og:url', content: url }, // OG URL
      { property: 'og:image', content: imageUrl }, // OG图片
      { property: 'og:type', content: config.type || 'website' }, // OG类型
      { property: 'og:locale', content: siteLocale }, // OG地区
      { property: 'og:site_name', content: siteName }, // OG站点名
      { name: 'twitter:title', content: fullTitle }, // Twitter标题
      { name: 'twitter:description', content: description }, // Twitter描述
      { name: 'twitter:image', content: imageUrl }, // Twitter图片
    ],
    link: [ // 设置link标签
      { rel: 'canonical', href: url }, // 规范链接
    ],
  })
}
