<template>
  <div>
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <lb-table ref="filterTable"
      :column="tableData.column"
      :data="tableData.data">
    </lb-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            prop: 'date',
            label: '日期',
            sortable: true,
            columnKey: 'date',
            filters: [
              {text: '2016-05-01', value: '2016-05-01'},
              {text: '2016-05-02', value: '2016-05-02'},
              {text: '2016-05-03', value: '2016-05-03'},
              {text: '2016-05-04', value: '2016-05-04'}
            ],
            filterMethod: this.filterHandler
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
            prop: 'tag',
            label: '标签',
            filters: [
              { text: '家', value: '家' },
              { text: '公司', value: '公司' }
            ],
            filterMethod: this.filterTag,
            filterPlacement: 'bottom-end',
            render: (h, scope) => {
              return (
                <el-tag type={ scope.row.tag === '家' ? 'primary' : 'success' }>
                  { scope.row.tag }
                </el-tag>
              )
            }
          }
        ],
        data: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tag: '公司'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tag: '公司'
          }
        ]
      }
    }
  },
  methods: {
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value;
    }
  }
}
</script>
