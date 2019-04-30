import Vue from 'vue'
import App from './App.vue'

// 引入全局样式  只导入不使用  可以省略  xxx from
import './assets/statics/site/css/style.css'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
