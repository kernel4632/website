<template>
    <div v-if="isLoading || (!hasLoaded && !error)" class="siteDataState" role="status">正在加载...</div>
    <div v-else-if="error" class="siteDataState" role="alert">
        <p>数据加载失败</p>
        <BaseButton variant="secondary" @click="$emit('retry')">重试</BaseButton>
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
// 站点数据状态 - 统一处理加载失败和重试入口
defineProps<{
    isLoading: boolean
    hasLoaded: boolean
    error: Error | null
}>()

defineEmits<{
    retry: []
}>()
</script>

<style scoped>
.siteDataState {
    display: flex;
    min-height: 180px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
}
</style>
