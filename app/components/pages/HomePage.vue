<template>
    <PageSection pageId="home">
        <!-- 页面头部 -->
        <header class="homeHeader" role="banner">
            <!-- 头像 -->
            <img :src="avatarPath" :alt="`${siteName}的头像`" class="avatar" width="150" height="150" loading="eager" fetchpriority="high" />

            <!-- 名称 -->
            <h1 class="name" itemprop="name">{{ siteName }}</h1>

            <!-- 座右铭 -->
            <h2 class="motto" itemprop="description">{{ siteMotto }}</h2>
        </header>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="homeNav" role="navigation" aria-label="主要导航">
                <BaseButton variant="primary" @click="switchPage('about')">了解更多</BaseButton>
                <BaseButton variant="secondary" @click="switchPage('friends')">我的朋友</BaseButton>
            </nav>
        </template>

        <!-- 备案信息 -->
        <FilingInfo />
    </PageSection>
</template>

<script setup lang="ts">
// 主页组件 - 展示头像、名称、座右铭和导航按钮
// 用法：<HomePage />

import { siteName, siteMotto, avatarPath } from '~/config/site.config'

const { switchPage } = usePageNavigation() // 获取页面切换方法
</script>

<style scoped>
/* 页面头部 */
.homeHeader {
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    align-items: center;
    /* 水平居中 */
    text-align: center;
    /* 文本居中 */
}

/* 头像 */
.avatar {
    width: var(--avatar-size);
    /* 使用CSS变量设置宽度 */
    height: var(--avatar-size);
    /* 使用CSS变量设置高度 */
    margin-bottom: 20px;
    /* 底部间距 */
    background-color: var(--white);
    /* 白色背景 */
    border-radius: var(--border-radius-circle);
    /* 圆形边框 */
    object-fit: cover;
    /* 图片填充方式 */
    border: 3px solid var(--white);
    /* 白色边框 */
    filter: drop-shadow(var(--shadow-avatar));
    /* 阴影效果 */
    will-change: filter;
    /* 优化动画性能 */
    transition: filter var(--transition-fast);
    /* 过渡动画 */
}

/* 头像悬停效果 */
.avatar:hover {
    filter: drop-shadow(var(--shadow-avatar-hover));
    /* 悬停时的阴影 */
}

/* 名称 */
.name {
    font-size: 40px;
    /* 字体大小 */
    margin: 0;
    /* 移除外边距 */
    font-weight: bold;
    /* 粗体 */
    color: var(--theme-color);
    /* 主题色 */
}

/* 座右铭 */
.motto {
    font-size: 12px;
    /* 字体大小 */
    font-weight: 700;
    /* 粗体 */
    margin-bottom: 20px;
    /* 底部间距 */
    color: var(--theme-color);
    /* 主题色 */
}

/* 导航 */
.homeNav {
    display: contents;
    /* 使用contents布局 */
}
</style>
