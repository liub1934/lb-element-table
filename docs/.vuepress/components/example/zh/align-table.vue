<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data"
      border
      align="center">
    </lb-table>

    <lb-table :column="tableData.column2"
      :data="tableData.data"
      border
      align="center"
      style="margin-top: 20px">
    </lb-table>

    <lb-table :column="tableData.column3"
      :data="tableData.data"
      border
      align="center"
      header-align="right"
      style="margin-top: 20px">
    </lb-table>
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
            label: '日期',
            width: '120'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '120'
          },
          {
            prop: 'address',
            label: '地址'
          }
        ],
        column2: [
          {
            prop: 'date',
            label: '日期',
            width: '120',
            align: 'right'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '120',
            align: 'left'
          },
          {
            prop: 'address',
            label: '地址'
          }
        ],
        column3: [
          {
            prop: 'date',
            label: '日期',
            width: '120',
            align: 'left'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '120',
            align: 'left'
          },
          {
            prop: 'address',
            label: '地址',
            headerAlign: 'left'
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
      }
    }
  }
}
</script>
