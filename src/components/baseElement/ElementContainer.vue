<template>
  <div>
    <element-design-page-header ref='pageHeader'>
      <slot name="pageHeader"></slot>
    </element-design-page-header>
    <div
      class="element-design-pro-page-wrapper-content"
      :class="{'element-design-pro-page-wrapper-content-layout': layout}"
      id="pageContent"
      ref="pageContent"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Bus from '@/util/buildIn/bus'
import { mapState } from 'vuex'
import ElementDesignPageHeader from '@/components/layout/elementDesignPageHeader'
export default {
  props: {
    layout: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['onlyScreen'])
  },
  watch: {
    onlyScreen: {
      handler (value) {
        if (value) {
          this.$nextTick(() => {
            const headerHeight = 64
            const pageHeaderHeight = this.$refs.pageHeader.$el.offsetHeight
            const pageContentMarginPadding = 48
            const totalHeight = headerHeight + pageHeaderHeight + pageContentMarginPadding
            this.$refs.pageContent.style.height = window.innerHeight - totalHeight + 'px'
            window.onresize = _.debounce(() => {
              Bus.$emit('resize')
              this.$refs.pageContent.style.height = window.innerHeight - totalHeight + 'px'
            }, 100)
          })
        } else {
          this.$nextTick(() => {
            this.$refs.pageContent.style.height = 'auto'
          })
        }
      },
      immediate: true
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
