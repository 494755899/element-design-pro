<template>
  <el-submenu
    :popper-class="navTheme === 'dark' ? 'el-menu-dark--vertical' : 'el-menu-light--vertical'"
    v-if="item.children && item.children.length > 0"
    :index="item.id"
  >
    <template slot="title">
      <i :class="item.icon"></i>
      <span slot="title" class="title">{{item.name}}</span>
    </template>
    <paper-menu v-for="(innerItem, innerIndex) in item.children" :item="innerItem" :key="innerIndex" :index="item.id"></paper-menu>
  </el-submenu>
  <el-menu-item :index="item.path" v-else>{{item.name}}</el-menu-item>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'paperMenu',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    ...mapState(['navTheme'])
  }
}
</script>
