<template>
    <article class="baseCard" :class="{ 'baseCard--clickable': hasValidLink }" @click="handleClick" @keydown.enter="handleClick" @keydown.space.prevent="handleClick" :tabindex="hasValidLink ? 0 : -1" :role="hasValidLink ? 'link' : undefined">
        <!-- 图标 -->
        <img :src="iconPath" :alt="`${title}的${type === 'friend' ? '头像' : '图标'}`" :class="iconClass" width="80" height="80" loading="lazy" />

        <!-- 标题 -->
        <h3 class="baseCard__title">{{ title }}</h3>

        <!-- 描述 -->
        <p class="baseCard__description">{{ description }}</p>

        <!-- 隐藏的链接（用于SEO） -->
        <a v-if="hasValidLink" :href="link" target="_blank" rel="noopener noreferrer" class="baseCard__link" @click.stop>
            <span class="visuallyHidden">访问{{ title }}</span>
        </a>
    </article>
</template>

<script setup lang="ts">
// 基础卡片组件 - 展示图标、标题和简介，支持点击跳转
// 用法：<BaseCard title="标题" description="描述" icon="图标路径" link="链接" type="friend" />

import type { CardType } from '~/index'

interface Props {
    title: string // 卡片标题
    description: string // 卡片描述
    icon: string // 图标路径或URL
    link?: string // 链接地址（#表示无链接）
    type?: CardType // 卡片类型（friend朋友 project项目）
}

const props = withDefaults(defineProps<Props>(), {
    link: '#', // 默认无链接
    type: 'friend', // 默认为朋友卡片
})

const iconPath = computed(() => { // 计算图标路径
    if (props.icon.startsWith('http')) return props.icon // 如果是完整URL就直接用
    return `/assets/${props.icon}` // 否则添加/assets/前缀
})

const iconClass = computed(() => [ // 计算图标类名
    'baseCard__icon', // 基础类名
    props.type === 'friend' ? 'baseCard__icon--friend' : 'baseCard__icon--project', // 根据类型添加类名
])

const hasValidLink = computed(() => { // 检查是否有有效链接
    return props.link && props.link !== '#' // 链接存在且不是#
})

function handleClick(): void { // 处理卡片点击
    if (!hasValidLink.value) return // 如果没有有效链接就不处理
    window.open(props.link, '_blank', 'noopener,noreferrer') // 在新窗口打开链接
}
</script>

<style scoped>
/* 卡片容器 */
.baseCard {
    max-height: 280px;
    /* 最大高度 */
    padding: 8vw 20px;
    /* 内边距 */
    margin: 25px;
    /* 外边距 */
    width: 100%;
    /* 宽度100% */
    max-width: var(--card-max-width);
    /* 最大宽度 */
    background-color: var(--white);
    /* 白色背景 */
    border-radius: var(--border-radius-card);
    /* 圆角 */
    box-shadow: var(--shadow-primary);
    /* 阴影效果 */
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    position: relative;
    /* 相对定位 */
    word-break: break-word;
    /* 单词换行 */
    white-space: pre-wrap;
    /* 保留空白符 */
    transition: var(--transition-default);
    /* 过渡动画 */
}

/* 可点击卡片 */
.baseCard--clickable {
    cursor: pointer;
    /* 鼠标指针 */
}

/* 卡片悬停效果 */
.baseCard:hover {
    filter: brightness(1.02);
    /* 亮度102% */
    box-shadow: var(--shadow-hover);
    /* 悬停阴影 */
}

/* 卡片焦点效果 */
.baseCard:focus {
    outline: 2px solid var(--theme-color);
    /* 主题色边框 */
    outline-offset: 4px;
    /* 边框偏移 */
}

/* 卡片点击效果 */
.baseCard:active {
    scale: 0.95;
    /* 缩小0.95倍 */
    filter: brightness(1);
    /* 亮度100% */
}

/* 卡片图标基础样式 */
.baseCard__icon {
    width: var(--card-icon-size);
    /* 图标宽度 */
    height: var(--card-icon-size);
    /* 图标高度 */
    margin-bottom: 10px;
    /* 底部间距 */
    object-fit: cover;
    /* 图片填充方式 */
    will-change: filter;
    /* 优化动画性能 */
    transition: filter var(--transition-fast);
    /* 过渡动画 */
}

/* 朋友图标样式（圆形头像） */
.baseCard__icon--friend {
    border-radius: var(--border-radius-circle);
    /* 圆形 */
    border: 3px solid var(--white);
    /* 白色边框 */
    filter: drop-shadow(var(--shadow-primary));
    /* 阴影效果 */
}

/* 项目图标样式（方形图标） */
.baseCard__icon--project {
    border-radius: 0;
    /* 无圆角 */
    border: none;
    /* 无边框 */
    filter: none;
    /* 无滤镜 */
}

/* 卡片标题 */
.baseCard__title {
    font-size: 40px;
    /* 字体大小 */
    margin: 0;
    /* 移除外边距 */
    font-weight: bold;
    /* 粗体 */
    color: var(--theme-color);
    /* 主题色 */
}

/* 卡片描述 */
.baseCard__description {
    color: var(--text-color);
    /* 文本颜色 */
    font-size: 14px;
    /* 字体大小 */
    margin-top: 10px;
    /* 顶部间距 */
    text-align: center;
    /* 文本居中 */
}

/* 隐藏链接 */
.baseCard__link {
    position: absolute;
    /* 绝对定位 */
    inset: 0;
    /* 填满整个卡片 */
    z-index: 1;
    /* 层级1 */
    opacity: 0;
    /* 透明 */
}

/* 视觉隐藏（仅屏幕阅读器可见） */
.visuallyHidden {
    position: absolute;
    /* 绝对定位 */
    width: 1px;
    /* 宽度1px */
    height: 1px;
    /* 高度1px */
    padding: 0;
    /* 无内边距 */
    margin: -1px;
    /* 负外边距 */
    overflow: hidden;
    /* 隐藏溢出 */
    clip: rect(0, 0, 0, 0);
    /* 裁剪 */
    white-space: nowrap;
    /* 不换行 */
    border: 0;
    /* 无边框 */
}
</style>
