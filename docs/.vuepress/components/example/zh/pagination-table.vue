<template>
  <lb-table v-loading="loading"
    :column="tableData.column"
    :data="tableData.data"
    pagination
    background
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="[5, 10, 20, 30]"
    :pager-count="5"
    :current-page.sync="currentPage"
    :total="100"
    :page-size="pageSize"
    @size-change="handleSizeChange"
    @p-current-change="handleCurrentChange">
  </lb-table>
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
          }
        ],
        data: []
      },
      loading: false,
      currentPage: 1,
      pageSize: 5,
    }
  },
  created () {
    this.createData(this.pageSize)
  },
  methods: {
    createData (length) {
      this.loading = true
      let data = []
      for (let i = 0; i < length; i++) {
        data.push({
          date: '2016-05-02',
          name: `王小虎-${this.currentPage}-${i + 1}`,
          address: `上海市普陀区金沙江路 -${this.currentPage}-${i + 1} 弄`
        })
      }
      setTimeout(() => {
        this.tableData.data = data
        this.loading = false
      }, 1000)
    },
    handleSizeChange (val) {
      this.currentPage = 1
      this.pageSize = val
      this.createData(this.pageSize)
    },
    handleCurrentChange () {
      this.createData(this.pageSize)
    }
  }
}
</script>
