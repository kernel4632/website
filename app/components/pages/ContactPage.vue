<template>
    <PageSection pageId="contact" title="与我联系">
        <!-- 联系方式区域 -->
        <address class="contactsSection">
            <!-- 联系方式列表 -->
            <ul class="contactsList" role="list">
                <li v-for="(contact, index) in contactsData" :key="index" class="contactItem" @click="handleContactClick(contact)" role="button" tabindex="0" @keydown.enter="handleContactClick(contact)" @keydown.space.prevent="handleContactClick(contact)">
                    <!-- 联系方式图标 -->
                    <img :src="`/assets/${contact.icon}`" :alt="`${contact.type}图标`" class="contactIcon" width="40" height="40" loading="lazy" />

                    <!-- 联系方式文本 -->
                    <span class="contactText">{{ contact.text }}</span>
                </li>
            </ul>
        </address>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="contactNav" role="navigation">
                <BaseButton variant="secondary" @click="switchPage('friends')">返回</BaseButton>
            </nav>
        </template>
    </PageSection>
</template>

<script setup lang="ts">
// 联系方式页面 - 展示QQ、微信、哔哩哔哩、GitHub等联系方式
// 用法：<ContactPage />

import type { ContactData } from '~/types'
import { openLinkOrCopy } from '~/utils/clipboard'

const { switchPage } = usePageNavigation() // 获取页面切换方法
const { contactsData, fetchData } = useSiteData() // 获取联系方式数据

onMounted(() => fetchData()) // 组件挂载时获取数据

// 处理联系方式点击 - 有链接就打开，没链接就复制
// 用法：handleContactClick(contact)
async function handleContactClick(contact: ContactData): Promise<void> {
    await openLinkOrCopy(contact.link, contact.text) // 打开链接或复制文本
}
</script>

<style scoped>
/* 联系方式区域 */
.contactsSection {
    width: 100%;
    /* 宽度100% */
    font-style: normal;
    /* 正常字体样式 */
}

/* 联系方式列表 */
.contactsList {
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    width: 100%;
    /* 宽度100% */
    padding: 20px 0;
    /* 上下内边距 */
    margin: 0;
    /* 移除外边距 */
    list-style: none;
    /* 移除列表样式 */
}

/* 单个联系方式项 */
.contactItem {
    display: flex;
    /* 弹性布局 */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    margin: 15px 20px;
    /* 外边距 */
    padding: 10px 0;
    /* 上下内边距 */
    font-size: 30px;
    /* 字体大小 */
    cursor: pointer;
    /* 鼠标指针 */
    user-select: text;
    /* 允许选择文本 */
    transition: var(--transition-default);
    /* 过渡动画 */
}

/* 联系方式悬停效果 */
.contactItem:hover {
    scale: 1.05;
    /* 放大1.05倍 */
}

/* 联系方式焦点效果 */
.contactItem:focus {
    outline: 2px solid var(--theme-color);
    /* 主题色边框 */
    outline-offset: 4px;
    /* 边框偏移 */
    border-radius: 4px;
    /* 圆角 */
}

/* 联系方式图标 */
.contactIcon {
    width: 40px;
    /* 宽度 */
    height: 40px;
    /* 高度 */
    margin-right: 10px;
    /* 右边距 */
    fill: var(--theme-color);
    /* 填充颜色 */
    backdrop-filter: drop-shadow(0 0 10px var(--theme-color));
    /* 阴影效果 */
}

/* 联系方式文本 */
.contactText {
    margin: 0;
    /* 移除外边距 */
    color: var(--text-color);
    /* 文本颜色 */
    font-size: 30px;
    /* 字体大小 */
}

/* 导航 */
.contactNav {
    display: contents;
    /* 使用contents布局 */
}
</style>
