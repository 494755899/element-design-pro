<template>
  <el-submenu
    :popper-class="popperClass()"
    v-if="item.children && item.children.length > 0"
    :index="item.id"
  >
    <template slot="title">
      <i :class="item.icon"></i>
      <span slot="title" class="title">{{item.name}}</span>
    </template>
    <element-design-menu-item v-for="(innerItem, innerIndex) in item.children" :item="innerItem" :key="innerIndex" :index="item.id"></element-design-menu-item>
  </el-submenu>
  <el-menu-item :index="item.path" v-else>{{item.name}}</el-menu-item>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'element-design-menu-item',
  props: {
    item: {
      type: Object
    },
    flag: {
      type: String,
      default: 'vertical'
    }
  },
  computed: {
    ...mapState(['navTheme'])
  },
  methods: {
    popperClass () {
      if (this.flag === 'vertical') {
        return this.navTheme === 'dark' ? 'el-menu-dark--vertical' : 'el-menu-light--vertical'
      } else {
        return this.navTheme === 'dark' ? 'el-menu-dark--horizontal' : 'el-menu-light--horizontal'
      }
    }
  }
}
</script>
