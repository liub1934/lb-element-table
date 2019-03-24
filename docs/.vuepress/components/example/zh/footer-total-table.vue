<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data"
      border
      show-summary>
    </lb-table>

    <lb-table :column="tableData.column"
      :data="tableData.data"
      :summary-method="getSummaries"
      style="margin-top: 20px"
      height="250"
      border
      show-summary>
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
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0);
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>
