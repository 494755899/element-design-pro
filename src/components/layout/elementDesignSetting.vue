<template>
  <div class="paper-setting">
    <el-popover
      popper-class="setting-popper"
      placement="right"
      width="300"
      trigger="click">
      <div>
        <!-- 顶部主题设置 -->
        <div class="set-navgiation">
          <p>整体风格设置</p>
          <div>
            <el-tooltip class="item" effect="dark" content="暗色菜单风格" placement="top">
              <div @click="ChangeSettingMode('navTheme', 'dark')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
                <i v-if="navTheme === 'dark'"><svg viewBox="64 64 896 896" class="" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i>
              </div>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="dark" content="亮色菜单风格" placement="top">
              <div @click="ChangeSettingMode('navTheme', 'light')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
                <i v-if="navTheme === 'light'"><svg viewBox="64 64 896 896" class="" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i>
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div>
        <!-- 顶部导航设置 -->
        <div class="set-navgiation">
          <p>导航模式</p>
          <div>
            <el-tooltip class="item" effect="dark" content="侧边菜单布局" placement="top">
              <div @click="ChangeSettingMode('layout', 'slide')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="">
                <i v-if="layout === 'slide'"><svg viewBox="64 64 896 896" class="" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i>
              </div>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="dark" content="暂未开放,敬请期待!同时会开放流式布局" placement="top">
              <div @click="ChangeSettingMode('layout', 'slide')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="">
                <i v-if="layout === 'top'"><svg viewBox="64 64 896 896" class="" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i>
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
      <!-- 其它内容设置 -->
      <div class="setting-another">
        <div>
          <span>内容区域宽度</span>
          <el-select disabled @change="(value) => ChangeSettingMode('contentWidth', value)" class="contentWidth-select" size='mini' v-model="selectContentWidth" placeholder="请选择">
            <el-option
              v-for="item in contentWidthOp"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <span>固定侧边菜单</span>
          <el-switch
            :disabled="layout === 'top'"
            @change="(value) => ChangeSettingMode('fixSiderbar', value)"
            v-model="checkboxFixSiderbar"
          >
          </el-switch>
        </div>
        <div>
          <span>固定 Header</span>
          <el-switch
           @change="(value) => ChangeSettingMode('fixHeader', value)"
            v-model="checkboxFixHeader"
          >
          </el-switch>
        </div>
        <div>
          <span>下滑时隐藏 Header</span>
          <el-switch
            :disabled="!fixHeader"
            @change="(value) => ChangeSettingMode('hideHeader', value)"
            v-model="checkboxHideHeader"
          >
          </el-switch>
        </div>
        <div>
          <span>一屏流展式</span>
          <el-switch
            @change="(value) => ChangeSettingMode('onlyScreen', value)"
            v-model="checkboxOnlyScreen"
          >
          </el-switch>
        </div>
        <div>
          <span>回到顶部</span>
          <el-switch
            @change="(value) => ChangeSettingMode('backToTop', value)"
            v-model="checkboxBackToTop"
          >
          </el-switch>
        </div>
      </div>
      <el-button slot="reference" type="primary" icon="el-icon-edit" circle></el-button>
    </el-popover>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      selectContentWidth: 'Fixed',
      checkboxFixSiderbar: false,
      checkboxFixHeader: false,
      checkboxHideHeader: false,
      checkboxOnlyScreen: false,
      checkboxBackToTop: false
    }
  },
  computed: {
    ...mapState(['layout', 'contentWidth', 'fixSiderbar', 'fixHeader', 'onlyScreen', 'navTheme', 'hideHeader', 'backToTop']),
    contentWidthOp () {
      if (this.layout === 'slide') {
        return [{ label: '定宽', value: 'Fixed' }]
      } else {
        return [{ label: '定宽', value: 'Fixed' }, { label: '流式', value: 'Fluid' }]
      }
    }
  },
  methods: {
    ChangeSettingMode (modeType, mode) {
      this.$store.commit('changeMode', { modeType, mode })
    }
  },
  watch: {
    layout (value) {
      if (value === 'slide') {
        this.selectContentWidth = 'Fixed'
        this.ChangeSettingMode('contentWidth', 'Fixed')
      }
    },
    fixHeader (value) {
      if (!value) {
        this.ChangeSettingMode('hideHeader', false)
        this.checkboxHideHeader = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.paper-setting {
  position: fixed;
  z-index: 9999;
  top: 50%;
  right: 0;
}
.setting-popper {
  .set-navgiation {
    p {
      font-size: 14px;
      color: rgba(0,0,0,.85);
      line-height: 22px;
      margin-bottom: 12px;
    }
    >div {
      display: inline-block;
      position: relative;
      &:nth-of-type(1) {
        margin-right: 20px;
      }
      i {
        position: absolute;
        bottom: 0;
        right: 10px;
        bottom: 10px
      }
    }
  }
  .setting-another {
    > div {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .contentWidth-select {
        width: 100px;
      }
    }
  }
}
</style>
