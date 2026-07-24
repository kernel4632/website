<template>
    <Teleport to="body">
        <div class="baseToast" :class="{ 'baseToast--visible': visible }" role="status" aria-live="polite" aria-atomic="true">
            {{ message }}
        </div>
    </Teleport>
</template>

<script setup lang="ts">
// 轻量提示组件 - 用于展示操作结果
defineProps<{
    message: string
    visible: boolean
}>()
</script>

<style scoped>
.baseToast {
    position: fixed;
    left: 50%;
    bottom: 32px;
    z-index: 10000;
    padding: 12px 20px;
    border-radius: var(--border-radius-tag);
    background-color: var(--theme-color);
    box-shadow: var(--shadow-primary);
    color: var(--white);
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 16px) scale(0.95);
    visibility: hidden;
}

.baseToast--visible {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    visibility: visible;
}
</style>
