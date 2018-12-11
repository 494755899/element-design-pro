
export default {
  methods: {
    _submitForm () {
      return new Promise((resolve) => {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            resolve()
          } else {
            return false
          }
        })
      })
    },
    _confirmDelete () {
      return new Promise((resolve) => {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resolve()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      })
    },
    _confirmMessage (message, type = 'success') {
      this.$message({
        message,
        type
      })
    }
  }
}
