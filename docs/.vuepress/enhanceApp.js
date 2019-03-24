import Element from 'element-ui'
import LbTable from '../../src/components/lb-table/lb-table'
import DemoBlock from './components/demo-block/demo-block'
import 'element-ui/lib/theme-chalk/index.css'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Element)
  Vue.component('lb-table', LbTable)
  Vue.component('demo-block', DemoBlock)
}
