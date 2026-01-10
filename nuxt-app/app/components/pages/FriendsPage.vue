<!--
  友情链接页面组件
  
  功能：
  - 展示朋友卡片列表
  - 从 JSON 数据加载朋友信息
  - 提供导航按钮
  
  SEO 优化：
  - 使用语义化 HTML 标签（section, ul, li）
  - 添加 ARIA 标签提升无障碍访问性
  - 外部链接添加 rel="noopener noreferrer"
  
  使用示例：
  <FriendsPage />
-->

<template>
    <PageSection page-id="友情链接" title="我的朋友">
        <!-- 朋友列表区域 -->
        <section class="friends-section" aria-label="友情链接列表">
            <!-- 朋友卡片列表 - 使用 ul 语义化列表 -->
            <ul class="friends-grid" role="list">
                <li v-for="(friend, index) in friendsData" :key="index" class="friend-item">
                    <BaseCard :title="friend.名字" :description="friend.简介" :icon="friend.头像" :link="friend.链接"
                        type="friend" :aria-label="`访问${friend.名字}的主页`" />
                </li>
            </ul>
        </section>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="friends-nav" role="navigation" aria-label="页面导航">
                <BaseButton variant="primary" @click="switchPage('联系方式')" aria-label="查看联系方式">
                    与我联系
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
 * 友情链接页面组件
 * 
 * 展示朋友/合作伙伴的链接卡片，包括：
 * - 头像
 * - 名称
 * - 简介
 * - 链接
 * 
 * SEO 说明：
 * - 使用语义化的 ul/li 列表结构
 * - 外部链接自动添加安全属性
 */

// ==================== Composables ====================

const { switchPage } = usePageNavigation()
const { friendsData, fetchData } = useSiteData()

// ==================== 生命周期 ====================

/**
 * 组件挂载时获取数据
 */
onMounted(() => {
    fetchData()
})
</script>

<style scoped>
/* ==================== 朋友区域容器 ==================== */

.friends-section {
    width: 100%;
}

/* ==================== 朋友卡片网格布局 ==================== */

.friends-grid {
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

/* ==================== 朋友列表项 ==================== */

.friend-item {
    display: contents;
}

/* ==================== 导航样式 ==================== */

.friends-nav {
    display: contents;
}
</style>
