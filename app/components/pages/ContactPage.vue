<!--
  联系方式页面组件
  
  功能：
  - 展示联系方式列表
  - 支持点击打开链接或复制文本
  - 从 JSON 数据加载联系方式
  
  SEO 优化：
  - 使用语义化 HTML 标签（section, address, ul）
  - 添加 ARIA 标签提升无障碍访问性
  - 使用 address 标签标记联系信息
  
  使用示例：
  <ContactPage />
-->

<template>
    <PageSection page-id="联系方式" title="与我联系">
        <!-- 联系方式区域 - 使用 address 标签表示联系信息 -->
        <address class="contacts-section" aria-label="联系方式列表">
            <!-- 联系方式列表 -->
            <ul class="contacts-list" role="list">
                <li v-for="(contact, index) in contactsData" :key="index" class="contact-item"
                    @click="handleContactClick(contact)" role="button" tabindex="0"
                    :aria-label="`${contact.类型}: ${contact.文本}${contact.链接 ? '，点击访问' : '，点击复制'}`"
                    @keydown.enter="handleContactClick(contact)" @keydown.space.prevent="handleContactClick(contact)">
                    <!-- 联系方式图标 -->
                    <img :src="`/assets/${contact.图标}`" :alt="`${contact.类型}图标`" class="contact-icon" width="40"
                        height="40" loading="lazy" />

                    <!-- 联系方式文本 -->
                    <span class="contact-text">{{ contact.文本 }}</span>
                </li>
            </ul>
        </address>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="contact-nav" role="navigation" aria-label="页面导航">
                <BaseButton variant="secondary" @click="switchPage('友情链接')" aria-label="返回友情链接页面">
                    返回
                </BaseButton>
            </nav>
        </template>
    </PageSection>
</template>

<script setup lang="ts">
/**
 * 联系方式页面组件
 * 
 * 展示各种联系方式，包括：
 * - QQ
 * - 微信
 * - 哔哩哔哩
 * - GitHub
 * 
 * SEO 说明：
 * - 使用 address 标签标记联系信息（符合 HTML5 语义）
 * - 添加键盘导航支持（无障碍访问）
 */

import type { ContactData } from '~/types'
import { openLinkOrCopy } from '~/utils/clipboard'

// ==================== Composables ====================

const { switchPage } = usePageNavigation()
const { contactsData, fetchData } = useSiteData()

// ==================== 生命周期 ====================

/**
 * 组件挂载时获取数据
 */
onMounted(() => {
    fetchData()
})

// ==================== 方法 ====================

/**
 * 处理联系方式点击事件
 * 如果有链接则打开，否则复制文本到剪贴板
 * 
 * @param contact - 联系方式数据
 */
async function handleContactClick(contact: ContactData): Promise<void> {
    await openLinkOrCopy(contact.链接, contact.文本)
}
</script>

<style scoped>
/* ==================== 联系方式区域容器 ==================== */

.contacts-section {
    width: 100%;
    font-style: normal;
}

/* ==================== 联系方式列表容器 ==================== */

.contacts-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    margin: 0;
    list-style: none;
}

/* ==================== 单个联系方式项 ==================== */

.contact-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 20px;
    padding: 10px 0;
    font-size: 30px;
    cursor: pointer;

    /* 允许文本选择 */
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;

    transition: var(--transition-default);
}

/* 联系方式悬停效果 */
.contact-item:hover {
    scale: 1.05;
}

/* 联系方式焦点效果（无障碍访问） */
.contact-item:focus {
    outline: 2px solid var(--theme-color);
    outline-offset: 4px;
    border-radius: 4px;
}

/* ==================== 联系方式图标 ==================== */

.contact-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    fill: var(--theme-color);
    backdrop-filter: drop-shadow(0 0 10px var(--theme-color));
}

/* ==================== 联系方式文本 ==================== */

.contact-text {
    margin: 0;
    color: var(--text-color);
    font-size: 30px;
}

/* ==================== 导航样式 ==================== */

.contact-nav {
    display: contents;
}
</style>
