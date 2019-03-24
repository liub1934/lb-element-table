<template>
  <div>
    <lb-table ref="multipleTable"
      :column="tableData.column"
      :data="tableData.data"
      :default-sort = "{prop: 'date', order: 'descending'}">
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
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址',
            formatter: this.formatter
          }
        ],
        data: [
          {
            date: '2016-05-01',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1511 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1512 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1513 弄'
          }
        ]
      },
      multipleSelection: []
    }
  },
  methods: {
    formatter(row) {
      return row.address + '-formatter'
    }
  }
}
</script>
