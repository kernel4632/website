<!--
  主页组件
  
  功能：
  - 展示头像、名称和座右铭
  - 提供导航按钮
  - 显示备案信息
  
  SEO 优化：
  - 使用语义化 HTML 标签（header, h1, h2, nav）
  - 添加 ARIA 标签提升无障碍访问性
  - 图片添加详细的 alt 描述
  
  使用示例：
  <HomePage />
-->

<template>
    <PageSection page-id="主页">
        <!-- 页面头部区域 - 使用 header 标签表示页面头部 -->
        <header class="home-header" role="banner">
            <!-- 头像 - 添加详细的 alt 描述 -->
            <img :src="AVATAR_PATH" :alt="`${SITE_NAME}的头像 - 技术探索者、游戏开发追梦人`" class="avatar" width="150" height="150"
                loading="eager" fetchpriority="high" />

            <!-- 名称 - 使用 h1 作为页面主标题 -->
            <h1 class="name" itemprop="name">{{ SITE_NAME }}</h1>

            <!-- 座右铭 - 使用 h2 作为副标题 -->
            <h2 class="motto" itemprop="description">{{ SITE_MOTTO }}</h2>
        </header>

        <!-- 导航按钮 - 使用 nav 标签表示导航区域 -->
        <template #buttons>
            <nav class="home-nav" role="navigation" aria-label="主要导航">
                <BaseButton variant="primary" @click="switchPage('关于我')" aria-label="了解更多关于主核Kernyr的信息">
                    了解更多
                </BaseButton>
                <BaseButton variant="secondary" @click="switchPage('友情链接')" aria-label="查看主核Kernyr的朋友们">
                    我的朋友
                </BaseButton>
            </nav>
        </template>

        <!-- 备案信息 - 页脚区域 -->
        <FilingInfo />
    </PageSection>
</template>

<script setup lang="ts">
/**
 * 主页组件
 * 
 * 作为网站的首屏展示，包含：
 * - 个人头像（使用 eager loading 优化 LCP）
 * - 网站名称（h1 标签，SEO 核心）
 * - 座右铭（h2 标签）
 * - 导航按钮
 * - 备案信息
 */

import {
    SITE_NAME,
    SITE_MOTTO,
    AVATAR_PATH,
} from '~/config/site.config'

// ==================== Composables ====================

const { switchPage } = usePageNavigation()
</script>

<style scoped>
/* ==================== 页面头部样式 ==================== */

.home-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* ==================== 头像样式 ==================== */

.avatar {
    /* 尺寸 */
    width: var(--avatar-size);
    height: var(--avatar-size);
    margin-bottom: 20px;

    /* 外观 */
    background-color: var(--white);
    border-radius: var(--border-radius-circle);
    object-fit: cover;
    border: 3px solid var(--white);
    filter: drop-shadow(var(--shadow-avatar));

    /* 性能优化 */
    will-change: filter;
    transition: filter var(--transition-fast);
}

/* 头像悬停效果 */
.avatar:hover {
    filter: drop-shadow(var(--shadow-avatar-hover));
}

/* ==================== 名称样式 ==================== */

.name {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    color: var(--theme-color);
}

/* ==================== 座右铭样式 ==================== */

.motto {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--theme-color);
}

/* ==================== 导航样式 ==================== */

.home-nav {
    display: contents;
}
</style>
