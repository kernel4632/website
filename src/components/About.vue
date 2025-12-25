<template>
  <PageLayout id="关于我" 标题="关于我" :当前页面="当前页面">
    <div id="标签">
      <span>🎨设计</span>
      <span>💻开发</span>
      <span>✨创造</span>
    </div>
    <div class="about-content">
      <p>👋 我是主核Kernyr</p>
      <p>一名技术探索者、游戏开发追梦人🌟</p>
      <p>正在广州美术学院度过最美好的大学四年🎓</p>
      <p>痴迷技术探索🔍</p>
      <p>从前端开发到 AI 算法</p>
      <p>从平面设计到游戏机制研究</p>
      <p>都在一点点学习与尝试🧩</p>
      <p>💭白日梦想：</p>
      <p>“不自量力”地改变这个世界🔥</p>
      <p>请多指教🙏😊！</p>
    </div>

    <template #buttons>
      <Button 类型="1" @click="切换页面('我的项目')">我的项目</Button>
      <Button 类型="2" @click="切换页面('主页')">返回</Button>
    </template>
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
