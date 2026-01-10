<!--
  基础卡片组件
  
  功能：
  - 展示图标、标题和简介
  - 支持点击跳转链接
  - 支持不同类型的卡片样式（友情链接/项目）
  - 统一的悬停和点击动画效果
  
  SEO 优化：
  - 使用语义化 HTML 标签（article, h3）
  - 外部链接添加 rel="noopener noreferrer"
  - 添加 ARIA 标签提升无障碍访问性
  - 图片添加详细的 alt 描述
  
  Props:
  - title: 卡片标题
  - description: 卡片描述
  - icon: 图标路径或 URL
  - link: 链接地址（可选，# 表示无链接）
  - type: 卡片类型 ('friend' | 'project')
  
  使用示例：
  <BaseCard 
    title="项目名称" 
    description="项目描述" 
    icon="/icons/project.svg"
    link="https://example.com"
    type="project"
  />
-->

<template>
    <!-- 卡片容器 - 使用 article 标签表示独立内容 -->
    <article 
        class="base-card" 
        :class="{ 'base-card--clickable': hasValidLink }"
        @click="handleClick"
        @keydown.enter="handleClick"
        @keydown.space.prevent="handleClick"
        :tabindex="hasValidLink ? 0 : -1"
        :role="hasValidLink ? 'link' : undefined"
        :aria-label="hasValidLink ? `访问${title}` : undefined"
        itemscope
        :itemtype="type === 'project' ? 'https://schema.org/CreativeWork' : 'https://schema.org/Person'"
    >
        <!-- 图标 - 根据类型应用不同样式 -->
        <img 
            :src="iconPath" 
            :alt="`${title}的${type === 'friend' ? '头像' : '图标'}`" 
            :class="iconClass"
            width="80"
            height="80"
            loading="lazy"
            itemprop="image"
        />

        <!-- 标题 - 使用 h3 避免破坏页面标题层级 -->
        <h3 class="base-card__title" itemprop="name">{{ title }}</h3>

        <!-- 描述 -->
        <p class="base-card__description" itemprop="description">{{ description }}</p>

        <!-- 隐藏的链接 - 用于 SEO 和无障碍访问 -->
        <a 
            v-if="hasValidLink"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="base-card__link"
            :aria-label="`访问${title}的网站`"
            itemprop="url"
            @click.stop
        >
            <span class="visually-hidden">访问{{ title }}</span>
        </a>
    </article>
</template>

<script setup lang="ts">
/**
 * 基础卡片组件
 * 
 * 用于展示友情链接和项目信息的通用卡片组件。
 * 
 * SEO 说明：
 * - 使用 Schema.org 微数据（Person/CreativeWork）
 * - 外部链接添加安全属性
 * - 语义化的 article/h3/p 结构
 */

import type { CardType } from '~/types'

// ==================== Props 定义 ====================

interface Props {
    /** 卡片标题 */
    title: string
    /** 卡片描述 */
    description: string
    /** 图标路径或 URL */
    icon: string
    /** 链接地址（可选，# 表示无链接） */
    link?: string
    /** 
     * 卡片类型
     * - friend: 友情链接卡片（圆形头像）
     * - project: 项目卡片（方形图标）
     */
    type?: CardType
}

const props = withDefaults(defineProps<Props>(), {
    link: '#',
    type: 'friend',
})

// ==================== 计算属性 ====================

/**
 * 计算图标路径
 * 如果是完整 URL 则直接使用，否则添加 /assets/ 前缀
 */
const iconPath = computed(() => {
    if (props.icon.startsWith('http')) {
        return props.icon
    }
    return `/assets/${props.icon}`
})

/**
 * 计算图标类名
 * 根据卡片类型应用不同样式
 */
const iconClass = computed(() => [
    'base-card__icon',
    props.type === 'friend'
        ? 'base-card__icon--friend'
        : 'base-card__icon--project',
])

/**
 * 检查是否有有效链接
 */
const hasValidLink = computed(() => {
    return props.link && props.link !== '#'
})

// ==================== 方法 ====================

/**
 * 处理卡片点击事件
 * 如果有有效链接，在新窗口打开
 */
function handleClick(): void {
    if (hasValidLink.value) {
        window.open(props.link, '_blank', 'noopener,noreferrer')
    }
}
</script>

<style scoped>
/* ==================== 卡片容器样式 ==================== */

.base-card {
    /* 尺寸 */
    max-height: 280px;
    padding: 8vw 20px;
    margin: 25px;
    width: 100%;
    max-width: var(--card-max-width);

    /* 外观 */
    background-color: var(--white);
    border-radius: var(--border-radius-card);
    box-shadow: var(--shadow-primary);

    /* 布局 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    /* 文本处理 */
    word-break: break-word;
    white-space: pre-wrap;

    /* 过渡动画 */
    transition: var(--transition-default);
}

/* ==================== 可点击卡片样式 ==================== */

.base-card--clickable {
    cursor: pointer;
}

/* ==================== 卡片悬停效果 ==================== */

.base-card:hover {
    filter: brightness(1.02);
    box-shadow: var(--shadow-hover);
}

/* ==================== 卡片焦点效果（无障碍访问） ==================== */

.base-card:focus {
    outline: 2px solid var(--theme-color);
    outline-offset: 4px;
}

/* ==================== 卡片点击效果 ==================== */

.base-card:active {
    scale: 0.95;
    filter: brightness(1);
}

/* ==================== 卡片图标基础样式 ==================== */

.base-card__icon {
    width: var(--card-icon-size);
    height: var(--card-icon-size);
    margin-bottom: 10px;
    object-fit: cover;

    /* 优化渲染性能 */
    will-change: filter;
    transition: filter var(--transition-fast);
}

/* ==================== 友情链接图标样式 ==================== */

/* 圆形头像，带边框和阴影 */
.base-card__icon--friend {
    border-radius: var(--border-radius-circle);
    border: 3px solid var(--white);
    filter: drop-shadow(var(--shadow-primary));
}

/* ==================== 项目图标样式 ==================== */

/* 方形图标，无边框 */
.base-card__icon--project {
    border-radius: 0;
    border: none;
    filter: none;
}

/* ==================== 卡片标题样式 ==================== */

.base-card__title {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    color: var(--theme-color);
}

/* ==================== 卡片描述样式 ==================== */

.base-card__description {
    color: var(--text-color);
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}

/* ==================== 隐藏链接样式 ==================== */

.base-card__link {
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0;
}

/* ==================== 视觉隐藏（仅屏幕阅读器可见） ==================== */

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>
