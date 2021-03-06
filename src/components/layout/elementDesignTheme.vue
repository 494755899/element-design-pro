<template>
<div class="element-design-layout-setting-drawer-theme-color">
  <p>主题色</p>
  <div>
    <ul>
      <el-tooltip v-for="item in colorList" :key="item.color" effect="dark" :content="item.popper" placement="top">
        <li :style="{background: item.color}" @click="theme = item.color">
          <i v-show="theme === item.color" class="el-icon-check"></i>
        </li>
      </el-tooltip>
    </ul>
  </div>
</div>
</template>

<script>

const version = require('element-ui/package.json').version // element-ui version from node_modules

export default {
  created () {
    if (this.$store.state.primaryColor !== '#1890FF') {
      this.theme = this.$store.state.primaryColor
      this.flag = false
    }
  },
  data () {
    return {
      flag: true,
      colorList: [
        { popper: '薄暮', color: '#F5222D' },
        { popper: '火山', color: '#FA541C' },
        { popper: '日暮', color: '#FAAD14' },
        { popper: '明青', color: '#13C2C2' },
        { popper: '极山绿', color: '#52C41A' },
        { popper: '拂晓蓝（默认）', color: '#1890FF' },
        { popper: '极客蓝', color: '#2F54EB' },
        { popper: '酱紫', color: '#722ED1' }
      ],
      ORIGINAL_THEME: '#409EFF',
      theme: '#1890FF'
    }
  },
  watch: {
    theme (val, oldVal) {
      if (typeof val !== 'string') return
      this.$store.commit('changeMode', { modeType: 'primaryColor', mode: val })
      const themeCluster = this.getThemeCluster(val.replace('#', ''))
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
      console.log(themeCluster, originalCluster)
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(this.ORIGINAL_THEME.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }

      const chalkHandler = getHandler('chalk', 'chalk-style')

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        this.getCSSString(url, chalkHandler, 'chalk')
      } else {
        chalkHandler()
      }

      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
      if (this.flag) {
        this.$message({
          message: '换肤成功',
          type: 'success'
        })
      }
      this.flag = true
    }
  },

  methods: {
    updateStyle (style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },

    getCSSString (url, callback, variable) {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
          callback()
        }
      }
      xhr.open('GET', url)
      xhr.send()
    },

    getThemeCluster (theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }
  }
}
</script>

<style lang="less">
.element-design-layout-setting-drawer-theme-color {
  p {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  margin-top: 24px;
  ul {
    display: flex;
    justify-content: flex-start;
  }
  li {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 8px;
    text-align: center;
    color: #fff;
    font-weight: 700;
  }
}
</style>
