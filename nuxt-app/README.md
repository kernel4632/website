# Kernyr 个人主页 - Nuxt 3 重构版

基于 Nuxt 3 + Vue 3 Composition API + TypeScript 重构的个人主页项目。

## 技术栈

- **框架**: Nuxt 3 (v4.2.2)
- **前端**: Vue 3 (v3.5.26) + TypeScript
- **构建工具**: Vite 7
- **模块**: @nuxt/image, @nuxt/icon

## 项目结构

```
nuxt-app/
├── app/
│   ├── app.vue                          # 应用入口组件
│   ├── assets/
│   │   └── css/
│   │       ├── variables.css            # CSS 变量定义
│   │       └── global.css               # 全局样式
│   ├── components/
│   │   ├── layout/
│   │   │   └── PageSection.vue          # 页面区块布局组件
│   │   ├── pages/
│   │   │   ├── HomePage.vue             # 主页组件
│   │   │   ├── AboutPage.vue            # 关于我页面
│   │   │   ├── FriendsPage.vue          # 友情链接页面
│   │   │   ├── ContactPage.vue          # 联系方式页面
│   │   │   └── ProjectsPage.vue         # 我的项目页面
│   │   └── ui/
│   │       ├── BaseButton.vue           # 基础按钮组件
│   │       ├── BaseCard.vue             # 基础卡片组件
│   │       └── FilingInfo.vue           # 备案信息组件
│   ├── composables/
│   │   ├── usePageNavigation.ts         # 页面导航状态管理
│   │   ├── useSiteData.ts               # 站点数据获取
│   │   └── useSeo.ts                    # SEO 工具函数 ⭐
│   ├── config/
│   │   └── site.config.ts               # 站点配置文件 ⭐
│   ├── types/
│   │   └── index.ts                     # TypeScript 类型定义
│   └── utils/
│       └── clipboard.ts                 # 剪贴板工具函数
├── public/
│   ├── data.json                        # 站点数据（朋友/项目/联系方式）
│   ├── robots.txt                       # 搜索引擎爬虫配置 ⭐
│   ├── sitemap.xml                      # 站点地图 ⭐
│   └── assets/                          # 静态资源
└── nuxt.config.ts                       # Nuxt 配置文件（含 SEO 配置）
```

## SEO 优化

本项目已实现全面的 SEO 优化，包括：

### 1. Meta 标签优化

在 `nuxt.config.ts` 中配置了完整的 Meta 标签：

- **基础 SEO**: title, description, keywords, author
- **Open Graph**: og:title, og:description, og:image, og:url 等
- **Twitter Card**: twitter:card, twitter:title, twitter:description 等
- **移动端优化**: theme-color, apple-mobile-web-app-capable 等

### 2. 结构化数据 (JSON-LD)

在 `nuxt.config.ts` 中注入了 Schema.org 结构化数据：

- **WebSite**: 网站基本信息
- **Person**: 个人信息（姓名、职业、技能、社交链接）
- **WebPage**: 页面信息
- **BreadcrumbList**: 面包屑导航

### 3. 语义化 HTML

所有组件使用语义化 HTML5 标签：

- `<main>`: 主要内容区域
- `<header>`: 页面头部
- `<nav>`: 导航区域
- `<article>`: 独立内容（卡片）
- `<section>`: 内容分区
- `<address>`: 联系信息
- `<h1>` - `<h3>`: 标题层级

### 4. 无障碍访问 (A11y)

- ARIA 标签（role, aria-label）
- 键盘导航支持
- 跳转链接（Skip Link）
- 焦点样式
- 图片 alt 描述

### 5. 搜索引擎配置

- `robots.txt`: 爬虫访问规则
- `sitemap.xml`: 站点地图
- Canonical URL: 防止重复内容

### 6. 性能优化

- 图片懒加载（loading="lazy"）
- 关键图片优先加载（fetchpriority="high"）
- DNS 预解析
- 预连接

### 修改 SEO 配置

编辑 `app/config/site.config.ts`：

```typescript
// 站点 URL（用于生成 canonical URL 和 sitemap）
export const SITE_URL = 'https://your-domain.com'

// 站点描述（用于 SEO）
export const SITE_DESCRIPTION = '你的站点描述'

// 站点关键词（用于 SEO）
export const SITE_KEYWORDS = '关键词1, 关键词2, 关键词3'

// 个人信息（用于 JSON-LD 结构化数据）
export const PERSON_INFO = {
  name: '你的名字',
  description: '你的简介',
  jobTitle: '你的职业',
  // ...
}
```

## 快速定制指南

### 1. 修改站点基本信息

编辑 `app/config/site.config.ts`：

```typescript
// 站点名称
export const SITE_NAME = '你的名字'

// 座右铭
export const SITE_MOTTO = '你的座右铭'

// 备案信息
export const ICP_NUMBER = '你的ICP备案号'
export const POLICE_NUMBER = '你的公安备案号'
```

### 2. 修改关于我页面内容

编辑 `app/config/site.config.ts`：

```typescript
// 个人标签
export const ABOUT_TAGS = ['🎨设计', '💻开发', '✨创造']

// 个人介绍（每行一个元素）
export const ABOUT_CONTENT = [
  '👋 我是xxx',
  '一名xxx',
  // ...
]
```

### 3. 修改朋友/项目/联系方式数据

编辑 `public/data.json`：

```json
{
  "朋友数据": [
    {
      "名字": "朋友名字",
      "简介": "简介",
      "头像": "头像URL或文件名",
      "链接": "个人网站链接"
    }
  ],
  "项目数据": [
    {
      "项目名": "项目名称",
      "简介": "项目简介",
      "图标": "图标文件名",
      "网址": "项目网址"
    }
  ],
  "联系方式": [
    {
      "类型": "QQ",
      "图标": "QQ.svg",
      "文本": "显示文本",
      "链接": "链接地址或#"
    }
  ]
}
```

### 4. 修改主题颜色

编辑 `app/assets/css/variables.css`：

```css
:root {
  /* 主题色 */
  --theme-color: rgb(103, 171, 255);
  --theme-color-rgb: 103, 171, 255;
}
```

### 5. 添加新页面

1. 在 `app/types/index.ts` 中添加页面名称：
   ```typescript
   export type PageName = '主页' | '关于我' | ... | '新页面'
   ```

2. 在 `app/config/site.config.ts` 中添加页面配置：
   ```typescript
   export const PAGE_CONFIGS: PageConfig[] = [
     // ...
     { id: '新页面', title: '新页面标题' },
   ]
   ```

3. 创建页面组件 `app/components/pages/NewPage.vue`

4. 在 `app/app.vue` 中引入组件

## 架构设计

### 模块化架构

- **Types**: 集中管理 TypeScript 类型定义
- **Config**: 集中管理可定制配置
- **Composables**: 可复用的组合式函数
- **Components**: 按职责分类的 Vue 组件
- **Utils**: 工具函数

### 单一职责原则

每个组件只负责一个功能：
- `PageSection`: 页面区块布局和过渡动画
- `BaseButton`: 按钮样式和交互
- `BaseCard`: 卡片展示
- `FilingInfo`: 备案信息展示

### 松散耦合

- 组件通过 props 和 events 通信
- 状态通过 composables 共享
- 配置通过 config 文件集中管理
- 样式通过 CSS 变量统一管理

## 开发指南

### 安装依赖

```bash
cd nuxt-app
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 代码规范

- 使用语义化的变量名和函数名
- 所有关键逻辑添加中文注释
- 遵循 Vue 3 Composition API 最佳实践
- TypeScript 严格模式
- CSS 使用 BEM 命名规范

## 许可证

MIT License
