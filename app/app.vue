<template>
  <!-- 主应用容器 -->
  <div id="appContainer" role="main">
    <!-- 跳转链接（无障碍访问） -->
    <a href="#mainContent" class="skipLink">跳转到主要内容</a>

    <!-- 主页 -->
    <HomePage id="mainContent" />

    <!-- 关于我 -->
    <AboutPage />

    <!-- 友情链接 -->
    <FriendsPage />

    <!-- 联系方式 -->
    <ContactPage />

    <!-- 我的项目 -->
    <ProjectsPage />
  </div>
</template>

<script setup lang="ts">
// 应用根组件 - 所有页面的容器，管理页面切换和路由
// 用法：<App />

const { initFromHash, setupHashChangeListener } = usePageNavigation() // 获取页面导航方法
const { fetchData } = useSiteData() // 获取数据加载方法

onMounted(() => { // 组件挂载时执行
  initFromHash() // 从URL hash初始化页面
  setupHashChangeListener() // 监听浏览器前进后退事件
  fetchData() // 统一加载站点数据（只加载一次）
})
</script>

<style>
/* 应用容器 */
#appContainer {
  width: 100%;
  /* 宽度100% */
  height: 100vh;
  /* 高度100vh */
  position: relative;
  /* 相对定位 */
}

/* 跳转链接（无障碍访问） */
.skipLink {
  position: absolute;
  /* 绝对定位 */
  top: -100%;
  /* 顶部-100% */
  left: 50%;
  /* 左边50% */
  transform: translateX(-50%);
  /* 水平居中 */
  background: var(--color-primary, #4a90d9);
  /* 主题色背景 */
  color: white;
  /* 白色文字 */
  padding: 12px 24px;
  /* 内边距 */
  border-radius: 0 0 8px 8px;
  /* 底部圆角 */
  text-decoration: none;
  /* 移除下划线 */
  font-weight: 500;
  /* 字重500 */
  z-index: 10000;
  /* 层级10000 */
  transition: top 0.3s ease;
  /* 顶部位置过渡动画 */
}

/* 跳转链接获得焦点时显示 */
.skipLink:focus {
  top: 0;
  /* 顶部0 */
  outline: 2px solid white;
  /* 白色边框 */
  outline-offset: 2px;
  /* 边框偏移 */
}
</style>
