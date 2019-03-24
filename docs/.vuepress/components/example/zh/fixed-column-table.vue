<template>
  <lb-table :column="tableData.column"
    :data="tableData.data">
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
            label: '日期',
            width: '150',
            fixed: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '120'
          },
          {
            prop: 'province',
            label: '省份',
            width: '120'
          },
          {
            prop: 'city',
            label: '市区',
            width: '120'
          },
          {
            prop: 'address',
            label: '地址',
            width: '300'
          },
          {
            prop: 'zip',
            label: '邮编',
            width: '120',
            fixed: 'right'
          }
        ],
        data: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }
        ]
      }
    }
  }
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
