<template>
    <div class="filingInfo">
        <!-- ICP备案 -->
        <a :href="icpLink" target="_blank" rel="noopener noreferrer">{{ icpNumber }}</a>

        <!-- 公安备案 -->
        <a :href="policeLink" target="_blank" rel="noopener noreferrer">
            <img :src="policeIconPath" alt="备案图标" class="filingIcon" />
            {{ policeNumber }}
        </a>
    </div>
</template>

<script setup lang="ts">
// 备案信息组件 - 显示ICP备案和公安备案信息
// 用法：<FilingInfo />

import { icpNumber, icpLink, policeNumber, policeLink, policeIconPath } from '~/site.config'
</script>

<style scoped>
/* 备案信息容器 */
.filingInfo {
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    position: absolute;
    /* 绝对定位 */
    bottom: 20px;
    /* 距离底部20px */
    left: 50%;
    /* 距离左边50% */
    transform: translateX(-50%);
    /* 水平居中 */
    z-index: 1;
    /* 层级1 */
}

/* 备案链接 */
.filingInfo a {
    font-size: 12px;
    /* 字体大小 */
    color: var(--text-color-light);
    /* 浅色文本 */
    font-family: var(--font-family);
    /* 字体 */
    letter-spacing: var(--letter-spacing);
    /* 字间距 */
    text-decoration: none;
    /* 移除下划线 */
    cursor: pointer;
    /* 鼠标指针 */
    display: flex;
    /* 弹性布局 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    gap: 5px;
    /* 间距5px */
    transition: color var(--transition-fast);
    /* 颜色过渡动画 */
}

/* 备案链接悬停效果 */
.filingInfo a:hover {
    color: rgba(103, 171, 255, 0.8);
    /* 悬停时的颜色 */
}

/* 备案图标 */
.filingIcon {
    width: 15px;
    /* 宽度 */
    height: 15px;
    /* 高度 */
}
</style>
