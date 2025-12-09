<template>
  <section :id="id" :class="{ 隐藏: 当前页面 !== id }">
    <div class="bg"></div>
    <h1 v-if="标题">{{ 标题 }}</h1>
    <span class="横线" v-if="标题"></span>
    <div class="内容">
      <slot></slot>
    </div>
    <div class="按钮组">
      <slot name="buttons"></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String,
  标题: String,
  当前页面: String,
})
</script>
