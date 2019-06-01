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
            render: (h, scope) => {
              return (
                <div>
                  {
                    scope.row._edit
                      ? <el-date-picker
                        value={ scope.row[scope.column.property] }
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                        style="width: 140px"
                        onInput={ (val) => { scope.row[scope.column.property] = val } }>
                      </el-date-picker>
                      : <span>{ scope.row[scope.column.property] }</span>
                  }
                </div>
              )
            }
          },
          {
            prop: 'name',
            label: '姓名',
            render: (h, scope) => {
              return (
                <div>
                  {
                    scope.row._edit
                      ? <el-input value={ scope.row[scope.column.property] } onInput={ (val) => { scope.row[scope.column.property] = val } }></el-input>
                      : <span>{ scope.row[scope.column.property] }</span>
                  }
                </div>
              )
            }
          },
          {
            prop: 'tag',
            label: '标签',
            render: (h, scope) => {
              return (
                <div>
                  {
                    scope.row._edit
                      ? (
                        <el-select value={ scope.row[scope.column.property] }
                          style="width: 80px"
                          onChange={ (val) => { scope.row[scope.column.property] = val } }>
                          {
                            this.tagOptions.map(option => {
                              return (
                                <el-option label={ option.label } value={ option.value }></el-option>
                              )
                            })
                          }
                        </el-select>
                      )
                      : <el-tag type={ scope.row.tag === '家' ? 'primary' : 'success'}>{ scope.row[scope.column.property] }</el-tag>
                  }
                </div>
              )
            }
          },
          {
            label: '操作',
            render: (h, scope) => {
              return (
                <div>
                  {
                    scope.row._edit
                      ? <div>
                        <el-button type="primary" onClick={ () => { this.handleSave(scope) } }>保存</el-button>
                        <el-button onClick={ () => { this.handleCancle(scope) } }>取消</el-button>
                      </div>
                      : <el-button type="primary"
                        onClick={ () => { this.handleEdit(scope) } }>编辑</el-button>
                  }
                </div>
              )
            }
          }
        ],
        data: [
          {
            date: '2016-05-02',
            name: '王小虎1',
            tag: '家'
          },
          {
            date: '2016-05-02',
            name: '王小虎2',
            tag: '公司'
          },
          {
            date: '2016-05-02',
            name: '王小虎3',
            tag: '公司'
          }
        ],
        defaultData: []
      },
      tagOptions: [
        {
          label: '家',
          value: '家'
        },
        {
          label: '公司',
          value: '公司'
        }
      ]
    }
  },
  created () {
    this.tableData.defaultData = JSON.parse(JSON.stringify(this.tableData.data))
  },
  methods: {
    handleEdit (scope) {
      this.$set(scope.row, '_edit', true)
    },
    handleSave (scope) {
      this.$set(scope.row, '_edit', false)
      this.$set(this.tableData.defaultData, scope.$index, JSON.parse(JSON.stringify(scope.row)))
    },
    handleCancle (scope) {
      this.$set(this.tableData.data, scope.$index, JSON.parse(JSON.stringify(this.tableData.defaultData[scope.$index])))
    }
  }
}
</script>
