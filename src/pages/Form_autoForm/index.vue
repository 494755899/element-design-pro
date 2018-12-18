<template>
  <element-container layout pagination>
    <template slot="pageHeader">
      <el-steps :active="1">
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      </el-steps>
    </template>
    <element-base-table
      :tableData="tableData"
      :tableHeader="tableHeader"
      height="600"
      border
    >
      <template slot-scope="{ row, tag }">
        <span v-if="tag === 'name'">
          {{row.name + 'sssss'}}
        </span>
        <span v-if="tag === 'name2'">
          {{row.name + 'dddddd'}}
        </span>
      </template>
    </element-base-table>
  </element-container>
</template>

<script>
import ElementPagination from '@/mixins/baseElement/ElementPagination'
export default {
  mixins: [ElementPagination],
  data () {
    return {
      tableData: [],
      tableHeader: [
        { type: 'selection' },
        { type: 'index', fixed: 'left' },
        { customer: true, key: 'name', label: '姓名', width: 300 },
        { customer: true, key: 'name2', label: '姓名2', width: 300 },
        { key: 'date', label: '日期', width: 200, filter: 'time' },
        { key: 'date', label: '日期2', width: 200 },
        { key: 'address', label: '地址', width: 100 },
        {
          type: 'operate',
          label: '操作2',
          width: '190',
          fixed: 'right',
          operates: [
            { name: '编辑' },
            { name: '删除', primary: 'danger' }
          ]
        }
      ]
    }
  },
  methods: {
    initList () {
      setTimeout(() => {
        this.tableData = [
          {
            date: 1514764400000,
            name: '王小虎1',
            address: '上海市普陀区金沙江路 15181 弄'
          },
          {
            date: 1514754800000,
            name: '王小虎2',
            address: '上海市普陀区金沙江路 15182 弄'
          },
          {
            date: 1514764800000,
            name: '王小虎3',
            address: '上海市普陀区金沙江路 15183 弄'
          },
          {
            date: 1514864800000,
            name: '王小虎4',
            address: '上海市普陀区金沙江路 15184 弄'
          }
        ]
        this.total = 100
      }, 1000)
    }
  }
}
</script>
