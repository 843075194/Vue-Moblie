import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.scss'

// 加载Vant组件库样式
import Vant from 'vant'
import 'vant/lib/index.css'
// 加载移动端适配 自动设置REM 基准值 (html标签字体大小)
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
