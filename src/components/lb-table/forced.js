export default {
  selection: {
    renderHeader: (h, { store }) => {
      return <el-checkbox
        disabled={ store.states.data && store.states.data.length === 0 }
        indeterminate={ store.states.selection.length > 0 && !this.isAllSelected }
        nativeOn-click={ this.toggleAllSelection }
        value={ this.isAllSelected } />
    },
    renderCell: (h, { row, column, store, $index }) => {
      return <el-checkbox
        nativeOn-click={ (event) => event.stopPropagation() }
        value={ store.isSelected(row) }
        disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
        on-input={ () => { store.commit('rowSelectedChanged', row) } } />
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: (h, scope, propColumn) => {
      return <span>{propColumn.label || '#'}</span>
    },
    renderCell: (h, { $index, column }) => {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }

      return <div>{ i }</div>
    },
    sortable: false
  },
  expand: {
    renderHeader: (h, scope, propColumn) => {
      return <span>{propColumn.label || ''}</span>
    },
    renderCell: (h, { row, store }, proxy) => {
      const expanded = store.states.expandRows.indexOf(row) > -1
      return <div class={ 'el-table__expand-icon ' + (expanded ? 'el-table__expand-icon--expanded' : '') }
        on-click={ e => proxy.handleExpandClick(row, e) }>
        <i class='el-icon el-icon-arrow-right'></i>
      </div>
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
}
