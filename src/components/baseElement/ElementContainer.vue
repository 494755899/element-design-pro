<template>
  <div>
    <element-design-page-header ref='pageHeader'>
      <slot name="pageHeader"></slot>
    </element-design-page-header>
    <div class="element-design-pro-page-wrapper-content" id="pageContent" ref="pageContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ElementDesignPageHeader from '@/components/layout/elementDesignPageHeader'
export default {
  components: {
    ElementDesignPageHeader
  }
}
</script>

<style lang="less">
  .element-design-pro-page-wrapper-content {
    padding: 24px;
    background: #ffff;
    overflow-y: auto;
    margin: 24px 24px 0;
    box-sizing: border-box;
  }
  .el-content-contentWidth-Fixed.el-top-mode {
    .element-design-pro-page-wrapper-content {
        width: 1200px;
        margin: 24px auto;
    }
  }
</style>
