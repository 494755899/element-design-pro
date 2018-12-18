<template>
  <element-dialog>
    <el-row :gutter="20">
      <el-col :span="15">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数据条目</span>
             <el-button style="float: right; padding: 3px 10px" type="text">清除所有数据</el-button>
            <el-button style="float: right; padding: 3px 10px" type="text" @click="changetableHeaderHandler">生成数据</el-button>
          </div>
          <el-tag
            class="tag"
            v-for="(tag, index) in tableHeader"
            :key="index"
            >
            <span>{{tag}}</span>
            <i class="el-icon-edit icon" @click="addClick(index)"></i>
            <i class="el-icon-delete icon" @click="removeClick(index)"></i>
          </el-tag>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-form ref="form" :model="form" label-width="80px" v-if="currentIndex !== ''">
          <el-form-item label="活动区域">
            <el-select v-model="form.type" placeholder="请选择活动区域">
              <el-option label="默认" value="default"></el-option>
              <el-option label="序号" value="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="key" v-if="form.type === 1">
            <el-input v-model="form.key" placeholder="表头对应的数据内容key值"></el-input>
          </el-form-item>
          <el-form-item label="label" v-if="form.type === 1">
            <el-input v-model="form.label" placeholder="表头名称"></el-input>
          </el-form-item>
          <el-form-item label="width" v-if="form.type === 1">
            <el-input v-model="form.width" placeholder="宽度" type="number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </element-dialog>
</template>

<script>
export default {
  name: 'generate-add',
  data () {
    return {
      currentIndex: '',
      form: {
        type: 'default',
        key: '',
        width: '',
        label: ''
      }
    }
  },
  methods: {
    async removeClick (index) {
      await this._confirmDelete({
        desc: '是否清楚当前数据?'
      })
      this.tableHeader.splice(index, 1)
    },
    addClick (index) {
      this.currentIndex = index
    },
    onSubmit () {
      const { type, key, width, label } = this.form
      let pushData = {}
      if (type === 'default') {
        pushData = { key, width, label }
      } else if (type === 'index') {
        pushData = { type }
      }
      this.tableHeader.push(pushData)
    },
    changetableHeaderHandler () {
      this.changetableHeader(JSON.parse(JSON.stringify(this.tableHeader)))
    }
  }
}
</script>

<style lang="less" scoped>
.tag {
  display: block;
  margin-bottom: 10px;
}
.icon {
  padding-left: 10px;
}
</style>
