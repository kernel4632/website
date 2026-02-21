<template>
    <PageSection pageId="about" title="关于我">
        <!-- 个人介绍文章 -->
        <article class="aboutArticle" itemscope itemtype="https://schema.org/Person">
            <!-- 技能标签 -->
            <section class="tagsSection">
                <ul class="tags" role="list">
                    <li v-for="(tag, index) in aboutTags" :key="index" class="tag" itemprop="knowsAbout">
                        {{ tag }}
                    </li>
                </ul>
            </section>

            <!-- 介绍内容 -->
            <section class="aboutContent">
                <p v-for="(line, index) in aboutContent" :key="index">{{ line }}</p>
            </section>
        </article>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="aboutNav" role="navigation">
                <BaseButton variant="primary" @click="switchPage('projects')">我的项目</BaseButton>
                <BaseButton variant="secondary" @click="switchPage('home')">返回</BaseButton>
            </nav>
        </template>
    </PageSection>
</template>

<script setup lang="ts">
// 关于我页面 - 展示个人标签和介绍内容
// 用法：<AboutPage />

import { aboutTags, aboutContent } from '~/site.config'

const { switchPage } = usePageNavigation() // 获取页面切换方法
</script>

<style scoped>
/* 文章容器 */
.aboutArticle {
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    align-items: center;
    /* 水平居中 */
    width: 100%;
    /* 宽度100% */
}

/* 标签区域 */
.tagsSection {
    width: 100%;
    /* 宽度100% */
    display: flex;
    /* 弹性布局 */
    justify-content: center;
    /* 水平居中 */
}

/* 标签容器 */
.tags {
    display: flex;
    /* 弹性布局 */
    flex-direction: row;
    /* 水平排列 */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    margin-bottom: 20px;
    /* 底部间距 */
    padding: 0;
    /* 移除内边距 */
    list-style: none;
    /* 移除列表样式 */
    gap: 16px;
    /* 间距16px */
}

/* 单个标签 */
.tag {
    box-shadow: var(--shadow-primary);
    /* 阴影效果 */
    padding: 8px 12px;
    /* 内边距 */
    border-radius: var(--border-radius-tag);
    /* 圆角 */
    background-color: var(--white);
    /* 白色背景 */
    transition: var(--transition-default);
    /* 过渡动画 */
}

/* 标签悬停效果 */
.tag:hover {
    scale: 1.05;
    /* 放大1.05倍 */
}

/* 介绍内容容器 */
.aboutContent {
    display: flex;
    /* 弹性布局 */
    flex-direction: column;
    /* 垂直排列 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    text-align: center;
    /* 文本居中 */
}

/* 介绍段落 */
.aboutContent p {
    margin: 5px 0;
    /* 上下间距 */
    font-size: 14px;
    /* 字体大小 */
    color: var(--text-color);
    /* 文本颜色 */
    white-space: normal;
    /* 正常换行 */
}

/* 导航 */
.aboutNav {
    display: contents;
    /* 使用contents布局 */
}
</style>
