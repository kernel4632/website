<!--
  基础按钮组件
  
  功能：
  - 提供两种按钮样式（主要/次要）
  - 支持点击事件
  - 统一的悬停和点击动画效果
  
  Props:
  - variant: 按钮变体 ('primary' | 'secondary')
  
  使用示例：
  <BaseButton variant="primary" @click="handleClick">主要按钮</BaseButton>
  <BaseButton variant="secondary" @click="handleClick">次要按钮</BaseButton>
-->

<template>
    <button :class="buttonClass" @click="$emit('click', $event)">
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { ButtonVariant } from '~/types'

// ==================== Props 定义 ====================

interface Props {
    /** 
     * 按钮变体样式
     * - primary: 主要按钮（主题色背景，白色文字）
     * - secondary: 次要按钮（白色背景，主题色文字）
     */
    variant?: ButtonVariant
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
})

// ==================== Emits 定义 ====================

defineEmits<{
    /** 点击事件 */
    click: [event: MouseEvent]
}>()

// ==================== 计算属性 ====================

/**
 * 计算按钮类名
 * 根据 variant 属性生成对应的 CSS 类
 */
const buttonClass = computed(() => [
    'base-button',
    `base-button--${props.variant}`,
])
</script>

<style scoped>
/* ==================== 按钮基础样式 ==================== */

.base-button {
    /* 颜色和边框 */
    color: var(--white);
    border: none;
    box-shadow: var(--shadow-primary);
    border-radius: var(--border-radius-button);

    /* 尺寸 */
    font-size: 17px;
    height: var(--button-height);
    width: var(--button-width);
    margin: 15px 0;

    /* 交互 */
    cursor: pointer;
    outline: none;

    /* 默认背景 */
    background-color: var(--theme-color);
    filter: brightness(1);

    /* 过渡动画 */
    transition: var(--transition-default);
}

/* ==================== 悬停效果 ==================== */

.base-button:hover {
    filter: brightness(1.1);
    scale: 1.05;
}

/* ==================== 点击效果 ==================== */

.base-button:active {
    scale: 0.95;
    filter: brightness(1);
}

/* ==================== 主要按钮样式 ==================== */

.base-button--primary {
    background-color: var(--theme-color);
    color: var(--white);
}

/* ==================== 次要按钮样式 ==================== */

.base-button--secondary {
    background-color: var(--white);
    color: var(--theme-color);
}
</style>
