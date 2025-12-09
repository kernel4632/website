<template>
  <PageLayout id="联系方式" 标题="与我联系" :当前页面="当前页面">
    <div id="链接组" v-for="(item, 索引) in 联系方式" :key="索引">
      <span class="联系方式">
        <img class="icon" :src="`assets/${item.图标}`" alt="图标" />

        <p @click="打开链接(item)">{{ item.文本 }}</p>
      </span>
    </div>
    <template #buttons>
      <Button 类型="2" @click="切换页面('友情链接')">返回</Button>
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageLayout from './PageLayout.vue'
import Button from './Button.vue'

defineProps({
  当前页面: String,
  切换页面: Function,
})

const 联系方式 = ref([])

onMounted(() => {
  /* 获取到src里assets里的data.json */
  fetch('assets/data.json')
    .then((响应) => 响应.json())
    .then((数据) => {
      联系方式.value = 数据['联系方式']
    })
    .catch((错误) => {
      console.error('获取联系方式失败:', 错误)
    })
})
function 打开链接(item) {
  /* 检测有没有连接，看传入是不是# */
  const 链接 = item.链接
  const 文本 = item.文本
  if (链接 !== '#') {
    /* 不是#，就打开链接 */
    window.open(链接, '_blank')
  } else {
    /* 复制文本到剪贴板 */
    navigator.clipboard.writeText(文本)
    /* 提示用户已复制 */
    alert('已复制到剪贴板')
  }
}
</script>
