<template>
  <div
    :class="卡片名称"
    @click="链接 && 链接 !== '#' ? handleClick() : null"
    :style="{ cursor: 链接 && 链接 !== '#' ? 'pointer' : 'default' }"
  >
    <img :src="图标路径" alt="图标" class="图标" />
    <h1>{{ 昵称 }}</h1>
    <span>{{ 简介 }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  昵称: String,
  简介: String,
  图标: String,
  链接: String,
  卡片名称: String,
})

const 图标路径 = computed(() => {
  return props.图标.startsWith('http') ? props.图标 : `/assets/${props.图标}`
})

function handleClick() {
  if (props.链接 && props.链接 !== '#') {
    window.open(props.链接)
  }
}
</script>
