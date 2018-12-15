<template>
<div class="element-design-pro-size-select">
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <i class="el-icon-view icon" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item  command="medium">Medium</el-dropdown-item>
      <el-dropdown-item  command="small">Small</el-dropdown-item>
      <el-dropdown-item  command="mini">Mini</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  methods: {
    handleSetSize (size) {
      console.log(size)
      this.$ELEMENT.size = size
      console.log(this.$route)
      const { fullPath } = this.$route
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.element-design-pro-size-select {
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.icon {
  font-size: 25px;
  cursor: pointer;
}
</style>
