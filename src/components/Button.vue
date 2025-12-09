<template>
  <button :class="`按钮${类型}`">
    <slot>{{ 文本 }}</slot>
  </button>
</template>

<script setup>
defineProps({
  类型: String,
  文本: String,
})
</script>
