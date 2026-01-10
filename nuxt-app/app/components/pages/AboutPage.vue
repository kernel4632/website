<!--
  关于我页面组件
  
  功能：
  - 展示个人标签
  - 展示个人介绍内容
  - 提供导航按钮
  
  SEO 优化：
  - 使用语义化 HTML 标签（article, section, ul）
  - 添加 ARIA 标签提升无障碍访问性
  - 使用 itemscope/itemprop 添加微数据
  
  使用示例：
  <AboutPage />
-->

<template>
    <PageSection page-id="关于我" title="关于我">
        <!-- 个人介绍文章 - 使用 article 标签 -->
        <article class="about-article" itemscope itemtype="https://schema.org/Person" aria-label="关于主核Kernyr的个人介绍">
            <!-- 技能标签区域 - 使用 ul 列表 -->
            <section class="tags-section" aria-label="技能标签">
                <ul class="tags" role="list">
                    <li v-for="(tag, index) in ABOUT_TAGS" :key="index" class="tag" itemprop="knowsAbout">
                        {{ tag }}
                    </li>
                </ul>
            </section>

            <!-- 介绍内容区域 -->
            <section class="about-content" aria-label="个人介绍">
                <p v-for="(line, index) in ABOUT_CONTENT" :key="index"
                    :itemprop="index === 0 ? 'name' : (index === 1 ? 'description' : undefined)">
                    {{ line }}
                </p>
            </section>
        </article>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="about-nav" role="navigation" aria-label="页面导航">
                <BaseButton variant="primary" @click="switchPage('我的项目')" aria-label="查看主核Kernyr的项目">
                    我的项目
                </BaseButton>
                <BaseButton variant="secondary" @click="switchPage('主页')" aria-label="返回主页">
                    返回
                </BaseButton>
            </nav>
        </template>
    </PageSection>
</template>

<script setup lang="ts">
/**
 * 关于我页面组件
 * 
 * 展示个人介绍信息，包括：
 * - 技能标签（设计、开发、创造）
 * - 详细的个人介绍文字
 * 
 * SEO 说明：
 * - 使用 Schema.org Person 微数据
 * - 语义化的 article/section 结构
 */

import { ABOUT_TAGS, ABOUT_CONTENT } from '~/config/site.config'

// ==================== Composables ====================

const { switchPage } = usePageNavigation()
</script>

<style scoped>
/* ==================== 文章容器 ==================== */

.about-article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* ==================== 标签区域 ==================== */

.tags-section {
    width: 100%;
    display: flex;
    justify-content: center;
}

/* ==================== 标签容器 ==================== */

.tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
}

/* ==================== 单个标签样式 ==================== */

.tag {
    box-shadow: var(--shadow-primary);
    padding: 8px 15px;
    margin: 10px 15px;
    border-radius: var(--border-radius-tag);
    background-color: var(--white);
    transition: var(--transition-default);
}

/* 标签悬停效果 */
.tag:hover {
    scale: 1.1;
}

/* ==================== 介绍内容容器 ==================== */

.about-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* ==================== 介绍段落样式 ==================== */

.about-content p {
    margin: 5px 0;
    font-size: 14px;
    color: var(--text-color);
    white-space: normal;
}

/* ==================== 导航样式 ==================== */

.about-nav {
    display: contents;
}
</style>
