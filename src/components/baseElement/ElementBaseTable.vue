<template>
  <div>
    <el-table :data="tableData"  @selection-change="handleSelectionChange" v-bind="$attrs">
      <template v-for="({prop, label, width, fixed, filter, filterMethod, customer, type, indexMethod2, operates }, index) in tableHeader">
        <el-table-column
          v-if="type === 'index'"
          type="index"
          :key="index"
          :index="indexMethod2 || indexMethod"
          :label="label || '序号'"
          :width="width || 50">
        </el-table-column>
        <el-table-column
          :fixed="fixed"
          v-else-if="type === 'selection'"
          type="selection"
          :key="index"
          :width="width || 50">
        </el-table-column>
        <el-table-column
          :fixed="fixed"
          v-else-if="type === 'operate'"
          :key="index"
          :label="label || '操作'"
          :width="width || 100">
          <template slot-scope="scope">
            <el-button v-for="(button, index) in operates" @click="button.method(scope.row, scope.$index)" :type="button.primary || 'primary'" :key="index">
              {{button.name}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          v-else
          :key="index"
          :fixed="fixed"
          :label="label"
          :width="width">
          <span slot-scope="scope">
            <span v-if="filterMethod">{{filterMethod(scope.row[prop])}}</span>
            <span v-else-if="filter === 'time'">{{scope.row[prop] | formatTime }}</span>
            <span v-else-if="customer">
              <slot v-bind="{row: scope.row, tag: prop}"></slot>
            </span>
            <span v-else>{{scope.row[prop]}}</span>
          </span>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$attrs)
  },
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    tableHeader: {
      type: Array,
      default () {
        return []
      }
    },
    handleSelectionChange: {
      type: Function
    }
  },
  methods: {
    indexMethod (index) {
      return index + 1
    }
  }
}
</script>

<style lang="less">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
