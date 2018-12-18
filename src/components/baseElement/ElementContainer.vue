<template>
  <div>
    <element-design-page-header ref='pageHeader'>
      <slot name="pageHeader"></slot>
    </element-design-page-header>
    <div
      class="element-design-pro-page-wrapper-content"
      :class="{'element-design-pro-page-wrapper-content-layout': layout}"
    >
      <slot></slot>
      <el-pagination
        v-if="pagination"
        :current-page="page"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import ElementPagination from '@/mixins/baseElement/ElementPagination'
import ElementDesignPageHeader from '@/components/layout/elementDesignPageHeader'
export default {
  created () {
    this.pagination && this.init && this.$parent.initList()
  },
  props: {
    init: {
      type: Boolean,
      default: true
    },
    layout: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pageSizes: this.$parent.pageSizes
    }
  },
  computed: {
    total () {
      return this.$parent.total
    },
    page () {
      return this.$parent[this.$parent.pageName]
    },
    pageSize () {
      return this.$parent[this.$parent.pageSizeName]
    }
  },
  methods: {
    // 改变请求条目数量,自动调用接口
    handleSizeChange (val) {
      this.$parent[this.$parent.pageSizeName] = val
      this.$parent.initList()
    },
    // 改变请求条目页数，自动调用接口
    handleCurrentChange (val) {
      this.$parent[this.$parent.pageName] = val
      this.$parent.initList()
    }
  },
  components: {
    ElementDesignPageHeader
  }
}
</script>

<style lang="less">
  .element-design-pro-page-wrapper-content {
    box-sizing: border-box;
    margin: 24px 24px 0;
  }
  .element-design-pro-page-wrapper-content-layout {
    padding: 24px;
    background: #ffff;
    overflow-y: auto;
  }
  .el-content-contentWidth-Fixed.el-top-mode {
    .element-design-pro-page-wrapper-content {
        width: 1200px;
        margin: 24px auto;
    }
  }
</style>
