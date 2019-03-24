<template>
  <lb-table border
    :column="tableData.column"
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
            render: (h, scope) => {
              return (
                <div>
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{ scope.row.date }</span>
                </div>
              )
            }
          },
          {
            prop: 'name',
            label: '姓名',
            render: (h, scope) => {
              return (
                <el-popover trigger="hover"
                  placement="top">
                  <p>姓名: { scope.row.name }</p>
                  <p>住址: { scope.row.address }</p>
                  <div slot="reference" style="display: inline-block">
                    <el-tag size="medium">{ scope.row.name }</el-tag>
                  </div>
                </el-popover>
              )
            }
          },
          {
            label: '操作',
            render: (h, scope) => {
              return (
                <div>
                  <el-button
                    size="mini"
                    onClick={ () => { this.handleEdit(scope.$index, scope.row) } }>编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    onClick={ () => { this.handleDelete(scope.$index, scope.row) } }>删除</el-button>
                </div>
              )
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
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1520 弄'
          }
        ]
      }
    }
  },
  methods: {
    handleEdit (index, row) {
        console.log(index, row)
        this.$message(`点击的了编辑，索引：${ index }`)
      },
    handleDelete (index, row) {
      console.log(index, row)
      this.$message(`点击的了删除，索引：${ index }`)
    }
  }
}
</script>
