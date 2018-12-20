<template>
  <div>
    <el-table v-bind="$attrs" v-on='$listeners'>
      <template v-for="(item, index) in tableHeader">
        <el-table-column v-bind="item" v-if="item.customer" :key="index">
          <template slot-scope="scope">
            <slot v-bind="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else-if='item.type === "operate"' v-bind="item" :key="index">
          <template slot-scope="scope"  v-for="(operate, index) in item.operates">
            <el-button v-bind="operate" :key="index" @click="operateHandler(scope, operate.action)">{{operate.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column  v-bind="item" v-else :key="index"></el-table-column>
      </template>
      <template slot="append">
        <slot name="append"></slot>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tableHeader: {
      type: Array,
      require: true,
      default () {
        return []
      }
    }
  },
  methods: {
    operateHandler (scope, action) {
      this.$emit(action, scope)
    }
  }
}
</script>
