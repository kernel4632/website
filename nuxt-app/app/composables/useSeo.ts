/**
 * SEO 组合式函数
 * 
 * 提供动态 SEO 元数据管理功能
 * 支持页面级别的 SEO 配置
 */

import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_LANGUAGE,
  SITE_LOCALE,
  OG_IMAGE,
  SITE_AUTHOR,
} from '~/config/site.config'

/**
 * SEO 配置接口
 */
interface SeoConfig {
  /** 页面标题 */
  title?: string
  /** 页面描述 */
  description?: string
  /** 页面关键词 */
  keywords?: string[]
  /** 页面 URL 路径 */
  path?: string
  /** Open Graph 图片 */
  image?: string
  /** 页面类型 */
  type?: 'website' | 'article' | 'profile'
}

/**
 * 使用 SEO 配置
 * 
 * @param config - SEO 配置对象
 * 
 * @example
 * ```ts
 * // 在页面组件中使用
 * useSeo({
 *   title: '关于我',
 *   description: '了解更多关于主核Kernyr的信息',
 *   keywords: ['个人介绍', '技术博客'],
 * })
 * ```
 */
export function useSeo(config: SeoConfig = {}) {
  // 构建完整标题
  const fullTitle = config.title 
    ? `${config.title} - ${SITE_NAME}` 
    : `${SITE_NAME} - 个人主页`
  
  // 使用默认描述或自定义描述
  const description = config.description || SITE_DESCRIPTION
  
  // 构建完整 URL
  const url = config.path 
    ? `${SITE_URL}${config.path}` 
    : SITE_URL
  
  // 构建图片 URL
  const imageUrl = config.image 
    ? `${SITE_URL}${config.image}` 
    : `${SITE_URL}${OG_IMAGE}`
  
  // 构建关键词字符串
  const keywords = config.keywords?.join(', ') || ''

  // 使用 Nuxt 的 useHead 设置 SEO 元数据
  useHead({
    title: fullTitle,
    meta: [
      // 基础 SEO
      { name: 'description', content: description },
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
      
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: imageUrl },
      { property: 'og:type', content: config.type || 'website' },
      { property: 'og:locale', content: SITE_LOCALE },
      { property: 'og:site_name', content: SITE_NAME },
      
      // Twitter Card
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}

/**
 * 生成页面结构化数据
 * 
 * @param pageData - 页面数据
 * @returns JSON-LD 结构化数据对象
 */
export function generatePageSchema(pageData: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': pageData.name,
    'description': pageData.description,
    'url': pageData.url,
    'isPartOf': {
      '@type': 'WebSite',
      'name': SITE_NAME,
      'url': SITE_URL,
    },
    'author': {
      '@type': 'Person',
      'name': SITE_AUTHOR,
    },
    'inLanguage': SITE_LANGUAGE,
  }
}

/**
 * 生成面包屑结构化数据
 * 
 * @param items - 面包屑项目列表
 * @returns JSON-LD 面包屑结构化数据
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  }
}

/**
 * 生成项目/作品结构化数据
 * 
 * @param project - 项目数据
 * @returns JSON-LD 创意作品结构化数据
 */
export function generateProjectSchema(project: {
  name: string
  description: string
  url?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': project.name,
    'description': project.description,
    ...(project.url && { 'url': project.url }),
    ...(project.image && { 
      'image': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}${project.image}`,
      }
    }),
    'author': {
      '@type': 'Person',
      'name': SITE_AUTHOR,
    },
  }
}
