<template>
<div
  class='element-design-pro-pageHeader'
  >
  <div class="element-design-pro-pageHeader-wrap">
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <template v-for="(breadcrumb, index) in breadcrumbs">
            <el-breadcrumb-item :to="{ path: breadcrumb.href }" v-if="breadcrumb.path" :key="index">{{ breadcrumb.name }}</el-breadcrumb-item>
            <el-breadcrumb-item :key="index" v-else>{{ breadcrumb.name }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <el-tag
      @click.native="tagHandler(tag.path)"
      @close="tagClose(tag.path, index)"
      class="element-design-pro-tag"
      size="small"
      v-for="(tag, index) in innerNavgation"
      :key="tag.name"
      :type="tag.path === activeTag ? '' : 'info'"
      closable>
      {{tag.name}}
    </el-tag>
  </div>
  <slot></slot>
</div>
</template>
<style lang="less">
.element-design-pro-pageHeader {
  display: flex;
  box-sizing: border-box;
  background: #fff;
  padding: 12px 24px;
  flex-direction: column;
  border-bottom: 1px solid #e8e8e8;
  .element-design-pro-pageHeader-wrap {
    display: flex;
    align-items: center;
    > div {
      margin-right: 15px;
    }
  }
  .element-design-pro-tag {
    cursor: pointer;
    margin-right: 20px;
  }
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
  data () {
    return  {
      tags: [],
      activeTag: ''
    }
  },
  computed: {
    ...mapState(['fixHeader', 'innerNavgation']),
    breadcrumbs () {
      let path = this.$route.path
      return this.getPath(path, Menu)
    }
  },
  methods: {
    tagHandler (path) {
      this.$router.push(path)
    },
    tagClose(path, index) {
      this.$store.commit('removeInnerNavgation', index)
      if (this.innerNavgation.length === 0) {
        this.$router.push('/')
        return
      }
      this.$router.push(this.innerNavgation[this.innerNavgation.length -1].path)
    },
    getPath (id, catalog) {
      var that = this
      let path = []
      let flag = false
      try {
        function getNodePath(node) {
          path.push(node)
          if(node.path === id) {
            console.log(1)
            that.activeTag = node.path
            const flag = that.innerNavgation.every(item => item.path !== node.path)
            if (flag) {
              that.$store.commit('addInnerNavgation', node)
            }
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
