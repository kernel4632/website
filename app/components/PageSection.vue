<template>
    <section :id="pageId" :class="sectionClass">
        <!-- 网格背景 -->
        <div class="pageSection__background" />

        <!-- 页面标题 -->
        <h1 v-if="title" class="pageSection__title">{{ title }}</h1>

        <!-- 分隔线 -->
        <span v-if="title" class="pageSection__divider" />

        <!-- 主要内容区域 -->
        <div class="pageSection__content">
            <slot />
        </div>

        <!-- 按钮区域 -->
        <div class="pageSection__buttons">
            <slot name="buttons" />
        </div>
    </section>
</template>

<script setup lang="ts">
// 页面区块布局组件 - 提供统一的页面布局和过渡效果
// 用法：<PageSection pageId="home" title="标题"><template #default>内容</template></PageSection>

import type { PageName } from '~'

interface Props {
    pageId: PageName // 页面标识符
    title?: string // 页面标题（可选）
}

const props = defineProps<Props>()

const { isCurrentPage } = usePageNavigation() // 获取页面导航方法

const sectionClass = computed(() => [ // 计算区块类名
    'pageSection', // 基础类名
    isCurrentPage(props.pageId) ? 'visible' : 'hidden', // 根据当前页面添加visible或hidden
])
</script>

<style scoped>
/* 页面区块容器 */
.pageSection {
    position: absolute;
    /* 绝对定位 */
    top: 0;
    /* 顶部0 */
    left: 0;
    /* 左边0 */
    min-height: 100%;
    /* 最小高度100% */
    width: 100%;
    /* 宽度100% */
    display: flex;
    /* 弹性布局 */
    align-items: center;
    /* 水平居中 */
    flex-direction: column;
    /* 垂直排列 */
    flex-wrap: nowrap;
    /* 不换行 */
    justify-content: center;
    /* 垂直居中 */
    background-color: var(--background-color);
    /* 背景色 */
    overflow: auto;
    /* 自动溢出 */
    overflow-x: hidden;
    /* 隐藏水平溢出 */
    padding: 30px 0;
    /* 上下内边距 */
    transition: var(--transition-default);
    /* 过渡动画 */
}

/* 显示状态 */
.pageSection.visible {
    visibility: visible;
    /* 可见 */
    transform: scale(1);
    /* 缩放1倍 */
    opacity: 1;
    /* 不透明 */
    z-index: 10;
    /* 层级10 */
}

/* 隐藏状态 */
.pageSection.hidden {
    visibility: hidden;
    /* 隐藏 */
    transform: scale(0);
    /* 缩放0倍 */
    opacity: 0;
    /* 透明 */
    z-index: 1;
    /* 层级1 */
}

/* 网格背景 */
.pageSection__background {
    position: absolute;
    /* 绝对定位 */
    top: 0;
    /* 顶部0 */
    left: 0;
    /* 左边0 */
    width: 100%;
    /* 宽度100% */
    height: 100%;
    /* 高度100% */
    background-image: linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px);
    /* 网格背景 */
    background-size: var(--grid-size) var(--grid-size);
    /* 网格大小 */
    pointer-events: none;
    /* 不响应鼠标事件 */
    z-index: -1;
    /* 层级-1 */
}

/* 页面标题 */
.pageSection__title {
    font-size: 40px;
    /* 字体大小 */
    margin: 0;
    /* 移除外边距 */
    font-weight: bold;
    /* 粗体 */
    color: var(--theme-color);
    /* 主题色 */
    z-index: 1;
    /* 层级1 */
}

/* 分隔线 */
.pageSection__divider {
    margin-top: 8px;
    /* 顶部间距 */
    width: 36px;
    /* 宽度 */
    height: 6px;
    /* 高度 */
    background-color: var(--theme-color);
    /* 主题色背景 */
    border-radius: 20px;
    /* 圆角 */
    margin-bottom: 20px;
    /* 底部间距 */
    z-index: 1;
    /* 层级1 */
}

/* 内容区域 */
.pageSection__content {
    z-index: 1;
    /* 层级1 */
    width: 100%;
    /* 宽度100% */
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
}

/* 按钮区域 */
.pageSection__buttons {
    display: flex;
    /* 弹性布局 */
    align-items: center;
    /* 水平居中 */
    flex-direction: column;
    /* 垂直排列 */
    flex-wrap: nowrap;
    /* 不换行 */
    justify-content: center;
    /* 垂直居中 */
    z-index: 1;
    /* 层级1 */
}
</style>
