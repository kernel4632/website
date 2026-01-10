<!--
  应用根组件
  
  功能：
  - 作为应用的入口点
  - 渲染所有页面组件
  - 管理页面切换和过渡动画
  - 提供语义化 HTML 结构以优化 SEO
  - 支持 URL hash 路由（如 #about, #friends）
  
  架构说明：
  本应用采用单页面多区块的设计模式，
  所有页面区块同时存在于 DOM 中，
  通过 CSS 过渡动画实现页面切换效果。
  
  SEO 优化：
  - 使用语义化 HTML5 标签（main, section, article, nav, header, footer）
  - 添加 ARIA 标签提升无障碍访问性
  - 结构化数据通过 nuxt.config.ts 注入
  - 支持 URL hash 路由，便于分享和 SEO
-->

<template>
  <!-- 主应用容器 - 使用 div 确保 SSR 兼容性 -->
  <div id="app-container" role="main" aria-label="主核Kernyr个人主页">
    <!-- 跳转链接 - 提升无障碍访问性 -->
    <a href="#main-content" class="skip-link" aria-label="跳转到主要内容">
      跳转到主要内容
    </a>

    <!-- 主页 - 作为首屏展示 -->
    <HomePage id="main-content" />

    <!-- 关于我 - 个人介绍区块 -->
    <AboutPage />

    <!-- 友情链接 - 社交网络区块 -->
    <FriendsPage />

    <!-- 联系方式 - 联系信息区块 -->
    <ContactPage />

    <!-- 我的项目 - 作品展示区块 -->
    <ProjectsPage />
  </div>
</template>

<script setup lang="ts">
/**
 * 应用根组件
 * 
 * 所有页面组件通过 PageSection 组件包装，
 * 根据 usePageNavigation composable 中的当前页面状态
 * 自动控制显示/隐藏和过渡动画。
 * 
 * Hash 路由说明：
 * - 支持 URL hash 路由（如 #about, #friends, #contact, #projects）
 * - 页面切换时自动更新 URL hash
 * - 打开带 hash 的 URL 时自动跳转到对应页面
 * - 支持浏览器前进/后退按钮
 * 
 * SEO 说明：
 * - 全局 SEO 配置在 nuxt.config.ts 中定义
 * - 结构化数据（JSON-LD）在 nuxt.config.ts 中注入
 * - 各页面组件使用语义化标签
 */

// ==================== Hash 路由初始化 ====================

const { initFromHash, setupHashChangeListener } = usePageNavigation()

/**
 * 在客户端挂载时初始化 hash 路由
 * 1. 从 URL hash 初始化当前页面
 * 2. 设置 hashchange 事件监听器
 */
onMounted(() => {
  // 从 URL hash 初始化页面（如果有）
  initFromHash()

  // 监听浏览器前进/后退事件
  setupHashChangeListener()
})
</script>

<style>
/* 应用容器样式 - 设置为视口高度以支持滚动 */
#app-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* 跳转链接 - 无障碍访问优化 */
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary, #4a90d9);
  color: white;
  padding: 12px 24px;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  font-weight: 500;
  z-index: 10000;
  transition: top 0.3s ease;
}

/* 当跳转链接获得焦点时显示 */
.skip-link:focus {
  top: 0;
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
