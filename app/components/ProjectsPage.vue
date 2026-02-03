<template>
  <PageSection pageId="projects" title="我的项目">
    <!-- 项目展示区域 -->
    <section class="projectsSection">
      <!-- 项目卡片列表 -->
      <ul class="projectsGrid" role="list">
        <li v-for="(project, index) in projectsData" :key="index" class="projectItem">
          <BaseCard :title="project.name" :description="project.intro" :icon="project.icon" :link="project.url" type="project" />
        </li>
      </ul>
    </section>

    <!-- 导航按钮 -->
    <template #buttons>
      <nav class="projectsNav" role="navigation">
        <BaseButton variant="secondary" @click="switchPage('about')">返回</BaseButton>
      </nav>
    </template>
  </PageSection>
</template>

<script setup lang="ts">
// 我的项目页面 - 展示项目的图标、名称、简介和链接
// 用法：<ProjectsPage />

const { switchPage } = usePageNavigation() // 获取页面切换方法
const { projectsData } = useSiteData() // 获取项目数据（数据已在app.vue中统一加载）
</script>

<style scoped>
/* 项目区域 */
.projectsSection {
  width: 100%;
  /* 宽度100% */
}

/* 项目卡片网格 */
.projectsGrid {
  padding: 0 20px;
  /* 左右内边距 */
  margin: 0;
  /* 移除外边距 */
  width: 100%;
  /* 宽度100% */
  display: flex;
  /* 弹性布局 */
  flex-direction: row;
  /* 水平排列 */
  flex-wrap: wrap;
  /* 允许换行 */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  list-style: none;
  /* 移除列表样式 */
}

/* 项目列表项 */
.projectItem {
  display: contents;
  /* 使用contents布局 */
}

/* 导航 */
.projectsNav {
  display: contents;
  /* 使用contents布局 */
}
</style>
