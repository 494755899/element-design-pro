<template>
  <element-container layout pagination>
    <template slot="pageHeader">3
      <el-steps :active="1">
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      </el-steps>
    </template>
    <element-base-table
      :data="tableData"
      :tableHeader="tableHeader"
      @select-all='sellectAll'
      @edit="editHandler"
      height="600"
      border
    >
      <template  slot-scope="headerItem">
        <el-table-column  v-if="headerItem.prop === 'name'" v-bind="headerItem">
          <template slot="header" slot-scope='scope'>
            <el-input @focus="dd(headerItem, scope)"></el-input>
          </template>
          <template slot-scope="scope">
            <span @click="dd(headerItem, scope)">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column  v-if="headerItem.prop === 'name2'" v-bind="headerItem">
          <template slot="header" slot-scope='scope'>
            <el-button :scope="scope">11111</el-button>
          </template>
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
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
        { type: 'index', fixed: true, label: '你妈' },
        { customer: true, prop: 'name', label: '姓名' },
        { customer: true, prop: 'name2', width: 500 },
        { prop: 'date', label: '日期', minWidth: 500, align: 'right', 'header-align': 'center' },
        { prop: 'date', label: '日期2' },
        { prop: 'address', label: '地址', minWidth: 80, tooltip: true },
        {
          type: 'operate',
          label: '操作2',
          width: '190',
          fixed: 'right',
          operates: [
            { name: '编辑', action: 'edit' },
            { name: '删除', type: 'danger', action: 'cancel' }
          ]
        }
      ]
    }
  },
  methods: {
    dd (item, scope) {
      console.log(item)
      console.log(scope)
    },
    editHandler ({ row, $index }) {
      console.log(row, $index)
    },
    sellectAll (a, b) {
      console.log(a)
    },
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
