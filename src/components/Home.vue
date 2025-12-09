<template>
  <PageLayout id="主页" :当前页面="当前页面">
    <img src="@/assets/avatar.jpg" alt="头像" class="头像" />
    <h1>主核Kernyr</h1>
    <h2>永远相信自己可以不自量力地改变世界</h2>
    <template #buttons>
      <Button 类型="1" @click="切换页面('关于我')">了解更多</Button>
      <Button 类型="2" @click="切换页面('友情链接')">我的朋友</Button>
    </template>
    <a class="备案信息" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
      粤ICP备2025504330号
    </a>
  </PageLayout>

</template>

<script setup>
import PageLayout from './PageLayout.vue'
import Button from './Button.vue'

defineProps({
  当前页面: String,
  切换页面: Function,
})
</script>

<style scoped>
.备案信息 {
  font-size: 12px;
  color: rgba(103, 171, 255, 0.6);
  font-family: sans-serif;
  letter-spacing: 1px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  cursor: pointer;
}

.备案信息:hover {
  color: rgba(103, 171, 255, 0.8);
}
</style>
