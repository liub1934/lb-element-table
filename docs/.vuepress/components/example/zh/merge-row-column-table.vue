<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data"
      :span-method="arraySpanMethod"
      border>
    </lb-table>

    <lb-table :column="tableData.column"
      :data="tableData.data"
      :span-method="objectSpanMethod"
      style="margin-top: 20px"
      border>
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
            prop: 'id',
            label: 'ID'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'amount1',
            label: '数值1',
            sortable: true
          },
          {
            prop: 'amount2',
            label: '数值2',
            sortable: true
          },
          {
            prop: 'amount3',
            label: '数值3',
            sortable: true
          }
        ],
        data: [
          {
            id: '12987122',
            name: '王小虎',
            amount1: '234',
            amount2: '3',
            amount3: 10
          },
          {
            id: '12987123',
            name: '王小虎',
            amount1: '165',
            amount2: '4',
            amount3: 12
          },
          {
            id: '12987124',
            name: '王小虎',
            amount1: '324',
            amount2: '1',
            amount3: 9
          },
          {
            id: '12987125',
            name: '王小虎',
            amount1: '621',
            amount2: '2',
            amount3: 17
          },
          {
            id: '12987126',
            name: '王小虎',
            amount1: '539',
            amount2: '4',
            amount3: 15
          }
        ]
      }
    }
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
