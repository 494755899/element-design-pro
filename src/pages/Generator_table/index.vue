<template>
  <element-container layout>
    <template slot="pageHeader">
      <el-button @click="open_add">生成表格组织数据</el-button>
    </template>
    <element-base-table :tableData="tableData" :tableHeader="tableHeader">
    </element-base-table>
  </element-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
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
      ],
      tableHeader: [
        { key: 'name', label: '姓名', width: 300 },
        { key: 'date', label: '日期', width: 200 },
        { key: 'address', label: '地址' }
      ]
    }
  },
  methods: {
    open_add () {
      this._openDialog({
        name: 'd_add',
        cache: true,
        data: {
          title: '生成表格组织数据',
          tableHeader: this.tableHeader
        },
        methods: {
          changetableHeader: this.changetableHeader
        }
      })
    },
    changetableHeader (tableHeader) {
      this.tableHeader = tableHeader
    }
  }
}
</script>
