<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
         <el-button type="primary" @click="addHandler">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="loading"
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column width="180" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="modifyHandler(scope.$index, scope.row)">编辑</el-button>
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button type="primary" size="mini">确定</el-button>
            </div>
            <span class="reference-button" slot="reference">
              <el-button size="mini" type="danger" >删除</el-button>
            </span>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
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
      tableData: Array(10).fill({
        flag: false,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }),
      currentPage4: 4
    }
  },
  methods: {
    addHandler () {
      this._openDialog({
        name: 'd_edit',
        data: {
          title: '新建数据',
          width: '50%'
        }
      })
    },
    modifyHandler () {
      this._openDialog({
        name: 'd_edit',
        data: {
          title: '修改数据',
          width: '50%',
          form: {
            name: '1111',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: 'fdsafasfa'
          }
        }
      })
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

<style lang="less" scoped>
.reference-button {
  margin: 0 10px;
}
</style>
