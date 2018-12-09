<template>
<div id="app" :style="[blindnessTheme]">
  <el-container>
    <el-aside
      :class="[
        navTheme === 'dark' ? 'el-aside-dark-navTheme' : 'el-aside-light-navTheme',
        {'el-aside-fixSiderbar-Fixed' : fixSiderbar}
      ]"
    >
      <element-design-menu :isCollapse="isCollapse"/>
    </el-aside>
    <el-container :class="[
      {'el-container-fixSiderbar-Fixed-collapse': fixSiderbar && !isCollapse},
      {'el-container-fixSiderbar-Fixed-nocollapse' : fixSiderbar && isCollapse}
    ]">
      <el-header height="64px"
        :class="[
          {'el-header-fixHeader el-header-fixHeader-collapse': fixHeader && !isCollapse},
          {'el-header-fixHeader el-header-fixHeader-nocollapse': fixHeader && isCollapse}
        ]"
      >
        <element-design-header :isCollapse="isCollapse" @menu-trigger="isCollapse = !isCollapse"/>
      </el-header>
      <el-main>
        <element-design-page-header ref='pageHeader'/>
        <div class="element-design-pro-page-wrapper-content" ref="pageContent">
          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <element-design-setting/>
</div>
</template>
<style lang="less">
#app {
  background: #f0f2f5;
  .el-aside {
    width: auto !important;
    min-height: 100vh;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    position: relative;
    z-index: 10;
  }
  .el-aside-dark-navTheme {
    background:#001529;
  }
  .el-aside-light-navTheme {
    background: #ffffff;
  }
  .el-aside-fixSiderbar-Fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  .el-container-fixSiderbar-Fixed-collapse {
    padding-left: 256px;
    transition: all .3s ease-in-out;
  }
  .el-container-fixSiderbar-Fixed-nocollapse {
    padding-left: 64px;
    transition: all .3s ease-in-out;
  }
  .el-header {
    padding: 0;
  }
  .el-header-fixHeader {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    transition: width .3s ease-in-out
  }
  .el-header-fixHeader-collapse {
    width: calc(100% - 256px)
  }
  .el-header-fixHeader-nocollapse {
    width: calc(100% - 60px)
  }
  .el-menu{
    border: none;
  }
  .el-main {
    padding: 0;
  }
  .element-design-pro-page-wrapper-content {
    overflow-y: auto;
    margin: 24px 24px 0;
  }
}
</style>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import ElementDesignHeader from '@/components/layout/elementDesignHeader'
import ElementDesignMenu from '@/components/layout/elementDesignMenu'
import ElementDesignPageHeader from '@/components/layout/elementDesignPageHeader'
import ElementDesignSetting from '@/components/layout/elementDesignSetting'
export default {
  name: 'app',
  data () {
    return {
      isCollapse: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    ElementDesignHeader,
    ElementDesignMenu,
    ElementDesignPageHeader,
    ElementDesignSetting
  },
  computed: {
    blindnessTheme () {
      return this.blindness ? { filter: 'invert(80%)' } : {}
    },
    ...mapState(['navTheme', 'fixSiderbar', 'fixHeader', 'onlyScreen', 'blindness'])
  },
  watch: {
    onlyScreen: {
      handler (value) {
        console.log(value)
        if (value) {
          this.$nextTick(() => {
            const headerHeight = 64
            const pageHeaderHeight = this.$refs.pageHeader.$el.offsetHeight
            const pageContentMargin = 48
            const totalHeight = headerHeight + pageHeaderHeight + pageContentMargin
            this.$refs.pageContent.style.height = window.innerHeight - totalHeight + 'px'
            window.onresize = _.debounce(() => {
              // Bus.$emit('resize')
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
  }
}
</script>
