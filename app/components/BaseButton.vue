<template>
    <button :class="buttonClass" @click="$emit('click', $event)">
        <slot />
    </button>
</template>

<script setup lang="ts">
// 基础按钮组件 - 提供primary和secondary两种样式
// 用法：<BaseButton variant="primary" @click="handleClick">按钮文本</BaseButton>

import type { ButtonVariant } from '~'

interface Props {
    variant?: ButtonVariant // 按钮变体（primary主要 secondary次要）
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary', // 默认为primary
})

defineEmits<{
    click: [event: MouseEvent] // 点击事件
}>()

const buttonClass = computed(() => [ // 计算按钮类名
    'baseButton', // 基础类名
    `baseButton--${props.variant}`, // 变体类名
])
</script>

<style scoped>
/* 按钮基础样式 */
.baseButton {
    color: var(--white);
    /* 白色文字 */
    border: none;
    /* 无边框 */
    box-shadow: var(--shadow-primary);
    /* 阴影效果 */
    border-radius: var(--border-radius-button);
    /* 圆角 */
    font-size: 17px;
    /* 字体大小 */
    height: var(--button-height);
    /* 高度 */
    width: var(--button-width);
    /* 宽度 */
    margin: 15px 0;
    /* 上下外边距 */
    cursor: pointer;
    /* 鼠标指针 */
    outline: none;
    /* 移除轮廓 */
    background-color: var(--theme-color);
    /* 主题色背景 */
    filter: brightness(1);
    /* 亮度100% */
    transition: var(--transition-default);
    /* 过渡动画 */
}

/* 悬停效果 */
.baseButton:hover {
    filter: brightness(1.1);
    /* 亮度110% */
    scale: 1.05;
    /* 放大1.05倍 */
}

/* 点击效果 */
.baseButton:active {
    scale: 0.95;
    /* 缩小0.95倍 */
    filter: brightness(1);
    /* 亮度100% */
}

/* 主要按钮样式 */
.baseButton--primary {
    background-color: var(--theme-color);
    /* 主题色背景 */
    color: var(--white);
    /* 白色文字 */
}

/* 次要按钮样式 */
.baseButton--secondary {
    background-color: var(--white);
    /* 白色背景 */
    color: var(--theme-color);
    /* 主题色文字 */
}
</style>
