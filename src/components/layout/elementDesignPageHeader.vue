<template>
<div
  class='element-design-pro-pageHeader'
  >
  <div class="element-design-pro-pageHeader-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</div>
</template>
<style lang="less">
.element-design-pro-pageHeader {
  background: #fff;
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8e8;
}
.el-header-fixHeader {
  .element-design-pro-pageHeader {
    margin-top: 64px;
  }
}
.el-content-contentWidth-Fixed.el-top-mode {
  .element-design-pro-pageHeader-wrap {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['fixHeader'])
  }
}
</script>
