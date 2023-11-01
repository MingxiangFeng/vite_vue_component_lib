<template>
  <div :class="['entry', theme]">我是入口组件</div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'light'
  }
})
</script>

<style lang="scss" scoped>
.entry {
  &.light {
    color: #fff;
  }
  &.dark {
    color: pink;
  }
}
</style>
