<!--
  我的项目页面组件
  
  功能：
  - 展示项目卡片列表
  - 从 JSON 数据加载项目信息
  - 提供导航按钮
  
  SEO 优化：
  - 使用语义化 HTML 标签（section, ul, li, article）
  - 添加 ARIA 标签提升无障碍访问性
  - 使用 Schema.org CreativeWork 微数据
  
  使用示例：
  <ProjectsPage />
-->

<template>
  <PageSection page-id="我的项目" title="我的项目">
    <!-- 项目展示区域 -->
    <section class="projects-section" aria-label="项目作品列表">
      <!-- 项目卡片列表 - 使用 ul 语义化列表 -->
      <ul class="projects-grid" role="list">
        <li v-for="(project, index) in projectsData" :key="index" class="project-item" itemscope
          itemtype="https://schema.org/CreativeWork">
          <BaseCard :title="project.项目名" :description="project.简介" :icon="project.图标" :link="project.网址" type="project"
            :aria-label="`查看项目：${project.项目名}`" />
        </li>
      </ul>
    </section>

    <!-- 导航按钮 -->
    <template #buttons>
      <nav class="projects-nav" role="navigation" aria-label="页面导航">
        <BaseButton variant="secondary" @click="switchPage('关于我')" aria-label="返回关于我页面">
          返回
        </BaseButton>
      </nav>
    </template>
  </PageSection>
</template>

<script setup lang="ts">
/**
 * 我的项目页面组件
 * 
 * 展示个人项目作品，包括：
 * - 炼丹蓝图
 * - DEQ-RWKV
 * - 超级鹦鹉
 * 
 * SEO 说明：
 * - 使用 Schema.org CreativeWork 微数据
 * - 语义化的 ul/li 列表结构
 */

// ==================== Composables ====================

const { switchPage } = usePageNavigation()
const { projectsData, fetchData } = useSiteData()

// ==================== 生命周期 ====================

/**
 * 组件挂载时获取数据
 */
onMounted(() => {
  fetchData()
})
</script>

<style scoped>
/* ==================== 项目区域容器 ==================== */

.projects-section {
  width: 100%;
}

/* ==================== 项目卡片网格布局 ==================== */

.projects-grid {
  padding: 0 20px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
}

/* ==================== 项目列表项 ==================== */

.project-item {
  display: contents;
}

/* ==================== 导航样式 ==================== */

.projects-nav {
  display: contents;
}
</style>
