<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data"
      :merge="['name', 'proportion', 'material', 'value3']"
      border>
    </lb-table>

    <lb-table :column="tableData2.column"
      :data="tableData2.data"
      :merge="['name', 'proportion']"
      border
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
            prop: 'name',
            label: '行业'
          },
          {
            prop: 'proportion',
            label: '市场规模占比'
          },
          {
            prop: 'material',
            label: '主原材料'
          },
          {
            prop: 'value1',
            label: '最新价格'
          },
          {
            prop: 'value2',
            label: '比年初'
          },
          {
            prop: 'value3',
            label: '比上年同期'
          }
        ],
        data: [
          {
            name: ' 氮肥、复合肥',
            proportion: '15.23%',
            material: '尿素',
            value1: '2.04',
            value2: '2.00%',
            value3: '	13.97%'
          },
          {
            name: ' 氮肥、复合肥',
            proportion: '15.23%',
            material: '三元复合肥',
            value1: '2.74',
            value2: '0.37%',
            value3: '	2.24%'
          },
          {
            name: ' 氮肥、复合肥',
            proportion: '15.23%',
            material: '三元复合肥',
            value1: '3.05',
            value2: '0.33%',
            value3: '	2.35%'
          },
          {
            name: ' 种子生产',
            proportion: '6.83%',
            material: '玉米种子',
            value1: '24.3',
            value2: '-16.06%',
            value3: '	-5.70%'
          },
          {
            name: ' 种子生产',
            proportion: '6.83%',
            material: '水稻种子',
            value1: '24.3',
            value2: '-16.06%',
            value3: '	-5.70%'
          }
        ]
      },
      tableData2: {
        column: [
          {
            prop: 'name',
            label: '主要行业',
            width: '150'
          },
          {
            prop: 'proportion',
            label: '市场规模占比',
            width: '150'
          },
          {
            prop: 'indexName',
            label: '指标',
            width: '300'
          },
          {
            prop: 'value1',
            label: '2018年'
          },
          {
            prop: 'value2',
            label: '2017年'
          },
          {
            prop: 'value3',
            label: '2016年'
          }
        ],
        data: [
          {
            name: '房地产（商业住宅）',
            proportion: '60%',
            indexName: '住宅房地产开发投资累计同比增速',
            value1: '13.6%',
            value2: '9.4%',
            value3: '6.4%'
          },
          {
            name: '房地产（商业住宅）',
            proportion: '60%',
            indexName: '商品房销售面积累计累计同比增速',
            value1: '2.9%',
            value2: '7.7%',
            value3: '22.5%'
          },
          {
            name: '建筑业（商业住宅）',
            proportion: '60%',
            indexName: '住宅房屋建筑竣工面积累计同比增长率',
            value1: '0.05%',
            value2: '0.93%',
            value3: '0.24%'
          },
          {
            name: '房地产（公共建筑）',
            proportion: '40%',
            indexName: '办公楼房地产开发投资完成额累计同比增速',
            value1: '-12%',
            value2: '3.5%',
            value3: '5.2%'
          },
          {
            name: '房地产（公共建筑）',
            proportion: '40%',
            indexName: '商业营业用房房地产开发投资累计同比增速',
            value1: '-9.4%',
            value2: '-1.2%',
            value3: '8.4%'
          },
          {
            name: '建筑业（公共建筑）',
            proportion: '40%',
            indexName: '办公用房竣工面积累计值（万平方米）',
            value1: '-8.06%',
            value2: '0.82%',
            value3: '6.46%'
          }
        ]
      }
    }
  }
}
</script>
