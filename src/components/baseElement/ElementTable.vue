<template>
<element-container layout>
  <template slot="pageHeader">
    <slot name="pageHeader"></slot>
  </template>
  <div class="element-design-pro-table">
    <div class="header" ref="header">
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="footer" ref="footer">
      <el-pagination
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
</element-container>
</template>

<script>

import Bus from '@/util/buildIn/bus'
export default {
  created () {
    // 如果是自动请求，则初始化自动请求一次
    this.init && this.$parent.initList()
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化计算table的高度
      this.tableheight()
      // 监听视口变化的事件,再次调整table变化的高度
      Bus.$on('resize', () => {
        this.tableheight()
      })
    })
  },
  props: {
    auto: {
      type: Boolean,
      default: true
    },
    // 是否初始化请求table接口
    init: {
      type: Boolean,
      default: true
    },
    // 初始化请求
    initList: {
      type: Function
      // required: true
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 50, 100]
      }
    }
  },
  data () {
    const { page, pageSize, total } = this.$parent
    return {
      page,
      pageSize,
      total
    }
  },
  watch: {
    '$parent.total' (value) {
      this.total = value
    }
  },
  methods: {
    // 计算出table自适应的高度
    tableheight () {
      if (this.auto) {
        const layoutHeader = 65
        const container = window.innerHeight
        const header = this.$refs.header.offsetHeight
        const footer = this.$refs.footer.offsetHeight
        const pageHeader = this.$el.querySelectorAll('#element-Table-pageHeader')[0].offsetHeight
        const tableHeight = container - header - footer - pageHeader - layoutHeader - 115 + 'px'
        const tableElement = this.$parent.$el.querySelectorAll('div.el-table')[0]
        tableElement.style.height = tableHeight
        tableElement.style.overflow = 'auto'
      }
    },
    // 改变请求条目数量,自动调用接口
    handleSizeChange (val) {
      this.$parent.pageSize = val
      this.$parent.initList()
    },
    // 改变请求条目页数，自动调用接口
    handleCurrentChange (val) {
      this.$parent.page = val
      this.$parent.initList()
    }
  },
  destroyed () {
    // 销毁当前视口变化时对table的变化
    Bus.$off('resize')
  }
}
</script>

<style lang="less" scoped>
.element-design-pro-table {
  height: 100%;
}
</style>
