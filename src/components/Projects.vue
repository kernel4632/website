<template>
  <PageLayout id="我的项目" 标题="我的项目" :当前页面="当前页面">
    <div id="项目">
      <Card
        v-for="(项目, 索引) in 项目数据"
        :key="索引"
        :昵称="项目.项目名"
        :简介="项目.简介"
        :图标="项目.图标"
        :链接="项目.网址"
        卡片名称="卡片"
      />
    </div>
    <template #buttons>
      <Button 类型="2" @click="切换页面('关于我')">返回</Button>
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageLayout from './PageLayout.vue'
import Button from './Button.vue'
import Card from './Card.vue'

defineProps({
  当前页面: String,
  切换页面: Function,
})

const 项目数据 = ref([]) // 初始化空数组

// 在组件挂载后获取数据
onMounted(() => {
  fetch('assets/data.json')
    .then((响应) => 响应.json())
    .then((数据) => {
      // 更新组件的响应式数据
      项目数据.value = 数据['项目数据']
    })
    .catch((错误) => {
      console.error('获取项目数据失败:', 错误)
    })
})
</script>
