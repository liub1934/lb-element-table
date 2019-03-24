<template>
  <div>
    <lb-table ref="lbTable"
      highlight-current-row
      :column="tableData.column"
      :data="tableData.data"
      @current-change="handleCurrentChange">
    </lb-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData.data[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: {
        column: [
          {
            type: 'index',
            align: 'center'
          },
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
      currentRow: null
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.lbTable.setCurrentRow(row);
    },
    handleCurrentChange (val) {
      this.currentRow = val;
    }
  }
}
</script>
