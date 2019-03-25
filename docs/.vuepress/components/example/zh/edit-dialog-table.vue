<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data">
    </lb-table>

    <el-dialog :visible.sync="dialogVisible"
      title="编辑"
      append-to-body>
      <div class="dialog-content">
        <el-form v-if="currentEdit"
          label-width="100px">

          <el-form-item label="日期">
            <el-date-picker v-model="currentEdit.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="姓名">
            <el-input v-model="currentEdit.name"
              placeholder="请输入姓名">
            </el-input>
          </el-form-item>

          <el-form-item label="地址">
            <el-input v-model="currentEdit.address"
              type="textarea"
              placeholder="请输入地址">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: {
        column: [
          {
            prop: 'date',
            label: '日期'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址'
          },
          {
            label: '操作',
            render: (h, scope) => {
              return <el-button type="primary" onClick={ () => { this.openDialog(scope) } }>编辑</el-button>
            }
          }
        ],
        data: [
          {
            date: '2016-05-02',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      },
      currentEdit: null,
      currentIndex: null,
      dialogVisible: false
    }
  },
  methods: {
    openDialog (scope) {
      this.currentEdit = JSON.parse(JSON.stringify(scope.row))
      this.currentIndex = scope.$index
      this.dialogVisible = true
    },
    confirm () {
      this.dialogVisible = false
      this.$set(this.tableData.data, this.currentIndex, this.currentEdit)
    }
  }
}
</script>
