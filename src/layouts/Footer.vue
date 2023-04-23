<template>
  <div class="g-footer">
    Copyright © 2023 DueTy &nbsp;&nbsp;
    <a href="https://beian.miit.gov.cn/"> 备案号：渝ICP备2023002204号</a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.g-footer {
  color: #495770;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;

  a {
    color: #495770;
    text-decoration: none;
    &:hover {
      color: #0052d9;
    }
  }
}
</style>
