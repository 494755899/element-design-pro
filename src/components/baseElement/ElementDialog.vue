<template>
  <el-dialog v-VDrag :title="title" :fullscreen="fullscreen" :center="center" :visible="true" :before-close="_closeDialog" :width="width">
    <slot></slot>
    <template slot="footer">
       <el-button @click="_closeDialog">取 消</el-button>
    </template>
  </el-dialog>
</template>

<script>
import VDrag from '@/directive/VDrag/index'
export default {
  directives: { VDrag },
  data () {
    const p = this.$parent
    return {
      title: p.title,
      width: p.width || '80%',
      fullscreen: p.fullscreen || false,
      center: p.center || false
    }
  }
}
</script>
