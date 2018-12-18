<template>
  <div class="dialogs">
      <component v-for="item in dialogs" :is="item" :key="item"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/util/buildIn/bus'
export default {
  name: 'Dialogs',
  created () {
    // 存需要缓存弹是弹窗的数据对象
    this.cache = {}
    /**
       * @description
       * 切换路由的时候清除所有弹是窗
      */
    Bus.$on('Dialogs.cleanDialog', () => {
      this.dialogs = []
    })
    /**
       *  @param {name} string 弹窗页面注册名
       *  @param {data} object 当弹窗页面需要缓存时，关闭页面时传回的缓存数据
       *  @description
       *  如果没有name的时候说明切换路由的时候。清除所有弹窗页面缓存,提前条件如果全局设置了切换路由清空弹窗缓存
       *  否则就是把需要缓存的弹窗页面缓存数据存入this.cache对象中
       */
    Bus.$on('Dialogs.cache', (name, data) => {
      if (!name) {
        this.cache = {}
      } else {
        this.cache[name] = data
      }
    })
    /**
       * @param {cache} boolean 是否配置了缓存
       * @param {name} string 窗弹组件的页面路径名
       * @param {data} object 给弹窗组件传入的数据
       * @param {methods} object 给弹窗组件的引用方法
       * @description
       * 通过参数对弹窗组件进行异步加载，插入模版中
      */
    Bus.$on('Dialogs.push', ({ cache, name, data, methods }) => {
      this.loadDialog({
        cache,
        name,
        data: data ? JSON.parse(JSON.stringify(data)) : {},
        methods
      })
    })
    /**
       * @param {name} 当前被关闭弹窗的组件注册名
       * @description
       * 弹窗是通过dialogs进行动态组件循环出来的，关闭之后需要把对应的弹窗组件去除
       */
    Bus.$on('Dialogs.close', (name) => {
      const index = this.dialogs.indexOf(name)
      this.dialogs.splice(index, 1)
    })
  },
  data: function () {
    return {
      dialogs: [] // 存放加入的弹窗组件
    }
  },
  methods: {
    checkDialogName (name) {
      return name.startsWith('d_')
    },
    /**
       *
      */
    loadDialog (data, fn) {
      const that = this
      // 获取是否缓存
      const cache = data.cache
      // 页面路径名称
      const name = data.name
      if (!this.checkDialogName(name)) {
        throw new Error('The popover page must start with d_')
      }
      const pathName = this.$route.path + '/' + name
      // 通过路径名称转化组件id
      const id = pathName.replace(/\//g, '-').substr(1, pathName.length - 1)
      // 通过懒加载加载弹窗页面
      console.log(pathName)
      import(`../../pages${pathName}` /* webpackExclude: /components/ */).then(module => {
        let dialogTemplate = Vue.extend(module.default)
        console.log(dialogTemplate)
        let extendTemplate = {
          data () {
            // 声明一个对象
            let obj = {}
            // 如果全局缓存中有对应的id，说明此弹窗是需要缓存的
            if (that.cache[id]) {
              // 把传入的data数据与之前缓存对象的data属性进行一个合并
              obj = Object.assign({}, data.data, { ...that.cache[id] })
            } else {
              // 否则直接传入的对象进行合并
              obj = data.data
            }
            // 最后把数据进行返回
            return Object.assign({}, {
              ...obj,
              destoryName: id
            })
          },
          methods: data.methods
        }
        if (cache) {
          extendTemplate.destroyed = function () {
            Bus.$emit('Dialogs.cache', this.destoryName, this.$data)
          }
        }
        dialogTemplate = dialogTemplate.extend(extendTemplate)
        Vue.component(id, dialogTemplate)
        that.dialogs.push(id)
      }).catch(() => {
        console.log('Chunk loading failed', name)
      })
    }
  }
}
</script>
