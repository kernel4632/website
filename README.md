# Kernyr 个人主页

一个简洁、易于理解的个人主页项目，使用 Nuxt 3 + Vue 3 构建。

## 项目特点

- **简单易懂**：代码结构清晰，每行代码都有详细的尾随注释
- **KISS原则**：遵循"保持简单"原则，避免过度设计
- **扁平化结构**：没有深层嵌套，所有文件都在浅层目录
- **英文命名**：所有变量、函数、class、id都使用英文驼峰命名
- **积木式代码**：采用命令式写法，代码像积木一样易于阅读和理解
- **响应式设计**：支持各种屏幕尺寸
- **SEO优化**：完整的SEO配置和结构化数据

## 项目结构

```
app/
├── app.vue                 # 应用根组件
├── site.config.ts          # 站点配置
├── index.ts                # 类型定义
├── usePageNavigation.ts    # 页面导航管理
├── useSiteData.ts          # 站点数据获取
├── useSeo.ts               # SEO管理
├── clipboard.ts            # 剪贴板工具
├── assets/                 # 静态资源
│   └── css/               # 样式文件
└── components/            # 所有组件（扁平化）
    ├── HomePage.vue           # 主页
    ├── AboutPage.vue          # 关于我
    ├── FriendsPage.vue        # 友情链接
    ├── ContactPage.vue        # 联系方式
    ├── ProjectsPage.vue       # 我的项目
    ├── PageSection.vue        # 页面区块组件
    ├── BaseButton.vue         # 基础按钮
    ├── BaseCard.vue           # 基础卡片
    └── FilingInfo.vue         # 备案信息

public/
├── data.json              # 站点数据（朋友、项目、联系方式）
└── assets/                # 公共资源（图片、图标等）
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 配置说明

### 修改站点信息

编辑 `app/site.config.ts` 文件：

```typescript
export const siteName = '你的名字'  // 修改站点名称
export const siteMotto = '你的座右铭'  // 修改座右铭
export const siteUrl = 'https://你的域名.com'  // 修改站点URL
// ... 其他配置
```

### 修改页面内容

编辑 `public/data.json` 文件：

```json
{
  "friends": [],    // 朋友列表
  "projects": [],   // 项目列表
  "contacts": []    // 联系方式列表
}
```

### 修改关于我页面

编辑 `app/site.config.ts` 中的 `aboutTags` 和 `aboutContent`：

```typescript
export const aboutTags = ['🎨设计', '💻开发', '✨创造']  // 个人标签
export const aboutContent = [  // 个人介绍
  '👋 我是XXX',
  // ... 更多介绍
]
```

## 代码规范

本项目遵循以下代码规范：

1. **命令式写法**：代码像积木一样，易于阅读理解
2. **尾随注释**：每行代码都有大白话的详细注释
3. **驼峰命名**：所有变量、函数、class、id使用驼峰命名法
4. **减少嵌套**：采用积木式的行状写法，减少嵌套与缩进
5. **函数注释**：每个函数都有用法说明和调用示例
6. **扁平化结构**：避免深层文件夹嵌套，保持简单

## 技术栈

- **框架**：Nuxt 3
- **UI库**：Vue 3
- **语言**：TypeScript
- **样式**：CSS Variables
- **图标**：@nuxt/icon
- **图片优化**：@nuxt/image

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 作者

主核Kernyr

## 联系方式

- QQ: 917811726
- 微信: 17137214543
- GitHub: [@kernel4632](https://github.com/kernel4632)
- 哔哩哔哩: [@主核Kernyr](https://space.bilibili.com/545450739)
