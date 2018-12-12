<template>
<div id="app" :style="[blindnessTheme]">
  <el-container
    :class="[
      navTheme === 'dark' ? 'el-dark-navTheme':'el-light-navTheme',
      layout === 'slide' ? 'el-slide-mode' : 'el-top-mode',
      {'el-aside-fixSiderbar-Fixed el-container-fixSiderbar-Fixed-collapse': fixSiderbar && !isCollapse},
      {'el-aside-fixSiderbar-Fixed el-container-fixSiderbar-Fixed-nocollapse' : fixSiderbar && isCollapse},
      {'el-header-fixHeader el-header-fixHeader-collapse': fixHeader && !isCollapse},
      {'el-header-fixHeader el-header-fixHeader-nocollapse': fixHeader && isCollapse},
      contentWidth === 'Fluid' ? 'el-content-contentWidth-Fluid' : 'el-content-contentWidth-Fixed'
    ]"
  >
    <el-aside v-if="layout === 'slide'">
      <element-design-menu :isCollapse="isCollapse"/>
    </el-aside>
    <el-container class="element-design-pro-transition-wrapper-fix">
      <transition name="el-fade-in-linear">
        <el-header height="64px" v-show="showHeader">
          <element-design-header :isCollapse="isCollapse" @menu-trigger="isCollapse = !isCollapse"/>
        </el-header>
      </transition>
      <el-main>
        <element-design-page-header ref='pageHeader'/>
        <div class="element-design-pro-page-wrapper-content" id="pageContent" ref="pageContent">
         <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <element-design-back-to-top/>
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
  .el-dark-navTheme {
    .el-aside {
      background:#001529;
    }
  }
  .el-light-navTheme {
    .el-aside {
      background: #ffffff;
    }
  }
  .el-aside-fixSiderbar-Fixed {
    .el-aside {
      overflow-y: scroll;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .el-slide-mode.el-container-fixSiderbar-Fixed-collapse {
    padding-left: 256px;
    transition: all .3s ease-in-out;
  }
  .el-slide-mode.el-container-fixSiderbar-Fixed-nocollapse {
    padding-left: 64px;
    transition: all .3s ease-in-out;
  }
  .element-design-pro-transition-wrapper-fix {
    flex-direction: column
  }
  .el-header {
    padding: 0;
    width: 100%;
  }
  .el-header-fixHeader {
    .el-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 5;
      transition: width .3s ease-in-out
    }
  }
  .el-slide-mode.el-header-fixHeader-collapse {
    .el-header {
      width: calc(100% - 256px)
    }
  }
  .el-slide-mode.el-header-fixHeader-nocollapse {
    .el-header {
      width: calc(100% - 60px)
    }
  }
  .el-top-mode.el-header-fixHeader-collapse {
    .el-header {
      width: 100%
    }
  }
  .el-top-mode.el-header-fixHeader-nocollapse {
    .el-header {
      width: 100%;
    }
  }
  .el-menu{
    border: none;
  }
  .el-main {
    padding: 0;
  }
  .element-design-pro-page-wrapper-content {
    padding: 24px;
    background: #ffff;
    overflow-y: auto;
    margin: 24px 24px 0;
  }
  .el-content-contentWidth-Fixed.el-top-mode {
    .element-design-pro-page-wrapper-content {
        width: 1200px;
        margin: 24px auto;
    }
  }

}
</style>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import ElementDesignBackToTop from '@/components/layout/elementDesignBackToTop'
import ElementDesignHeader from '@/components/layout/elementDesignHeader'
import ElementDesignMenu from '@/components/layout/elementDesignMenu'
import ElementDesignPageHeader from '@/components/layout/elementDesignPageHeader'
import ElementDesignSetting from '@/components/layout/elementDesignSetting'
export default {
  name: 'app',
  data () {
    return {
      isCollapse: false,
      showHeader: true
    }
  },
  components: {
    ElementDesignHeader,
    ElementDesignMenu,
    ElementDesignPageHeader,
    ElementDesignSetting,
    ElementDesignBackToTop
  },
  computed: {
    blindnessTheme () {
      return this.blindness ? { filter: 'invert(80%)' } : {}
    },
    ...mapState(['layout', 'navTheme', 'fixSiderbar', 'fixHeader', 'contentWidth', 'hideHeader', 'onlyScreen', 'blindness'])
  },
  watch: {
    onlyScreen: {
      handler (value) {
        if (value) {
          this.$nextTick(() => {
            const headerHeight = 64
            const pageHeaderHeight = this.$refs.pageHeader.$el.offsetHeight
            const pageContentMarginPadding = 48 * 2
            const totalHeight = headerHeight + pageHeaderHeight + pageContentMarginPadding
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
    },
    hideHeader: {
      handler (value) {
        if (value) {
          this.hasEventListenerScroll = true
          this.$nextTick(() => {
            this.top = 0
            window.addEventListener('scroll', this.hideHeaderHandler)
          })
        } else {
          this.$nextTick(() => {
            if (this.hasEventListenerScroll) {
              window.removeEventListener('scroll', this.hideHeaderHandler)
            }
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    hideHeaderHandler: _.throttle(function () {
      console.log(document.documentElement.scrollTop)
      const content = document.documentElement || document.body
      const scrolltop = content.scrollTop
      if (scrolltop > this.top && scrolltop > 200) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
      this.top = scrolltop
    }, 200)
  }
}
</script>
