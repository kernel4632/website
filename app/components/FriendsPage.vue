<template>
    <PageSection pageId="friends" title="我的朋友">
        <!-- 朋友列表区域 -->
        <section class="friendsSection">
            <!-- 朋友卡片列表 -->
            <ul class="friendsGrid" role="list">
                <li v-for="(friend, index) in friendsData" :key="index" class="friendItem">
                    <BaseCard :title="friend.name" :description="friend.intro" :icon="friend.avatar" :link="friend.link" type="friend" />
                </li>
            </ul>
        </section>

        <!-- 导航按钮 -->
        <template #buttons>
            <nav class="friendsNav" role="navigation">
                <BaseButton variant="primary" @click="switchPage('contact')">与我联系</BaseButton>
                <BaseButton variant="secondary" @click="switchPage('home')">返回</BaseButton>
            </nav>
        </template>
    </PageSection>
</template>

<script setup lang="ts">
// 友情链接页面 - 展示朋友的头像、名称、简介和链接
// 用法：<FriendsPage />

const { switchPage } = usePageNavigation() // 获取页面切换方法
const { friendsData } = useSiteData() // 获取朋友数据（数据已在app.vue中统一加载）
</script>

<style scoped>
/* 朋友区域 */
.friendsSection {
    width: 100%;
    /* 宽度100% */
}

/* 朋友卡片网格 */
.friendsGrid {
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

/* 朋友列表项 */
.friendItem {
    display: contents;
    /* 使用contents布局 */
}

/* 导航 */
.friendsNav {
    display: contents;
    /* 使用contents布局 */
}
</style>
