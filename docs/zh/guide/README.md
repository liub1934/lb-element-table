---
sidebar: auto
---

# 使用示例

## 基本使用

### 基础表格
基础的表格展示用法。

<demo-block>
  <example-zh-basis-table slot="source"></example-zh-basis-table>
  <<< @/docs/.vuepress/components/example/zh/basis-table.vue
</demo-block>

### 表格对齐
表格头部及内容的对齐方式。

<demo-block>
  <example-zh-align-table slot="source"></example-zh-align-table>
  默认表头及表格内容左对齐，可以分别设置不同字段的表头及表格内容对齐方式。

  `lb-table`设置`align`属性可以设置整体表格的对齐方式，默认`left`左对齐，可配置项：`left`、`center`、`right`。

  `column`中可单独为某个字段配置`align`，优先级`column配置的align` > `lb-table配置的align`。
  
  表头对齐`header-align`同理，如果不设置对齐方式同`column`和`lb-table`设置的`align`

  <<< @/docs/.vuepress/components/example/zh/align-table.vue
</demo-block>

### 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

<demo-block>
  <example-zh-stripe-table slot="source"></example-zh-stripe-table>
  <<< @/docs/.vuepress/components/example/zh/stripe-table.vue
</demo-block>

### 带边框表格

<demo-block>
  <example-zh-border-table slot="source"></example-zh-border-table>
  <<< @/docs/.vuepress/components/example/zh/border-table.vue
</demo-block>

### 带状态表格
可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

<demo-block>
  <example-zh-status-table slot="source"></example-zh-status-table>
  可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

  <<< @/docs/.vuepress/components/example/zh/status-table.vue
</demo-block>

### 固定表头

纵向内容过多时，可选择固定表头。

<demo-block>
  <example-zh-fixed-header-table slot="source"></example-zh-fixed-header-table>
  只要在`lb-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

  <<< @/docs/.vuepress/components/example/zh/fixed-header-table.vue
</demo-block>


### 固定列
横向内容过多时，可选择固定列。

<demo-block>
  <example-zh-fixed-column-table slot="source"></example-zh-fixed-column-table>
  固定列需要在`column`属性中配置`fixed`属性，它接受 Boolean 值或者leftright，表示左边固定还是右边固定。

  <<< @/docs/.vuepress/components/example/zh/fixed-column-table.vue
</demo-block>

### 流体高度
当数据量动态变化时，可以为 Table 设置一个最大高度。

<demo-block>
  <example-zh-fluid-height-table slot="source"></example-zh-fluid-height-table>
  通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

  <<< @/docs/.vuepress/components/example/zh/fluid-height-table.vue
</demo-block>

### 多级表头
数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

<demo-block>
  <example-zh-multi-header-table slot="source"></example-zh-multi-header-table>
  通过设置`column`中的`children`进行表格头嵌套，理论支持无限极嵌套，嵌套也支持自定义表头及列数据。

  <<< @/docs/.vuepress/components/example/zh/multi-header-table.vue
</demo-block>

### 单选
选择单行数据时使用色块表示。

<demo-block>
  <example-zh-radio-table slot="source"></example-zh-radio-table>
  同 `El-Table` 组件，只需要配置`highlight-current-row`属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。
  如果需要显示索引，可设置索引列`type`属性为`index`即可显示从 1 开始的索引号。

  <<< @/docs/.vuepress/components/example/zh/radio-table.vue
</demo-block>

### 多选
选择多行数据时使用 Checkbox。

<demo-block>
  <example-zh-multiple-table slot="source"></example-zh-multiple-table>
  设置`type`为`selection`即可。

  <<< @/docs/.vuepress/components/example/zh/multiple-table.vue
</demo-block>

### 排序
对表格进行排序，可快速查找或对比数据

<demo-block>
  <example-zh-sort-table slot="source"></example-zh-sort-table>
  在`column`相应列设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 `lb-table` 的default-sort属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 `lb-table` 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。

  <<< @/docs/.vuepress/components/example/zh/sort-table.vue
</demo-block>

### 筛选
对表格进行筛选，可快速查找到自己想看的数据。

<demo-block>
  <example-zh-filter-table slot="source"></example-zh-filter-table>
  在列中设置 `filters` `filter-method`属性即可开启该列的筛选，`filters` 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。

  <<< @/docs/.vuepress/components/example/zh/filter-table.vue
</demo-block>

### 展开行
当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

<demo-block>
  <example-zh-expand-row-table slot="source"></example-zh-expand-row-table>
  通过设置 `type="expand"`可以开启展开行功能，展开行的内容可以通过`render`自定义

  <<< @/docs/.vuepress/components/example/zh/expand-row-table.vue
</demo-block>

### 自定义列模板
自定义列的显示内容，可组合其他组件使用。

<demo-block>
  <example-zh-render-table slot="source"></example-zh-render-table>
  暂不支持官方`<template slot-scope="scope"></template>`用法自定义，统一使用`render`和`JSX`写法。`render`参考[官网文档](https://cn.vuejs.org/v2/guide/render-function.html)。个人觉得`JSX`写法更简洁舒服些，后面的相关示例都是`JSX`写法，
  `vue-cli-2`脚手架搭建的项目如需支持`JSX`，请参考配置：[点击前往](https://github.com/vuejs/babel-plugin-transform-vue-jsx)，如需支持`v-model`写法，请安装配置：[点击前往](https://github.com/nickmessing/babel-plugin-jsx-v-model)。
  `vue-cli-3`脚手架自带，可直接使用`JSX`,`JSX`写法参考同上地址。

  <<< @/docs/.vuepress/components/example/zh/render-table.vue
</demo-block>

### 树形数据与懒加载
2.8.0+版本支持树形表格

<demo-block>
  <example-zh-tree-table slot="source"></example-zh-tree-table>
  用法同`el-table`，当 `row` 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 `row` 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

  <<< @/docs/.vuepress/components/example/zh/tree-table.vue
</demo-block>

### 自定义表头
表头支持自定义。

<demo-block>
  <example-zh-render-header-table slot="source"></example-zh-render-header-table>
  通过设置`renderHeader`来自定义表头，写法同`自定义列模板`

  ::: tip
  由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
  :::

  <<< @/docs/.vuepress/components/example/zh/render-header-table.vue
</demo-block>

### 表尾合计行
若表格展示的是各类数字，可以在表尾显示各列的合计。

<demo-block>
  <example-zh-footer-total-table slot="source"></example-zh-footer-total-table>
  将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

  <<< @/docs/.vuepress/components/example/zh/footer-total-table.vue
</demo-block>

### 自定义索引
若表格展示的是各类数字，可以在表尾显示各列的合计。

<demo-block>
  <example-zh-custom-index-table slot="source"></example-zh-custom-index-table>
  通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。

  <<< @/docs/.vuepress/components/example/zh/custom-index-table.vue
</demo-block>

### 合并行或列
多行或多列共用一个数据时，可以合并行或列。

<demo-block>
  <example-zh-merge-row-column-table slot="source"></example-zh-merge-row-column-table>
  通过给`lb-table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

  <<< @/docs/.vuepress/components/example/zh/merge-row-column-table.vue
</demo-block>

## 扩展使用

### 表格分页
表格支持开启分页显示

<demo-block>
  <example-zh-pagination-table slot="source"></example-zh-pagination-table>
  `lb-table`设置属性`pagination`即可开启分页，分页相关参数及用法同`el-pagination`。暂时新增几个新参数，`paginationTop`表示分页距离表格的间距，默认`15px`,`paginationAlign`分页的对齐方式，默认为`right`,分页整体显示在右侧，可配置`left`、`center`、`right`

  ::: tip
  由于分页和表格的`current-change`冲突，所以分页请使用`p-current-change`
  :::

  <<< @/docs/.vuepress/components/example/zh/pagination-table.vue
</demo-block>

### 表格动态合并
支持表格动态合并

<demo-block>
  <example-zh-merge-table slot="source"></example-zh-merge-table>
  `lb-table`上配置`merge`,`merge`为一个包含需要合并的`column`中`prop`的数组，配置后会自动将值相同的项自动合并。

  <<< @/docs/.vuepress/components/example/zh/merge-table.vue
</demo-block>

### 普通形式表格编辑
数据简单的情况下，可以通过点击编辑按钮直接进行表格的编辑、保存、取消操作

<demo-block>
  <example-zh-edit-table slot="source"></example-zh-edit-table>
  由于编辑模式下数据格式不统一，如日期数据通过`DatePicker`选择，普通的文本通过`Input`，下拉选择的通过`ElSelect`等，所以就不进行整合了，
  大家可以通过`render`自定义出任意效果的编辑模式，原理就是根据是否是编辑模式的字段，渲染不同的内容，
  如本例中的`_edit`,为`true`的情况下渲染相应的编辑模式下的组件，否则就是普通的文本。

  由于编辑模式中有取消，所以取消的时候得还原原数据，可以通过定义一个`defaultData`,该值为`JSON.parse(JSON.stringify(this.tableData.data))`,
  加`JSON.parse`和`JSON.stringify`防止`defaultData`数据随着`this.tableData.data`的改变而改变，取消的时候通过`$index`索引从`defaultData`中拿到原数据，
  然后根据`$index`索引修改`this.tableData.data`的数据

  ::: tip
  由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onChange`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
  :::

  <<< @/docs/.vuepress/components/example/zh/edit-table.vue
</demo-block>

### 弹窗形式表格编辑
数据复杂的情况，建议通过弹窗形式进行数据编辑的操作

<demo-block>
  <example-zh-edit-dialog-table slot="source"></example-zh-edit-dialog-table>

  <<< @/docs/.vuepress/components/example/zh/edit-dialog-table.vue
</demo-block>
