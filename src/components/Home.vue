<template>
  <PageLayout id="主页" :当前页面="当前页面">
    <img src="@/assets/avatar.jpg" alt="头像" class="头像" />
    <h1>主核Kernyr</h1>
    <h2>永远相信自己可以不自量力地改变世界</h2>
    <template #buttons>
      <Button 类型="1" @click="切换页面('关于我')">了解更多</Button>
      <Button 类型="2" @click="切换页面('友情链接')">我的朋友</Button>
    </template>
    <span class="备案信息">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
        粤ICP备2025504330号
      </a>
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44196102000241" rel="noreferrer" target="_blank"><img
          id="备案图标" src="@/assets/备案图标.png" alt="备案图标" />粤公网安备44196102000241号</a>
    </span>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.备案信息 a {
  font-size: 12px;
  color: rgba(103, 171, 255, 0.6);
  font-family: sans-serif;
  letter-spacing: 1px;

  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.备案信息 a img {
  width: 15px;
  height: 15px;
}

.备案信息 a:hover {
  color: rgba(103, 171, 255, 0.8);
}


</style>
