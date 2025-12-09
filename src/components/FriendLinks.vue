<template>
  <PageLayout id="友情链接" 标题="我的朋友" :当前页面="当前页面">
    <div id="链接">
      <Card
        v-for="(项目, 索引) in 朋友数据"
        :key="索引"
        :昵称="项目.名字"
        :简介="项目.简介"
        :图标="项目.头像"
        :链接="项目.链接"
        卡片名称="卡片"
      />
    </div>
    <template #buttons>
      <Button 类型="1" @click="切换页面('联系方式')">与我联系</Button>
      <Button 类型="2" @click="切换页面('主页')">返回</Button>
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

const 朋友数据 = ref([])

onMounted(() => {
  /* 获取到src里assets里的data.json */
  fetch('assets/data.json')
    .then((响应) => 响应.json())
    .then((数据) => {
      朋友数据.value = 数据['朋友数据']
    })
    .catch((错误) => {
      console.error('获取朋友数据失败:', 错误)
    })
})
</script>
