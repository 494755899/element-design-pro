<template>
<div
  class='element-design-pro-pageHeader'
  >
  <div class="element-design-pro-pageHeader-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="(breadcrumb, index) in breadcrumbs">
          <el-breadcrumb-item :to="{ path: breadcrumb.href }" v-if="breadcrumb.path" :key="index">{{ breadcrumb.name }}</el-breadcrumb-item>
          <el-breadcrumb-item :key="index" v-else>{{ breadcrumb.name }}</el-breadcrumb-item>
      </template>
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
/* eslint-disable */
import Menu from '@/config/menu'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['fixHeader']),
    breadcrumbs () {
      let path = this.$route.path
      return this.getPath(path, Menu)
    }
  },
  methods: {
    getPath (id, catalog) {
      let path = []
      let flag = false
      try {
        function getNodePath(node) {
          path.push(node)
          if(node.path === id) {
            flag = true
            throw('got it')
          }
          var child = node.children || []
          if (child.length > 0) {
            for(let i = 0; i < child.length; i++) {
              getNodePath(child[i])
            }
            path.pop()
          } else {
            path.pop()
          }
        }
        for(let i=0; i<catalog.length; i++) {
          if (flag) break
          getNodePath(catalog[i])
        }
      } catch (error) {}
      return path
    }
  }
}
</script>
