import {
  avatarPath,
  ogImage,
  personInfo,
  siteAuthor,
  siteCopyright,
  siteDescription,
  siteKeywords,
  siteLanguage,
  siteLocale,
  siteMotto,
  siteName,
  siteUrl,
} from "./app/site.config";

const absoluteAvatarUrl = `${siteUrl}${avatarPath}`;
const absoluteOgImageUrl = `${siteUrl}${ogImage}`;

/**
 * Nuxt 配置文件
 *
 * 项目名称：Kernyr 个人主页
 *
 * 配置说明：
 * - 使用 SSG (静态站点生成) 模式
 * - 启用 @nuxt/image 优化图片加载
 * - 启用 @nuxt/icon 提供图标支持
 * - 全面的 SEO 优化配置
 */
export default defineNuxtConfig({
  // 兼容性日期，确保使用最新的 Nuxt 特性
  compatibilityDate: "2025-07-15",

  // 禁用 SSR - 本应用使用自定义页面管理，不需要服务端渲染
  // 这可以避免 hydration mismatch 错误
  ssr: false,

  // 开发工具配置
  devtools: { enabled: true },

  // 启用的模块 - 仅保留必要模块
  modules: [
    "@nuxt/image", // 图片优化
    "@nuxt/icon", // 图标支持
    "nuxt-clarity-analytics", // Clarity 统计模块
  ],

  // 组件配置 - 禁用路径前缀，使组件可以直接使用文件名
  components: [
    {
      path: "~/components",
      pathPrefix: false, // 禁用路径前缀
    },
  ],

  // 自动导入配置 - 导入app根目录下的composables
  imports: {
    dirs: [
      "composables", // 默认的composables目录
      "*.ts", // app根目录下的所有ts文件
    ],
  },

  // 应用配置
  app: {
    // 页面 head 配置 - 全面的 SEO 优化
    head: {
      // 页面标题
      title: `${siteName} - ${siteMotto}`,

      // 字符编码
      charset: "utf-8",

      // 视口配置
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",

      // HTML 语言属性
      htmlAttrs: {
        lang: siteLanguage,
      },

      // Meta 标签 - SEO 核心配置
      meta: [
        // 基础 SEO 标签
        {
          name: "description",
          content: `${siteDescription}${siteMotto}。`,
        },
        {
          name: "keywords",
          content: siteKeywords,
        },
        { name: "author", content: siteAuthor },

        // 搜索引擎指令
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },

        // 主题色配置
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-navbutton-color", content: "#ffffff" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },

        // 移动端优化
        { name: "format-detection", content: "telephone=no" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: siteName },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "application-name", content: siteName },

        // Open Graph 协议 - 社交媒体分享优化
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:title", content: `${siteName} - 个人主页` },
        {
          property: "og:description",
          content: siteDescription,
        },
        {
          property: "og:image",
          content: absoluteOgImageUrl,
        },
        { property: "og:image:width", content: "512" },
        { property: "og:image:height", content: "512" },
        { property: "og:image:alt", content: `${siteName}的头像` },
        { property: "og:url", content: siteUrl },
        { property: "og:locale", content: siteLocale },

        // Twitter Card - Twitter 分享优化
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${siteName} - 个人主页` },
        {
          name: "twitter:description",
          content: siteDescription,
        },
        {
          name: "twitter:image",
          content: absoluteOgImageUrl,
        },
        { name: "twitter:image:alt", content: `${siteName}的头像` },

        // 其他 SEO 相关
        { name: "revisit-after", content: "7 days" },
        { name: "rating", content: "general" },
        { name: "referrer", content: "origin-when-cross-origin" },

        // 版权信息
        {
          name: "copyright",
          content: siteCopyright,
        },
      ],

      // Link 标签
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        // Canonical URL - 防止重复内容
        { rel: "canonical", href: siteUrl },

        // DNS 预解析 - 提升性能
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "//fonts.gstatic.com" },

        // 预连接 - 提升性能
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: "",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        // 作者信息
        { rel: "author", href: siteUrl },

        // 站点地图
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      ],

      // 结构化数据 - JSON-LD
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // WebSite 结构化数据
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: siteName,
                description: siteDescription,
                inLanguage: siteLanguage,
                publisher: {
                  "@id": `${siteUrl}/#person`,
                },
              },
              // Person 结构化数据
              {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: personInfo.name,
                alternateName: personInfo.alternateName,
                description: personInfo.description,
                url: siteUrl,
                image: {
                  "@type": "ImageObject",
                  url: absoluteAvatarUrl,
                  width: 512,
                  height: 512,
                },
                jobTitle: personInfo.jobTitle,
                affiliation: {
                  "@type": "EducationalOrganization",
                  name: personInfo.affiliation,
                },
                knowsAbout: personInfo.skills,
                sameAs: personInfo.sameAs,
              },
              // WebPage 结构化数据
              {
                "@type": "WebPage",
                "@id": `${siteUrl}/#webpage`,
                url: siteUrl,
                name: `${siteName} - 个人主页`,
                description: siteDescription,
                isPartOf: {
                  "@id": `${siteUrl}/#website`,
                },
                about: {
                  "@id": `${siteUrl}/#person`,
                },
                inLanguage: siteLanguage,
              },
              // BreadcrumbList 结构化数据
              {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}/#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "首页",
                    item: siteUrl,
                  },
                ],
              },
            ],
          }),
        },
      ],
    },

    // 页面过渡动画配置
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  // CSS 配置 - 全局样式（使用 app 目录结构）
  css: ["~/assets/css/variables.css", "~/assets/css/global.css"],

  // 运行时配置
  runtimeConfig: {
    // Clarity 项目 id（供 nuxt-clarity-analytics 模块在服务端注入脚本）
    clarityId: "vkw8nscpi6",
    public: {
      // 站点基础信息
      siteName,
      siteDescription,
      siteUrl,
    },
  },

  // TypeScript 配置
  typescript: {
    strict: true,
    shim: false,
  },

  // 图片模块配置
  image: {
    // 图片质量设置
    quality: 100,
    // 支持的格式
    format: ["webp", "png", "jpg"],
  },

  // Nitro 配置 - 服务端优化
  nitro: {
    // 预渲染配置
    prerender: {
      // 预渲染首页
      routes: ["/"],
      // 爬取链接
      crawlLinks: true,
    },
    // 压缩配置
    compressPublicAssets: true,
  },

  // 实验性功能
  experimental: {
    // 启用 payload 提取，优化首屏加载
    payloadExtraction: true,
    // 启用组件岛屿
    componentIslands: true,
  },

  // 路由配置
  routeRules: {
    // 首页预渲染
    "/": { prerender: true },
  },
});
