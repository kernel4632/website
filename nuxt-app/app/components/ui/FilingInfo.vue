<!--
  备案信息组件
  
  功能：
  - 显示 ICP 备案信息
  - 显示公安备案信息
  - 支持点击跳转到备案查询页面
  
  使用示例：
  <FilingInfo />
-->

<template>
    <div class="filing-info">
        <!-- ICP 备案 -->
        <a :href="ICP_LINK" target="_blank" rel="noopener noreferrer">
            {{ ICP_NUMBER }}
        </a>

        <!-- 公安备案 -->
        <a :href="POLICE_LINK" target="_blank" rel="noopener noreferrer">
            <img :src="POLICE_ICON_PATH" alt="备案图标" class="filing-icon" />
            {{ POLICE_NUMBER }}
        </a>
    </div>
</template>

<script setup lang="ts">
import {
    ICP_NUMBER,
    ICP_LINK,
    POLICE_NUMBER,
    POLICE_LINK,
    POLICE_ICON_PATH,
} from '~/config/site.config'
</script>

<style scoped>
/* ==================== 备案信息容器 ==================== */

.filing-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

/* ==================== 备案链接样式 ==================== */

.filing-info a {
    font-size: 12px;
    color: var(--text-color-light);
    font-family: var(--font-family);
    letter-spacing: var(--letter-spacing);
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: color var(--transition-fast);
}

/* 备案链接悬停效果 */
.filing-info a:hover {
    color: rgba(103, 171, 255, 0.8);
}

/* ==================== 备案图标 ==================== */

.filing-icon {
    width: 15px;
    height: 15px;
}
</style>
