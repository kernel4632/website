/**
 * Nuxt 配置文件
 *
 * 项目名称：Kernyr 个人主页
 * 技术栈：Nuxt 3 + Vue 3 Composition API
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
  ],

  // 组件配置 - 禁用路径前缀，使组件可以直接使用文件名
  components: [
    {
      path: "~/components",
      pathPrefix: false, // 禁用路径前缀
    },
  ],

  // 应用配置
  app: {
    // 页面 head 配置 - 全面的 SEO 优化
    head: {
      // 页面标题
      title: "主核Kernyr - 永远相信自己可以不自量力地改变世界",

      // 字符编码
      charset: "utf-8",

      // 视口配置
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",

      // HTML 语言属性
      htmlAttrs: {
        lang: "zh-CN",
      },

      // Meta 标签 - SEO 核心配置
      meta: [
        // 基础 SEO 标签
        {
          name: "description",
          content:
            "主核Kernyr的个人主页 - 技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。永远相信自己可以不自量力地改变世界。",
        },
        {
          name: "keywords",
          content:
            "Kernyr, 主核, 个人主页, 前端开发, AI算法, 游戏开发, 平面设计, 广州美术学院, 技术博客, 程序员, 炼丹蓝图, DEQ-RWKV, 超级鹦鹉",
        },
        { name: "author", content: "主核Kernyr" },

        // 搜索引擎指令
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },

        // 主题色配置
        { name: "theme-color", content: "#1a1a2e" },
        { name: "msapplication-TileColor", content: "#1a1a2e" },
        { name: "msapplication-navbutton-color", content: "#1a1a2e" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },

        // 移动端优化
        { name: "format-detection", content: "telephone=no" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: "主核Kernyr" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "application-name", content: "主核Kernyr" },

        // Open Graph 协议 - 社交媒体分享优化
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "主核Kernyr" },
        { property: "og:title", content: "主核Kernyr - 个人主页" },
        {
          property: "og:description",
          content:
            "技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。永远相信自己可以不自量力地改变世界。",
        },
        {
          property: "og:image",
          content: "https://hujiarong.site/assets/avatar.jpg",
        },
        { property: "og:image:width", content: "512" },
        { property: "og:image:height", content: "512" },
        { property: "og:image:alt", content: "主核Kernyr的头像" },
        { property: "og:url", content: "https://hujiarong.site" },
        { property: "og:locale", content: "zh_CN" },

        // Twitter Card - Twitter 分享优化
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "主核Kernyr - 个人主页" },
        {
          name: "twitter:description",
          content:
            "技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。",
        },
        {
          name: "twitter:image",
          content: "https://hujiarong.site/assets/avatar.jpg",
        },
        { name: "twitter:image:alt", content: "主核Kernyr的头像" },

        // 其他 SEO 相关
        { name: "revisit-after", content: "7 days" },
        { name: "rating", content: "general" },
        { name: "referrer", content: "origin-when-cross-origin" },

        // 版权信息
        {
          name: "copyright",
          content: "© 2022-2025 主核Kernyr. All rights reserved.",
        },

        // 地理位置信息（可选，有助于本地 SEO）
        { name: "geo.region", content: "CN-GD" },
        { name: "geo.placename", content: "广州" },
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
        { rel: "canonical", href: "https://hujiarong.site" },

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
        { rel: "author", href: "https://hujiarong.site" },

        // 站点地图
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      ],

      // 结构化数据 - JSON-LD
      script: [
        // 百度统计脚本
        {
          innerHTML: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1876c19be2c879da708639abf000f877";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // WebSite 结构化数据
              {
                "@type": "WebSite",
                "@id": "https://hujiarong.site/#website",
                url: "https://hujiarong.site",
                name: "主核Kernyr",
                description:
                  "主核Kernyr的个人主页 - 技术探索者、游戏开发追梦人",
                inLanguage: "zh-CN",
                publisher: {
                  "@id": "https://hujiarong.site/#person",
                },
              },
              // Person 结构化数据
              {
                "@type": "Person",
                "@id": "https://hujiarong.site/#person",
                name: "主核Kernyr",
                alternateName: "Kernyr",
                description: "技术探索者、游戏开发追梦人",
                url: "https://hujiarong.site",
                image: {
                  "@type": "ImageObject",
                  url: "https://hujiarong.site/assets/avatar.jpg",
                  width: 512,
                  height: 512,
                },
                jobTitle: "学生 / 开发者",
                affiliation: {
                  "@type": "EducationalOrganization",
                  name: "广州美术学院",
                },
                knowsAbout: [
                  "前端开发",
                  "AI算法",
                  "平面设计",
                  "游戏机制研究",
                  "Vue.js",
                  "Nuxt.js",
                  "TypeScript",
                ],
                sameAs: [
                  "https://space.bilibili.com/545450739",
                  "https://github.com/kernel4632",
                ],
              },
              // WebPage 结构化数据
              {
                "@type": "WebPage",
                "@id": "https://hujiarong.site/#webpage",
                url: "https://hujiarong.site",
                name: "主核Kernyr - 个人主页",
                description:
                  "主核Kernyr的个人主页 - 技术探索者、游戏开发追梦人。专注于前端开发、AI算法、平面设计和游戏机制研究。",
                isPartOf: {
                  "@id": "https://hujiarong.site/#website",
                },
                about: {
                  "@id": "https://hujiarong.site/#person",
                },
                inLanguage: "zh-CN",
              },
              // BreadcrumbList 结构化数据
              {
                "@type": "BreadcrumbList",
                "@id": "https://hujiarong.site/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "首页",
                    item: "https://hujiarong.site",
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
    public: {
      // 站点基础信息
      siteName: "主核Kernyr",
      siteDescription: "永远相信自己可以不自量力地改变世界",
      siteUrl: "https://hujiarong.site",
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
    quality: 80,
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
