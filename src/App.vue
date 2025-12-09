<template>
  <Home :当前页面="当前页面" :切换页面="切换页面" />
  <About :当前页面="当前页面" :切换页面="切换页面" />
  <FriendLinks :当前页面="当前页面" :切换页面="切换页面" />
  <Contact :当前页面="当前页面" :切换页面="切换页面" />
  <Projects :当前页面="当前页面" :切换页面="切换页面" />
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import FriendLinks from './components/FriendLinks.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'

const 当前页面 = ref('主页')

function 切换页面(新页面) {
  window.scrollTo(0, 0)
  当前页面.value = 新页面
  console.log(`页面切换→${当前页面.value}`)
}
</script>
