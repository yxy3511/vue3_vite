<script setup>
import Layout from '@/components/Layout'
import zh from 'ant-design-vue/es/locale/zh_CN';
</script>

<template>
  <a-config-provider :locale="zh">
    <div id="main-container">
      <Layout />
    </div>
  </a-config-provider>
</template>

<style lang="stylus">
#main-container
  font-family PingFangSC-Regular, PingFang SC, FZHeiTi
  user-select none
  height 100%
  // min-height 100vh
  color #000
  user-select none
  tbody td
    user-select text
    word-break break-all
</style>
