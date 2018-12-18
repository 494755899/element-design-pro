<template>
  <element-container layout>
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form> -->
    <element-base-table
      :tableData="tableData"
      :tableHeader="tableHeader"
      :handleSelectionChange="handleSelectionChange"
      border
      :row-class-name="rowClassName">
      <template slot-scope="{ row, tag }">
        <span @click="ss(scope)" v-if="tag === 'name'">
          {{row.name + 'sssss'}}
        </span>
        <span @click="ss(scope)" v-if="tag === 'name2'">
          {{row.name + 'dddddd'}}
        </span>
      </template>
    </element-base-table>
  </element-container>
</template>

<script>
export default {
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  data () {
    return {
      loading: true,
      formInline: {
        user: '',
        region: '',
        date1: '',
        date2: ''
      },
      tableVisible: {},
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
        { type: 'selection' },
        { type: 'index', fixed: 'left', indexMethod2: this.indexMethod2 },
        { customer: true, prop: 'name', label: '姓名', width: 200 },
        { customer: true, prop: 'name2', label: '姓名2', width: 200 },
        { prop: 'date', label: '日期', width: 200, filter: 'time' },
        { prop: 'date', label: '日期2', width: 200, filterMethod: this.aa },
        { prop: 'address', label: '地址', width: 100 },
        {
          type: 'operate',
          label: '操作2',
          width: '200',
          fixed: 'right',
          operates: [
            { name: '编辑', method: this.modify },
            { name: '删除', method: this.cancel, primary: 'danger' }
          ]
        }
      ],
      currentPage4: 4
    }
  },
  methods: {
    indexMethod2 (index) {
      return index + 10
    },
    modify (row, index) {
      console.log(row)
      console.log(index)
    },
    cancel (row, index) {
      console.log(row)
      console.log(index)
    },
    handleSelectionChange (a, b) {
      console.log(a, b)
    },
    ss (value) {
      console.log(value)
    },
    aa (value) {
      return value + 'aaaaaaa'
    },
    rowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    add (index) {
      console.log(this.tableData)
      this.tableData[index].flag = !this.tableData[index].flag
    },
    onSubmit () {
      console.log('submit!')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleEdit () {}
  }
}
</script>

<style lang="less">
.line {
  text-align: center;
}
.reference-button {
  margin: 0 10px;
}
</style>
