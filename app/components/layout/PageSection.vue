<!--
  页面区块布局组件
  
  功能：
  - 提供统一的页面区块布局
  - 支持标题和分隔线
  - 包含网格背景效果
  - 支持内容和按钮插槽
  - 根据当前页面状态控制显示/隐藏
  - 支持页面滚动
  
  Props:
  - pageId: 页面标识符
  - title: 页面标题（可选）
  
  Slots:
  - default: 主要内容区域
  - buttons: 按钮区域
  
  使用示例：
  <PageSection page-id="主页">
    <template #default>内容</template>
    <template #buttons>按钮</template>
  </PageSection>
-->

<template>
    <section :id="pageId" :class="sectionClass">
        <!-- 网格背景 -->
        <div class="page-section__background" />

        <!-- 页面标题（如果有） -->
        <h1 v-if="title" class="page-section__title">{{ title }}</h1>

        <!-- 分隔线（如果有标题） -->
        <span v-if="title" class="page-section__divider" />

        <!-- 主要内容区域 -->
        <div class="page-section__content">
            <slot />
        </div>

        <!-- 按钮区域 -->
        <div class="page-section__buttons">
            <slot name="buttons" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PageName } from '~/types'

// ==================== Props 定义 ====================

interface Props {
    /** 页面标识符，用于控制显示/隐藏 */
    pageId: PageName
    /** 页面标题（可选，显示在页面顶部） */
    title?: string
}

const props = defineProps<Props>()

// ==================== Composables ====================

const { isCurrentPage } = usePageNavigation()

// ==================== 计算属性 ====================

/**
 * 计算区块的 CSS 类名
 * 根据当前页面状态添加显示/隐藏类
 */
const sectionClass = computed(() => [
    'page-section',
    isCurrentPage(props.pageId) ? 'visible' : 'hidden',
])
</script>

<style scoped>
/* ==================== 页面区块容器 ==================== */

.page-section {
    /* 定位 */
    position: absolute;
    top: 0;
    left: 0;

    /* 尺寸 */
    min-height: 100%;
    width: 100%;

    /* 布局 */
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    /* 背景和溢出 */
    background-color: var(--background-color);
    overflow: auto;
    overflow-x: hidden;
    padding: 30px 0;

    /* 过渡动画 */
    transition: var(--transition-default);
}

/* ==================== 显示状态 ==================== */

.page-section.visible {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
    z-index: 10;
}

/* ==================== 隐藏状态 ==================== */

.page-section.hidden {
    visibility: hidden;
    transform: scale(0);
    opacity: 0;
    z-index: 1;
}

/* ==================== 网格背景 ==================== */

.page-section__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(var(--grid-line-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px);
    background-size: var(--grid-size) var(--grid-size);
    pointer-events: none;
    z-index: -1;
}

/* ==================== 页面标题 ==================== */

.page-section__title {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    color: var(--theme-color);
    z-index: 1;
}

/* ==================== 分隔线 ==================== */

.page-section__divider {
    margin-top: 15px;
    width: 50px;
    height: 5px;
    background-color: var(--theme-color);
    border-radius: 20px;
    margin-bottom: 20px;
    z-index: 1;
}

/* ==================== 内容区域 ==================== */

.page-section__content {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}

/* ==================== 按钮区域 ==================== */

.page-section__buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    z-index: 1;
}
</style>
